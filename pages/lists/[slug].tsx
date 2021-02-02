import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from '../404'
import { get } from 'idb-keyval'
import { Article } from '@components/article'
import { Layout } from '@components/common/Layout'
import ArticleSubheader from '@components/common/Subheader/ArticleSubheader'

function ArticlePage() {
  const [article, setArticle] = useState<TArticle | 'loading' | null>('loading')

  const {
    query: { slug },
  } = useRouter()

  useEffect(() => {
    const getArticle = async () => {
      const indexedArticle: string = await get(slug?.toString() || '')
      if (!indexedArticle) return setArticle(null)
      return setArticle(JSON.parse(indexedArticle))
    }
    getArticle()
  }, [slug])

  if (!article) {
    return <ErrorPage />
  }

  if (article === 'loading') {
    return <p>Loading</p>
  }

  return (
    <Layout subheader={<ArticleSubheader article={article} />}>
      <Article article={article as TArticle} />
    </Layout>
  )
}

export default ArticlePage
