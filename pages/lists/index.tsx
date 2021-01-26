import { ArticleCard } from '@components/article'
import { useState, useEffect } from 'react'
import { getAllStoredContent } from '@lib/storage'
import Link from 'next/link'
import { Button } from '@components/ui/Button'
import Close from '@components/icons/Close'
import { useRouter } from 'next/router'

const ListsPage = () => {
  const [list, setList] = useState<TArticle[]>([])

  const router = useRouter()

  useEffect(() => {
    const getStoredArticles = async () => {
      const storedArticles = await getAllStoredContent()
      setList(storedArticles)
    }
    getStoredArticles()
  }, [])

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-20 h-16 bg-white">
        <Link href="/">
          <a className="block w-max serif my-6 mx-auto text-xl">
            Listas de Lectura
          </a>
        </Link>

        <Button
          onClick={() => router.push('/')}
          className="absolute top-4 right-4"
        >
          <Close />
        </Button>
      </header>

      <main className="min-h-screen px-4 pt-20 pb-20 flex flex-col mx-auto md:w-3/4 lg:w-2/3 xl:w-7/12">
        {list && list.length !== 0 ? (
          <section>
            <div className="py-2 flex justify-between items-center">
              <h6 className="uppercase">{list.length} Articles</h6>
            </div>
            {list.map((article) => (
              <ArticleCard article={article} key={article.slug} route="lists" />
            ))}
          </section>
        ) : (
          <div className="flex flex-col items-center mt-1/3 text-secondary">
            <div className="w-2/3 pb-1/3 mb-2 rounded-sm bg-indigo-400" />
            <div className="w-2/4 pb-4 mb-2 rounded-sm bg-indigo-200" />
            <div className="w-2/5 pb-4 mb-6 rounded-sm bg-indigo-100" />
            <p className="font-bold">Aún no hay artículos guardados</p>
            <span className="text-xs mt-2 w-5/6 text-center">
              Explora la revista y guarda lo que quieras leer más tarde. Los
              artículos guardados también están disponibles sin conexión
            </span>

            <Button
              className="bg-indigo-500 mt-6 px-4 text-white"
              onClick={() => router.push('/')}
            >
              Regresar
            </Button>
          </div>
        )}
      </main>
    </>
  )
}

export default ListsPage
