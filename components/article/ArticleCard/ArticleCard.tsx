import { Date } from '@components/ui/Date'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'

const ArticleCard = ({ article }: { article: TArticle }) => {
  return (
    <article className={s.default}>
      <Link href={`/articles/${article.slug}`}>
        <figure>
          <Image
            src={getMediaURL(article.cover.url)}
            alt={article.cover.alternativeText || ''}
            layout="fill"
            className="object-cover"
          />
        </figure>
      </Link>

      <section className="pt-8">
        <Link href={`/${article.category.slug}`}>
          <a className="uppercase text-sm font-bold px-2 py-1 text-accent border border-accent rounded-sm hover:underline">
            {article.category.title}
          </a>
        </Link>
        <Link href={`/articles/${article.slug}`}>
          <h3
            className={cn(
              s.title,
              'serif leading-tight overflow-hidden max-h-28 mt-4 mb-2'
            )}
          >
            {article.title}
          </h3>
        </Link>
        <div className="flex text-sm">
          By
          <Link href={`/contributors/${article.author.slug}`}>
            <p className="pl-1 pr-2 font-bold hover:underline">
              {article.author.name}
            </p>
          </Link>
          {' | '}
          <Date className="px-2" date={article.published_at as string} />
        </div>
      </section>
    </article>
  )
}

export default ArticleCard
