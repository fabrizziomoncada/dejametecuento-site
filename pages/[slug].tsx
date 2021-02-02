import { ArticlesCarousel, ArticlesList } from '@components/article'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { fetchAPI, getMediaURL, getNavigation } from '@lib/api'
import { NextSeo } from 'next-seo'
import { Layout } from '@components/common/Layout'
import ArticlesHero from '@components/article/ArticlesHero/ArticlesHero'
import { useMediaQuery } from '@lib/hooks/use-media-queries'

export async function getStaticPaths() {
  const categories: TCategory[] = await fetchAPI('/categories')
  return {
    paths: categories.map((category) => `/${category.slug}`),
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const category: TCategory = (
    await fetchAPI(`/categories?slug=${params?.slug}`)
  )[0]

  const articles: TArticle[] = await fetchAPI(
    `/articles?category.slug=${params?.slug}`
  )
  const navigation: TNavigation = await getNavigation()

  return {
    props: {
      category,
      navigation,
      articles,
    },
  }
}

function CategoryPage({
  category,
  articles,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isTablet = useMediaQuery(1023)
  return (
    <>
      <NextSeo
        title={category.title}
        description={category.description}
        openGraph={{
          title: category.title,
          description: category.description,
          // Only include OG image if exists
          // This will break disabling Strapi Image Optimization
          ...(category.cover && {
            images: Object.values(category.cover.formats).map((image) => {
              return {
                url: getMediaURL(image?.url),
                width: image?.width,
                height: image?.height,
              }
            }),
          }),
        }}
      />

      <Layout navigation={navigation}>
        {isTablet ? (
          <ArticlesCarousel articles={articles} />
        ) : (
          <ArticlesHero articles={articles} />
        )}

        <ArticlesList articles={articles} title="Entradas Recientes" />
        <div className="lg:flex lg:gap-28">
          <ArticlesList
            articles={articles}
            title="Articulos Principales"
            variant="top"
          />
          <ArticlesList
            articles={articles}
            title="Artículos Más leidos"
            variant="top"
          />
        </div>
        <ArticlesList
          articles={articles}
          title="Continúa Leyendo"
          variant="compact"
        />
      </Layout>
    </>
  )
}

export default CategoryPage
