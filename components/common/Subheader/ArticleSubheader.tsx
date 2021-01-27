import ArrowLeft from '@components/icons/ArrowLeft'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import s from './Subheader.module.css'
import cn from 'classnames'
import { Button } from '@components/ui/Button'
import Close from '@components/icons/Close'

type Props = {
  title: string
}

const ArticleSubheader = ({ title }: Props) => {
  const [isShowed, setIsShowed] = useState(false)

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

  return (
    <div className={s.root}>
      <Link href="/">
        <a className="justify-self-start" aria-label="Go back">
          <ArrowLeft />
        </a>
      </Link>

      <p className={cn('serif', s.articleTitle, { [s.show]: isShowed })}>
        {title}
      </p>

      {isShowed && (
        <Button className="ml-auto">
          <Close />
        </Button>
      )}
    </div>
  )
}

export default ArticleSubheader
