import ExternalLink from '@components/ui/Link/ExternalLink'
import { CONTACT_EMAIL } from '@lib//constants'

const ContributionBanner = () => {
  return (
    <div className="w-full text-center py-16">
      <h5 className="serif text-4xl mb-4">¿Quieres contribuir?</h5>
      <p className="text-gray-500 py-1">Siéntete libre de contactarnos a:</p>
      <ExternalLink
        to={`mailto:${CONTACT_EMAIL}`}
        ariaLabel="Enviar email"
        className="underline"
      >
        {CONTACT_EMAIL}
      </ExternalLink>
    </div>
  )
}

export default ContributionBanner
