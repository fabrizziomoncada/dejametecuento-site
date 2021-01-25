import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import Image from 'next/image'
import s from './ContributorFeatured.module.css'

const ContributorFeatured = ({
  contributor,
}: {
  contributor: TContributor
}) => {
  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )
  return (
    <Link href={`/contributors/${contributor.slug}`}>
      <li className={s.root}>
        <figure className="relative h-20 w-20">
          <Image
            src={thumbnailUrl}
            className="rounded-full"
            alt={`${contributor?.name} profile`}
            layout="fill"
          />
        </figure>
        <div>
          <h3 className="serif text-lg text-center mt-4">{contributor.name}</h3>
          {/* <p className="text-xs uppercase text-secondary">{contributor.role}</p> */}
        </div>
      </li>
    </Link>
  )
}

export default ContributorFeatured
