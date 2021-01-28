import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useHideOnScroll } from '@lib/hooks/use-hide-on-scroll'
import s from './Nav.module.css'
import { useState } from 'react'
import { Button } from '@components/ui/Button'
import ChevronDown from '@components/icons/ChevronDown'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()
  const { isHidden } = useHideOnScroll()

  return (
    <nav
      // Expanded nav
      // className={cn(!isExpanded ? s.root : s.listView, 'scrollbar-none ', {
      //   [s.hide]: isHidden,
      // })}
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

export default Nav
