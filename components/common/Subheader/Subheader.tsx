import ArrowLeft from '@components/icons/ArrowLeft'
import Link from 'next/link'
import s from './Subheader.module.css'
import cn from 'classnames'

const Subheader = ({ title, to }: { title: string; to?: string }) => {
  return (
    <div className={cn(s.root, 'justify-center')}>
      <Link href={to ? to : '/'}>
        <a className="absolute left-0" aria-label="Go back">
          <ArrowLeft />
        </a>
      </Link>

      <p className={s.title}>{title}</p>
    </div>
  )
}

export default Subheader
