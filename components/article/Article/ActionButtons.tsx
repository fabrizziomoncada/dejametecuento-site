import AddToListButton from './AddToListButton'
import ShareButton from '@components/common/ShareButton'
import cn from 'classnames'

type Props = {
  article: TArticle
  className?: string
}

const ActionButtons = ({ article, className = '' }: Props) => {
  return (
    <ul className={cn('flex justify-end', className)}>
      <li>
        <AddToListButton article={article} />
      </li>
      <li>
        <ShareButton
          path={`/articles/${article.slug}`}
          title={article.title}
          message={'Check this article'}
        />
      </li>
    </ul>
  )
}

export default ActionButtons
