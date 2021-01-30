import { Date } from '@components/ui/Date'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'
import ShareButton from '@components/common/ShareButton'
import AddToListButton from '../Article/AddToListButton'

type Props = {
  article: TArticle
}

const ArticleCardLists = ({ article }: Props) => {
  return (
    <article className={s.compact}>
      <section className={s.main}>
        <Link href={`/lists/${article.slug}`}>
          <h3
            className={cn(
              s.title,
              'serif flex-1 pr-6 leading-tight overflow-hidden max-h-28'
            )}
          >
            {article.title}
          </h3>
        </Link>
        <Link href={`/lists/${article.slug}`}>
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

      <section className="flex justify-between items-center mt-4">
        <div className="flex flex-wrap text-sm">
          <p>
            By
            <Link href={`/contributors/${article.author.slug}`}>
              <span className="pl-1 font-bold">{article.author.name}</span>
            </Link>
          </p>
          <span className="mx-3">|</span>
          <Link href={`/${article.category.slug}`}>
            <span className="text-accent">{article.category.title}</span>
          </Link>
          <span className="mx-3">|</span>
          <Date date={article.published_at as string} />
        </div>

        <ul className="flex justify-end ml-10">
          <li>
            <ShareButton
              path={`/articles/${article.slug}`}
              title={article.title}
              message="Check this article"
            />
          </li>
          <li>
            <AddToListButton article={article} icon="trash" />
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ArticleCardLists
