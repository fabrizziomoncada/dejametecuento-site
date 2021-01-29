import { ArticleCard } from '@components/article'
import { useState, useEffect } from 'react'
import { getAllStoredContent } from '@lib/storage'
import { Button } from '@components/ui/Button'
import { useRouter } from 'next/router'
import { Layout } from '@components/common/Layout'
import { Subheader } from '@components/common/Subheader'

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
    <Layout subheader={<Subheader title="Listas de lecturas" />}>
      {list && list.length !== 0 ? (
        <section>
          <div className="py-2 flex justify-between items-center">
            <h6 className="uppercase">{list.length} Articles</h6>
          </div>
          {list.map((article) => (
            <ArticleCard
              article={article}
              key={article.slug}
              route="lists"
              actions
            />
          ))}
        </section>
      ) : (
        <div className="flex flex-col items-center mt-1/3 text-primary-60">
          <div className="w-2/3 pb-1/3 mb-2 rounded-sm bg-blue" />
          <div className="w-2/4 pb-4 mb-2 rounded-sm bg-blue" />
          <div className="w-2/5 pb-4 mb-6 rounded-sm bg-blue" />
          <p className="font-bold">Aún no hay artículos guardados</p>
          <span className="text-xs mt-2 w-5/6 text-center">
            Explora la revista y guarda lo que quieras leer más tarde. Los
            artículos guardados también están disponibles sin conexión
          </span>

          <Button
            className="bg-blue mt-6 px-4 text-white"
            onClick={() => router.push('/')}
          >
            Regresar
          </Button>
        </div>
      )}
    </Layout>
  )
}

export default ListsPage
