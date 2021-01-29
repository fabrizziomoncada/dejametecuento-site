import { ArticleCard } from '@components/article'
import { useState, useEffect } from 'react'
import { getAllStoredContent } from '@lib/storage'
import { Button } from '@components/ui/Button'
import { useRouter } from 'next/router'
import { Layout } from '@components/common/Layout'
import { Subheader } from '@components/common/Subheader'
import EmptyList from '@components/common/EmptyList'

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
        <>
          <EmptyList
            title="Aún no hay artículos guardados"
            description="  Explora la revista y guarda lo que quieras leer más tarde. Los
            artículos guardados también están disponibles sin conexión."
          />
          <Button
            className="bg-blue mt-6 mx-auto px-4 text-secondary"
            onClick={() => router.push('/')}
          >
            Regresar
          </Button>
        </>
      )}
    </Layout>
  )
}

export default ListsPage
