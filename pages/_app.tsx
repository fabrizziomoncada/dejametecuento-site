import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@styles/main.css'
// import '@styles/tailwind.css'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import '@styles/base.css'
import '@styles/components.css'
import '@styles/utilities.css'
import Head from '@components/common/head'
import ToastProvider from '@components/ui/Toast/ToastProvider'
import ListProvider from '@components/common/ListProvider'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '@lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Only run GA on Production
    if (process.env.NODE_ENV !== 'production') return

    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider>
      <ToastProvider>
        <ListProvider>
          <Head />
          <Component {...pageProps} />
        </ListProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default MyApp
