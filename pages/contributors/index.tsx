import Contributor from '@components/contributor/Contributor'
import ContributorFeatured from '@components/contributor/ContributorFeatured'
import { Layout } from '@components/common/Layout'
import Hero from '@components/common/Hero/Hero'
import { fetchAPI } from '@lib/api'
import { partition } from '@lib/partition'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const contributors: TContributor[] = await fetchAPI('/contributors')
  return { props: { contributors } }
}

export function ContributorsPage({
  contributors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Create 2 differents arrays based on the condition
  const [featured, others] = partition<TContributor>(
    contributors,
    (i) => !!i.featured
  )

  return (
    <Layout>
      <Hero title="contribuidores" />
      <ul className="mb-4 flex flex-wrap">
        {[...featured, ...featured].slice(0, 5).map((contributor) => (
          <ContributorFeatured
            contributor={contributor}
            key={contributor.slug}
          />
        ))}
      </ul>
      <h6 className="pt-6 pb-2 capitalize text-center">
        Más miembros del equipo
      </h6>
      <ul>
        {others.map((contributor) => (
          <Contributor contributor={contributor} key={contributor.slug} />
        ))}
      </ul>
    </Layout>
  )
}

export default ContributorsPage
