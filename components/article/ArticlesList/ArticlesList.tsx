import ArticleCard from '../ArticleCard/ArticleCard'
import ArticleCardCompact from '../ArticleCard/ArticleCardCompact'
import ArticleCardLists from '../ArticleCard/ArticleCardLists'
import ArticleCardTop from '../ArticleCard/ArticleCardTop'

type Props = {
  articles: TArticle[]
  title: string
  variant?: 'default' | 'compact' | 'top' | 'lists'
}

const ArticlesList = ({ articles, title, variant = 'default' }: Props) => {
  const renderCards = () => {
    if (variant === 'compact') {
      return articles.map((article) => (
        <ArticleCardCompact article={article} key={article.slug} />
      ))
    }
    if (variant === 'top') {
      return articles.map((article, index) => (
        <ArticleCardTop article={article} index={index} key={article.slug} />
      ))
    }
    if (variant === 'lists') {
      return articles.map((article) => (
        <ArticleCardLists article={article} key={article.slug} />
      ))
    }
    return articles.map((article) => (
      <ArticleCard article={article} key={article.slug} />
    ))
  }

  return (
    <section className="mb-4">
      <div className="py-8 capitalize text-center font-bold">{title}</div>
      {renderCards()}
    </section>
  )
}

export default ArticlesList
