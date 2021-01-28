import SocialUrls from './SocialUrls'
import ThemeSwitch from '../ThemeSwitch'

const Footer = () => {
  return (
    <footer className="flex flex-col w-full mx-auto border-t text-center py-16">
      <ThemeSwitch />

      <p className="py-6">© 2020, DÉJAME TE CUENTO</p>

      <SocialUrls />
    </footer>
  )
}

export default Footer
