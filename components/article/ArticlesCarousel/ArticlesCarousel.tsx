import ArticleCardCarousel from '../ArticleCard/ArticleCardCarousel'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

type Props = {
  articles: TArticle[]
}

const ArticlesCarousel = ({ articles }: Props) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!carouselRef.current) return
    const element = carouselRef.current

    const scrollListener = () => {
      const windowScroll = element.scrollLeft
      const totalWidth = element.scrollWidth - element.clientWidth

      if (windowScroll === 0) {
        return setScrollProgress(0)
      }
      if (windowScroll > totalWidth) {
        return setScrollProgress(100)
      }
      return setScrollProgress((windowScroll / totalWidth) * 100)
    }

    element.addEventListener('scroll', scrollListener)
    return () => element.removeEventListener('scroll', scrollListener)
  }, [])

  const renderScrollIndicator = () => {
    const selectedRange = Math.floor((scrollProgress * articles.length) / 110)

    return articles.map((article, index) => (
      <div
        className={cn(
          'w-full mx-1 bg-primary-40 pb-1 rounded-sm',
          selectedRange === index ? 'bg-primary' : ''
        )}
        key={article.slug}
      ></div>
    ))
  }

  return (
    <section className="mt-6 mb-16">
      <div
        ref={carouselRef}
        className="flex overflow-hidden overflow-x-scroll scroll-snap-x-mandatory scrollbar-none"
      >
        {articles.map((article) => (
          <ArticleCardCarousel article={article} key={article.slug} />
        ))}
      </div>

      <div className="flex justify-between h-auto mt-12 ">
        {renderScrollIndicator()}
      </div>
    </section>
  )
}

export default ArticlesCarousel
