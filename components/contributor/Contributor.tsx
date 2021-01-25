import Link from 'next/link'

const Contributor = ({ contributor }: { contributor: TContributor }) => {
  return (
    <Link href={`/contributors/${contributor.slug}`}>
      <li className="py-6 border-b border-secondary">
        <h4 className="serif text-lg">{contributor.name}</h4>
        <p className="text-xs capitalize text-secondary">{contributor.role}</p>
      </li>
    </Link>
  )
}

export default Contributor
