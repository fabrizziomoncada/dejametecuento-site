import ArticleCardCarousel from '../ArticleCard/ArticleCardCarousel'
import { useRef } from 'react'

type Props = {
  articles: TArticle[]
}

const ArticlesCarousel = ({ articles }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  // const scrollToLeft = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   carouselRef.current?.scrollBy({ left: -1, top: 0, behavior: 'smooth' })
  // }

  // const scrollToRight = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   carouselRef.current?.scrollBy({ left: 1, top: 0, behavior: 'smooth' })
  // }

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
        {articles.map((article) => (
          <div
            className="w-full mx-1 bg-primary pb-1 rounded-sm"
            key={article.slug}
          ></div>
        ))}
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
