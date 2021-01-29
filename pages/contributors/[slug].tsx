import { ArticlesList } from '@components/article'
import { fetchAPI, getMediaURL } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ExternalLink from '@components/ui/Link/ExternalLink'
import Image from 'next/image'
import { Layout } from '@components/common/Layout'
import { Subheader } from '@components/common/Subheader'
import Twitter from '@components/icons/Twitter'

export async function getStaticPaths() {
  // If you don't have too many contributors you can uncomment
  // this code and pre-build each page instead.

  // const slugs: TContributor[] = await fetchAPI('/contributors')
  // return {
  //   paths: slugs.map((contributor) => `/contributors/${contributor.slug}`),
  //   fallback: false,
  // }

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const contributor: TContributor = (
    await fetchAPI(`/contributors?slug=${params?.slug}`)
  )[0]

  const articles: TArticle[] = await fetchAPI(
    `/articles?author.slug=${params?.slug}`
  )

  // No props will trigger a 404
  if (!contributor) return { props: {} }
  return { props: { contributor, articles } }
}

function ContributorPage({
  contributor,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !contributor) {
    return <ErrorPage statusCode={404} />
  }

  // if featuared is diferent than undefined it will be true
  const isFeatured = !!contributor?.featured

  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )

  return (
    <Layout subheader={<Subheader title="Contribuidores" to="/contributors" />}>
      <section className="text-center py-10 border-b border-dashed">
        {isFeatured && (
          <figure className="relative w-28 h-28 mx-auto mb-4">
            <Image
              src={thumbnailUrl}
              className="rounded-full"
              alt={`${contributor?.name} profile`}
              layout="fill"
            />
          </figure>
        )}
        <h3 className="serif text-3xl">{contributor?.name}</h3>
        <p className="capitalize text-primary-60">{contributor?.role}</p>

        {contributor?.urls?.twitter && (
          <ExternalLink
            to={`https://twitter.com/${contributor?.urls.twitter}`}
            ariaLabel="Contributor's twitter"
            className="text-accent flex justify-center items-center mt-4 mb-2"
          >
            <Twitter className="mr-2" height="18" width="18" />
            {contributor?.urls.twitter}
          </ExternalLink>
        )}

        {/* <p className="text-primary-60 capitalize">
          {articles?.length}{' '}
          {articles?.length === 1 ? 'Contribución' : 'Contribuciones'}
        </p> */}
      </section>
      {isFeatured && (
        <p className="text-left border-b py-12 leading-tight">
          {contributor?.featured?.description}
        </p>
      )}
      <ArticlesList articles={articles || []} title="Contribuciones" />
    </Layout>
  )
}

export default ContributorPage
