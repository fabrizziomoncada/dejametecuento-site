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
        <li className="px-2">
          <ExternalLink
            to={`https://twitter.com/${twitter}`}
            ariaLabel="Twitter"
          >
            <Twitter />
          </ExternalLink>
        </li>
      )}
      {instagram && (
        <li className="px-2">
          <ExternalLink
            to={`https://instagram.com/${instagram}`}
            ariaLabel="Instagram"
          >
            <Instagram />
          </ExternalLink>
        </li>
      )}
      {facebook && (
        <li className="px-2">
          <ExternalLink
            to={`https://facebook.com/${facebook}`}
            ariaLabel="Facebook"
          >
            <Facebook />
          </ExternalLink>
        </li>
      )}
      {CONTACT_EMAIL && (
        <li className="px-2">
          <ExternalLink to={`mailto:${CONTACT_EMAIL}`} ariaLabel="Send Email">
            <Mail />
          </ExternalLink>
        </li>
      )}
      {youtube && (
        <li className="px-2">
          <ExternalLink
            to={`https://youtube.com/user/${youtube}`}
            ariaLabel="Youtube"
          >
            <Youtube />
          </ExternalLink>
        </li>
      )}
      {linkedin && (
        <li className="px-2">
          <ExternalLink
            to={`https://linkedin.com/in/${linkedin}`}
            ariaLabel="Linkedin"
          >
            <Linkedin />
          </ExternalLink>
        </li>
      )}
    </ul>
  )
}

export default SocialUrls
