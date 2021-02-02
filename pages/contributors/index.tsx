import Contributor from '@components/contributor/Contributor'
import ContributorFeatured from '@components/contributor/ContributorFeatured'
import { Layout } from '@components/common/Layout'
import { fetchAPI } from '@lib/api'
import { partition } from '@lib/partition'
import { InferGetStaticPropsType } from 'next'
import { Subheader } from '@components/common/Subheader'

export async function getStaticProps() {
  const contributors: TContributor[] = await fetchAPI('/contributors')
  return { props: { contributors } }
}

export function ContributorsPage({
  contributors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Create 2 differents arrays based on whether or not they're featured
  const [featured, others] = partition<TContributor>(
    contributors,
    (i) => !!i.featured
  )

  return (
    <Layout subheader={<Subheader title="Contribuidores" />}>
      <ul className="mb-4 flex flex-wrap lg:w-9/12 lg:mx-auto">
        {featured.map((contributor) => (
          <ContributorFeatured
            contributor={contributor}
            key={contributor.slug}
          />
        ))}
      </ul>
      <h6 className="pt-6 pb-2 capitalize text-center lg:w-9/12 lg:mx-auto lg:mt-14">
        Más miembros del equipo
      </h6>
      <ul className="lg:w-9/12 lg:mx-auto">
        {others.map((contributor) => (
          <Contributor contributor={contributor} key={contributor.slug} />
        ))}
      </ul>
    </Layout>
  )
}

export default ContributorsPage
