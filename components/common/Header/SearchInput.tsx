import Close from '@components/icons/Close'
import Search from '@components/icons/Search'
import { Button } from '@components/ui/Button'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import s from './SearchInput.module.css'

const SearchInput = ({ handleOnClose }: { handleOnClose: () => void }) => {
  const router = useRouter()
  const searchInput = useRef<HTMLInputElement>(null)
  return (
    <div className={s.root}>
      <div className="mb-8">
        <p className="block w-max serif mx-auto text-xl">Déjame te Cuento</p>
        <Button
          onClick={handleOnClose}
          ariaLabel="Close search"
          className={s.closeButton}
        >
          <Close />
        </Button>
      </div>
      <label className="flex items-center border-b border-secondary w-full py-2 px-3  focus-within:border-primary">
        <input
          type="search"
          ref={searchInput}
          inputMode="search"
          name="search"
          id="search"
          placeholder="Buscar articulos"
          className="bg-transparent outline-none w-full p-2 search-btn-none"
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
          className="absolute right-6 bg-indigo-600 text-white"
          onClick={(e) => {
            e.preventDefault()
            const q = searchInput.current?.value
            if (q) {
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
        >
          <Search />
        </Button>
      </label>
    </div>
  )
}

export default SearchInput
