import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import Linkedin from '@components/icons/Linkedin'
import Mail from '@components/icons/Mail'
import Twitter from '@components/icons/Twitter'
import Youtube from '@components/icons/Youtube'
import ExternalLink from '@components/ui/Link/ExternalLink'
import { SOCIAL_USERNAMES, CONTACT_EMAIL } from '@lib/constants'

const SocialUrls = () => {
  const { twitter, instagram, facebook, youtube, linkedin } = SOCIAL_USERNAMES

  return (
    <ul className="flex py-4 justify-center">
      {twitter && (
        <ExternalLink to={`https://twitter.com/${twitter}`} ariaLabel="Twitter">
          <li className="px-2">
            <Twitter />
          </li>
        </ExternalLink>
      )}
      {instagram && (
        <ExternalLink
          to={`https://instagram.com/${instagram}`}
          ariaLabel="Instagram"
        >
          <li className="px-2">
            <Instagram />
          </li>
        </ExternalLink>
      )}
      {facebook && (
        <ExternalLink
          to={`https://facebook.com/${facebook}`}
          ariaLabel="Facebook"
        >
          <li className="px-2">
            <Facebook />
          </li>
        </ExternalLink>
      )}
      {CONTACT_EMAIL && (
        <ExternalLink to={`mailto:${CONTACT_EMAIL}`} ariaLabel="Send Email">
          <li className="px-2">
            <Mail />
          </li>
        </ExternalLink>
      )}
      {youtube && (
        <ExternalLink
          to={`https://youtube.com/user/${youtube}`}
          ariaLabel="Youtube"
        >
          <li className="px-2">
            <Youtube />
          </li>
        </ExternalLink>
      )}
      {linkedin && (
        <ExternalLink
          to={`https://linkedin.com/in/${linkedin}`}
          ariaLabel="Linkedin"
        >
          <li className="px-2">
            <Linkedin />
          </li>
        </ExternalLink>
      )}
    </ul>
  )
}

export default SocialUrls
