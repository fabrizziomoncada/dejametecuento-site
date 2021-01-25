import Link from 'next/link'
import { Markdown } from '@components/common/Markdown'
import AuthorCard from './AuthorCard'
import { Date } from '@components/ui/Date'
import ActionButtons from './ActionButtons'
import Image from 'next/image'
import { getMediaURL } from '@lib/api'

function Article({ article }: { article: TArticle | undefined }) {
  if (!article) return <p>Something went wrong</p>

  return (
    <article>
      <header className="py-10">
        <Link href={`/${article.category.slug}`}>
          <a className="uppercase text-sm font-bold px-2 py-1 text-accent border rounded-sm">
            {article.category.title}
          </a>
        </Link>

        <h1 className="serif my-8">{article.title}</h1>

        <p className="text-sm">
          Por{' '}
          <Link href={`/contributors/${article.author.slug}`}>
            <a className="font-bold">{article.author.name}</a>
          </Link>
        </p>

        <Date className="text-sm" date={article.published_at as string} />
        <div className="my-8">
          <Image
            src={getMediaURL(article.cover.url)}
            alt={article.cover.alternativeText || ''}
            width={article.cover.width}
            height={article.cover.height}
          />
        </div>

        <ActionButtons article={article} className="justify-center" />
      </header>

      <Markdown content={article.content} />

      <footer className="border-t border-primary py-6">
        <AuthorCard author={article.author} />
        <ActionButtons article={article} className="mt-6 justify-center" />
      </footer>
    </article>
  )
}

export default Article
