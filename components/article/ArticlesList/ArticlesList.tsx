// import ArticleCard from '../ArticleCard/ArticleCard'
// import ArticleCardCompact from '../ArticleCard/ArticleCardCompact'
import ArticleCardTop from '../ArticleCard/ArticleCardTop'

type Props = {
  articles: TArticle[]
  title: string
  variant?: 'default' | 'compact'
}

const ArticlesList = ({ articles, title }: Props) => {
  return (
    <section className="mb-4">
      <div className="py-8 capitalize text-center font-bold">{title}</div>

      {articles.map((article, index) => (
        // <ArticleCard article={article} variant={variant} key={article.slug} />
        <ArticleCardTop article={article} index={index} key={article.slug} />
        // <ArticleCardCompact article={article} key={article.slug} />
      ))}
    </section>
  )
}

export default ArticlesList
