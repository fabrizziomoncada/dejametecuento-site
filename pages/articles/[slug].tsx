import { fetchAPI, getMediaURL } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Article, ArticlesList } from '@components/article'
import { NextSeo } from 'next-seo'
import ExitPreviewButton from '@components/common/ExitPreviewButton'
import { Layout } from '@components/common/Layout'
import ArticleSubheader from '@components/common/Subheader/ArticleSubheader'

export async function getStaticPaths() {
  // If you don't have too many articles you can uncomment this code and pre-build each page instead
  const articles: TArticle[] = await fetchAPI('/articles')
  return {
    paths: articles.map((article) => `/articles/${article.slug}`),
    fallback: false,
  }
  // return {
  //   paths: [],
  //   fallback: 'blocking',
  // }
}

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsContext<{ slug: string }>) {
  // if is preview it will search on to the unpublished entries as well
  const article: TArticle = (
    await fetchAPI(
      `/articles?slug=${params?.slug}${
        preview ? '&_publicationState=preview' : ''
      }`
    )
  )[0]

  // Only the recent's 5
  const recentArticles: TArticle[] = await fetchAPI('/articles?_limit=5')

  // No props will trigger a 404
  if (!article) return { props: {} }
  return { props: { preview, article, recentArticles } }
}

function ArticlePage({
  article,
  recentArticles,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !article) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <NextSeo
        title={article?.title}
        description={article?.description}
        openGraph={{
          title: article?.title,
          description: article?.description,
          type: 'article',
          article: {
            publishedTime: article?.published_at as string,
            modifiedTime: article?.updated_at as string,
            section: article?.category.title,
            authors: [
              `'https://www.example.com/contributors/'${article?.author.slug}`,
            ],
            tags: [`${article?.category.title}`],
          },
          // Only include OG image if exists
          // This will break disabling Strapi Image Optimization
          ...(article?.cover && {
            images: Object.values(article.cover.formats).map((image) => {
              return {
                url: getMediaURL(image?.url),
                width: image?.width,
                height: image?.height,
              }
            }),
          }),
        }}
      />
      <Layout subheader={<ArticleSubheader article={article!} />}>
        <Article article={article} />
        <ArticlesList articles={recentArticles!} title="Continúa Leyendo" />
        {preview && <ExitPreviewButton />}
      </Layout>
    </>
  )
}

export default ArticlePage
