import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useHideOnScroll } from '@lib/hooks/use-hide-on-scroll'
import s from './Nav.module.css'
import { useState } from 'react'
import { Button } from '@components/ui/Button'
import ChevronDown from '@components/icons/ChevronDown'
import { useIsMobile } from '@lib/hooks/use-media-queries'
import ChevronUp from '@components/icons/ChevronUp'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()
  const { isHidden } = useHideOnScroll()
  const isMobile = useIsMobile()

  if (isMobile && isExpanded) {
    return (
      <nav className={s.listView}>
        <Link href={`/`}>
          <a className={cn(s.link, { [s.active]: router.pathname === '/' })}>
            HOME
          </a>
        </Link>
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.slug}>
            <a
              className={cn(s.link, {
                [s.active]: router.query.slug === category.slug,
              })}
            >
              {category.title}
            </a>
          </Link>
        ))}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={isExpanded ? s.expandedButton : s.button}
        >
          <ChevronUp />
        </Button>
      </nav>
    )
  }

  if (isMobile) {
    return (
      <nav
        className={cn(s.root, 'scrollbar-none ', {
          [s.hide]: isHidden,
        })}
      >
        <Link href={`/`}>
          <a className={cn(s.link, { [s.active]: router.pathname === '/' })}>
            HOME
          </a>
        </Link>
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.slug}>
            <a
              className={cn(s.link, {
                [s.active]: router.query.slug === category.slug,
              })}
            >
              {category.title}
            </a>
          </Link>
        ))}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={isExpanded ? s.expandedButton : s.button}
        >
          <ChevronDown />
        </Button>
      </nav>
    )
  }

  return (
    <nav
      className={cn(s.root, 'scrollbar-none ', {
        [s.hide]: isHidden,
      })}
    >
      <Link href={`/`}>
        <a className={cn(s.link, { [s.active]: router.pathname === '/' })}>
          HOME
        </a>
      </Link>
      {categories.map((category) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a
            className={cn(s.link, {
              [s.active]: router.query.slug === category.slug,
            })}
          >
            {category.title}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
