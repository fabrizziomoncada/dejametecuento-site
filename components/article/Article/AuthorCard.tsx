import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import AuthorSocialMedia from './AuthorSocialMedia'
import Image from 'next/image'

function AuthorCard({ author }: { author: TContributor }) {
  const thumbnailUrl = getMediaURL(
    author.featured?.profile_image.formats.thumbnail?.url
  )

  return (
    <div className="flex py-6 items-center cursor-pointer">
      {author.featured && (
        <Link href={`/contributors/${author.slug}`}>
          <figure className="relative w-14 h-14 mr-5">
            <Image
              src={thumbnailUrl}
              className="rounded-full"
              alt={`${author?.name} profile`}
              layout="fill"
            />
          </figure>
        </Link>
      )}

      <div>
        <Link href={`/contributors/${author.slug}`}>
          <a className="text-xl hover:underline">{author.name}</a>
        </Link>

        <AuthorSocialMedia urls={author.urls} />
      </div>
    </div>
  )
}

export default AuthorCard
