import { Date } from '@components/ui/Date'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'

type Props = {
  article: TArticle
}

const ArticleCardCompact = ({ article }: Props) => {
  return (
    <article className={s.compact}>
      <section className={s.main}>
        <Link href={`articles/${article.slug}`}>
          <h3
            className={cn(
              s.title,
              'serif flex-1 pr-6 leading-tight overflow-hidden max-h-28 hover:underline'
            )}
          >
            {article.title}
          </h3>
        </Link>
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
      </section>

      <div className="flex flex-wrap pt-4 text-sm">
        <p>
          By
          <Link href={`/contributors/${article.author.slug}`}>
            <span className="pl-1 font-bold hover:underline">
              {article.author.name}
            </span>
          </Link>
        </p>
        <span className="mx-3">|</span>
        <Link href={`/${article.category.slug}`}>
          <span className="text-accent hover:underline">
            {article.category.title}
          </span>
        </Link>
        <span className="mx-3">|</span>
        <Date date={article.published_at as string} />
      </div>
    </article>
  )
}

export default ArticleCardCompact
