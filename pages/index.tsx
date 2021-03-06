import { InferGetStaticPropsType } from 'next'
import { ArticlesCarousel, ArticlesList } from '@components/article'
import { fetchAPI, getNavigation } from '@lib/api'
import { Layout } from '@components/common/Layout'
import { useMediaQuery } from '@lib/hooks/use-media-queries'
import ArticlesHero from '@components/article/ArticlesHero/ArticlesHero'

export async function getStaticProps() {
  const articles: TArticle[] = await fetchAPI('/articles')
  const navigation: TNavigation = await getNavigation()

  return { props: { articles, navigation } }
}

function Home({
  articles,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isTablet = useMediaQuery(1023)

  return (
    <Layout navigation={navigation}>
      {isTablet ? (
        // tablet and smaller devices
        <ArticlesCarousel articles={articles} />
      ) : (
        <ArticlesHero articles={articles} />
      )}

      <ArticlesList articles={articles} title="Entradas Recientes" />

      <div className="lg:py-24 lg:flex lg:gap-28 lg:mx-auto">
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
  )
}

export default Home
