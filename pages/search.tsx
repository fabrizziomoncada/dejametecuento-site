import { useRouter } from 'next/router'
// import { useSearch } from '@lib/hooks/use-search'
import { ArticlesList } from '@components/article'
import { fetchAPI } from '@lib/api'
import { InferGetStaticPropsType } from 'next'

import SearchInput from '@components/search/SearchInput'
import Link from 'next/link'
import { Button } from '@components/ui/Button'
import Close from '@components/icons/Close'

export async function getStaticProps() {
  const categories: TCategory[] = await fetchAPI('/categories')
  const articles: TArticle[] = await fetchAPI('/articles')
  return { props: { categories, articles } }
}

function SearchPage({
  categories,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { q, category, sort } = router.query

  // This hook should work with the API
  // const { isLoading, data } = useSearch<TArticle>('/articles', query)

  // I'm using a filter implementation due heroku sleep problem
  const filteredArticles = articles.filter((a: TArticle) => {
    const stringQuery = decodeURIComponent(q as string).toLowerCase()
    if (category) {
      return (
        a.title.toLowerCase().includes(stringQuery) &&
        a.category.slug === decodeURIComponent(category as string)
      )
    }
    return a.title.toLowerCase().includes(stringQuery)
  })

  const sortedArticles = filteredArticles.sort((a: TArticle, b: TArticle) => {
    const key = 'published_at'
    if (sort === 'desc') return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
    return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  })

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-20 h-16 bg-white">
        <Link href="/">
          <a className="block w-max serif my-6 mx-auto text-xl">
            Déjame te Cuento
          </a>
        </Link>

        <Button
          onClick={() => router.push('/')}
          className="absolute top-4 right-4"
        >
          <Close />
        </Button>
      </header>
      <main className="min-h-screen px-4 pt-6 pb-20 flex flex-col mx-auto md:w-3/4 lg:w-2/3 xl:w-7/12">
        <SearchInput categories={categories} />

        {/* {isLoading && <p>Loading...</p>} */}
        {sortedArticles && sortedArticles.length !== 0 ? (
          <ArticlesList
            articles={sortedArticles}
            title={`${sortedArticles.length} ${
              sortedArticles.length === 1 ? 'Artículo' : 'Artículos'
            }`}
          />
        ) : (
          <div className="flex flex-col items-center mt-1/5 text-secondary">
            <div className="w-2/3 pb-1/3 mb-2 rounded-sm bg-indigo-400" />
            <div className="w-2/4 pb-4 mb-2 rounded-sm bg-indigo-200" />
            <div className="w-2/5 pb-4 mb-6 rounded-sm bg-indigo-100" />
            <p className="font-bold">No hay resultados</p>
            <span className="text-xs">Reitenta modificando tu búsqueda</span>
          </div>
        )}
      </main>
    </>
  )
}

export default SearchPage
