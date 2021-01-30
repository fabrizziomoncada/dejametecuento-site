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
  const [isExpanded, setIsExpanded] = useState(true)
  const router = useRouter()
  const { isHidden } = useHideOnScroll()
  const isMobile = useIsMobile()

  const rootClassName =
    isMobile && isExpanded
      ? s.listView
      : cn(s.root, 'scrollbar-none ', {
          [s.hide]: isHidden,
        })

  return (
    <nav className={rootClassName}>
      {isExpanded && <p>Todas las categorias</p>}

      <Link href={`/`}>
        <a className={cn(s.link, { [s.active]: router.pathname === '/' })}>
          Inicio
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

      {isMobile && (
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={isExpanded ? s.expandedButton : s.button}
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      )}
    </nav>
  )
}

export default Nav
