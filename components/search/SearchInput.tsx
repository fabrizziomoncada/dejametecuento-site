import { useRouter } from 'next/router'
import cn from 'classnames'
import { useState } from 'react'
import s from './SearchInput.module.css'
import Filters from '@components/icons/Filters'
import Link from 'next/link'
import { filterQueries } from '@lib/search'
import { Button } from '@components/ui/Button'
import { useIsMobile } from '@lib/hooks/use-media-queries'
import MobileModal from '@components/ui/MobileModal/MobilModal'

const SearchInput = ({ categories }: { categories: TCategory[] }) => {
  const [showFilters, setShowFilters] = useState(false)

  const isMobile = useIsMobile()

  const router = useRouter()
  const { q, category, sort } = router.query

  const SearchFilters = () => {
    return (
      <>
        <p className={s.filterHeading}>Ordernar Por</p>
        <ul>
          <Link
            href={{
              pathname: '/search',
              query: filterQueries({ q, category, sort: 'asc' }),
            }}
          >
            <li
              className={cn(s.filter, {
                [s.filterActive]: !sort || sort === 'asc',
              })}
            >
              Más reciente
            </li>
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: filterQueries({ q, category, sort: 'desc' }),
            }}
          >
            <li
              className={cn(s.filter, {
                [s.filterActive]: sort === 'desc',
              })}
            >
              Más Antiguo
            </li>
          </Link>
        </ul>
        <p className={s.filterHeading}>Filtrar por</p>
        <ul>
          <Link
            href={{
              pathname: '/search',
              query: { q, sort },
            }}
          >
            <li
              className={cn(s.filter, {
                [s.filterActive]: !category,
              })}
            >
              Todas las entradas
            </li>
          </Link>
          {categories.map((c) => (
            <Link
              href={{
                pathname: '/search',
                query: filterQueries({ q, category: c.slug, sort }),
              }}
              key={c.slug}
            >
              <li
                className={cn(s.filter, {
                  [s.filterActive]: category === c.slug,
                })}
              >
                {c.title}
              </li>
            </Link>
          ))}
        </ul>
      </>
    )
  }

  const SearchMenu = () => {
    if (isMobile) {
      return (
        <MobileModal onClick={() => setShowFilters(!showFilters)}>
          <SearchFilters />
        </MobileModal>
      )
    }
    return (
      <div className="absolute z-20 bg-primary left-0 right-0 px-2 pt-2 pb-6 border-b border-secondary">
        <SearchFilters />
      </div>
    )
  }

  return (
    <div className="sticky bg-primary top-14 mt-12 py-4 z-20">
      <label
        htmlFor="search"
        className="flex border-b border-secondary w-full py-2 px-1 focus-within:border-primary"
      >
        <input
          type="search"
          inputMode="search"
          name="search"
          id="search"
          defaultValue={router.query.q}
          placeholder="Buscar..."
          className="bg-transparent outline-none w-full px-2 search-btn-none"
          onKeyUp={(e) => {
            e.preventDefault()
            if (e.key === 'Enter') {
              const q = e.currentTarget.value
              router.push(
                {
                  pathname: '/search',
                  query: q ? { q } : {},
                },
                undefined,
                { shallow: true }
              )
            }
          }}
        />

        <Button
          className={s.searchButton}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filters />
        </Button>
      </label>
      {showFilters && <SearchMenu />}
    </div>
  )
}

export default SearchInput
