import { useIsMobile } from '@lib/hooks/use-media-queries'
import MobileModal from '../MobileModal/MobilModal'
import s from './OptionsMenu.module.css'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  handleOnClose: () => void
}

const OptionsMenu = ({ children, handleOnClose }: Props) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <MobileModal className={s.root} onClick={handleOnClose}>
        {children}
      </MobileModal>
    )
  }

  return (
    <div
      className={cn(
        s.root,
        'absolute z-20 bg-primary left-0 right-0 px-2 pt-2 pb-6 border-b border-secondary'
      )}
    >
      {children}
    </div>
  )
}

export default OptionsMenu
