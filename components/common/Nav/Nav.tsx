import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useHideOnScroll } from '@lib/hooks/use-hide-on-scroll'
import s from './Nav.module.css'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  const router = useRouter()
  const { isHidden } = useHideOnScroll()
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
