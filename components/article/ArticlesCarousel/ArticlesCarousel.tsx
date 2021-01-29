import ArticleCardCarousel from '../ArticleCard/ArticleCardCarousel'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import s from './ArticlesCarousel.module.css'

type Props = {
  articles: TArticle[]
}

const ArticlesCarousel = ({ articles }: Props) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // const scrollToLeft = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   carouselRef.current?.scrollBy({ left: -1, top: 0, behavior: 'smooth' })
  // }

  // const scrollToRight = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   carouselRef.current?.scrollBy({ left: 1, top: 0, behavior: 'smooth' })
  // }

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

    element.addEventListener('touchmove', scrollListener)
    return () => element.removeEventListener('touchmove', scrollListener)
  }, [])

  const renderScrollIndicator = () => {
    const selected = (scrollProgress * articles.length) / 100
    return articles.map((article, index) => (
      <div
        className={cn('w-full mx-1 bg-primary-40 pb-1 rounded-sm', {
          [s.active]: selected >= index && selected <= index + 1,
        })}
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
        {/* <ul className="flex">
          <li>
            <Button onClick={scrollToLeft} ariaLabel="Previus article">
              <ArrowLeft />
            </Button>
          </li>
          <li>
            <Button onClick={scrollToRight} ariaLabel="Next article">
              <ArrowRight />
            </Button>
          </li>
        </ul> */}
      </div>
    </section>
  )
}

export default ArticlesCarousel
