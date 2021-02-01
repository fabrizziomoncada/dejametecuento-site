import Close from '@components/icons/Close'
import { useToast } from '@lib/hooks/use-toast'
import { useEffect } from 'react'
import { Button } from '../Button'

type Props = {
  children: React.ReactNode
  id: number
}

const Toast = ({ children, id }: Props) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className="relative flex justify-between items-center uppercase text-xs font-bold mt-2 mx-auto w-11/12 bg-accent py-2 pl-6 pr-2 text-secondary rounded-lg md:w-full">
      {children}
      <Button
        className="bg-secondary text-primary-80"
        onClick={() => removeToast(id)}
        ariaLabel="Close"
      >
        <Close />
      </Button>
    </div>
  )
}

export default Toast
