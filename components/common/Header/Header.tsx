import { useState } from 'react'
import Link from 'next/link'
import Search from '@components/icons/Search'
import Bookmark from '@components/icons/Bookmark'
import { Button } from '@components/ui/Button'
import SearchInput from './SearchInput'
import cn from 'classnames'

const Header = ({ subheader = false }) => {
  const [showSearch, setShowSearch] = useState(false)

  const handleOnClose = () => {
    setShowSearch(false)
  }

  return (
    <header
      className={cn(
        'bg-primary h-14 top-0 left-0 right-0 px-4 flex justify-between items-center z-20',
        subheader ? 'absolute' : 'fixed'
      )}
    >
      <Link href="/lists">
        <a className="p-2" aria-label="My Bookmars">
          <Bookmark />
        </a>
      </Link>

      <Link href="/">
        <a className="serif text-xl">Déjame te Cuento</a>
      </Link>

      <Button onClick={() => setShowSearch(true)} ariaLabel="Search">
        <Search />
      </Button>

      {showSearch && <SearchInput handleOnClose={handleOnClose} />}
    </header>
  )
}

export default Header
