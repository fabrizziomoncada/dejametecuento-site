import ArrowLeft from '@components/icons/ArrowLeft'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import s from './Subheader.module.css'
import cn from 'classnames'
import { Button } from '@components/ui/Button'
import Close from '@components/icons/Close'
import { OptionsMenu } from '@components/ui/OptionsMenu'

type Props = {
  title: string
}

const ArticleSubheader = ({ title }: Props) => {
  const [isShowed, setIsShowed] = useState(false)
  const [isOptionsShowed, setIsOptionsShowed] = useState(false)

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

  const ArticleActions = () => (
    <OptionsMenu handleOnClose={() => setIsOptionsShowed(false)}>
      <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>
    </OptionsMenu>
  )

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
        <Button className="ml-auto" onClick={() => setIsOptionsShowed(true)}>
          <Close />
        </Button>
      )}

      {isOptionsShowed && <ArticleActions />}
    </div>
  )
}

export default ArticleSubheader
