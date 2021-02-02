import AboutUsBanner from '../AboutUsBanner'
import ContributionBanner from '../ContributionBanner'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Nav } from '../Nav'
import OfflineBanner from '../OfflineBanner'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  navigation?: TNavigation
  subheader?: React.ReactNode
}

const Layout = ({ children, navigation, subheader }: Props) => {
  return (
    <>
      <Header subheader={subheader ? true : false} />
      {navigation && <Nav categories={navigation.categories} />}

      <main
        className={cn(
          'min-h-screen px-6 pb-20 flex flex-col mx-auto md:w-3/4 lg:w-2/3 lg:px-0 xl:w-8/12',
          navigation ? 'pt-28' : 'pt-14'
        )}
      >
        {subheader}
        {children}
      </main>

      <OfflineBanner />

      <AboutUsBanner />

      <ContributionBanner />

      <Footer />
    </>
  )
}

export default Layout
