import ArrowLeft from '@components/icons/ArrowLeft'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import s from './Subheader.module.css'
import cn from 'classnames'
// import { Button } from '@components/ui/Button'
// import Close from '@components/icons/Close'
// import { OptionsMenu } from '@components/ui/OptionsMenu'
// import Share from '@components/icons/Share'
// import AddToListButton from '@components/article/Article/AddToListButton'
// import ShareButton from '../ShareButton'

type Props = {
  article: TArticle
}

const ArticleSubheader = ({ article }: Props) => {
  const [isShowed, setIsShowed] = useState(false)
  // const [isOptionsShowed, setIsOptionsShowed] = useState(false)

  const showText = () => {
    if (window.scrollY > 250) {
      setIsShowed(true)
    } else {
      setIsShowed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showText)
    return () => {
      window.removeEventListener('scroll', showText)
    }
  }, [])

  // const ArticleActions = () => (
  //   <OptionsMenu handleOnClose={() => setIsOptionsShowed(false)}>
  //     <p>Acciones</p>
  //     <ul>
  //       <li className="flex justify-between">
  //         Share{' '}
  //         <ShareButton
  //           path={`/articles/${article.slug}`}
  //           title={article.title}
  //           message={'Check this article'}
  //         />
  //       </li>
  //       <li className="flex justify-between">
  //         Guardar <AddToListButton article={article} />
  //       </li>
  //       <li className="flex justify-between">
  //         Tema Claro <Share />
  //       </li>
  //       <Link href={`/contributors/edgar-lopez`}>
  //         <li className="flex justify-between">
  //           Ver más del autor <Share />
  //         </li>
  //       </Link>
  //     </ul>
  //   </OptionsMenu>
  // )

  return (
    <div className={s.root}>
      <Link href="/">
        <a className="justify-self-start hover:opacity-50" aria-label="Go back">
          <ArrowLeft />
        </a>
      </Link>

      <p className={cn('serif', s.articleTitle, { [s.show]: isShowed })}>
        {article.title}
      </p>

      {/* {isShowed && (
        <Button className="ml-auto" onClick={() => setIsOptionsShowed(true)}>
          <Close />
        </Button>
      )} */}

      {/* {isOptionsShowed && <ArticleActions />} */}
    </div>
  )
}

export default ArticleSubheader
