import { ArticleCard } from '..'

type Props = {
  articles: TArticle[]
  title: string
  variant?: 'default' | 'compact'
}

const ArticlesList = ({ articles, title, variant = 'default' }: Props) => {
  return (
    <section className="mb-4">
      <div className="py-8 capitalize text-center font-bold">{title}</div>

      {articles.map((article) => (
        <ArticleCard article={article} variant={variant} key={article.slug} />
      ))}
    </section>
  )
}

export default ArticlesList
