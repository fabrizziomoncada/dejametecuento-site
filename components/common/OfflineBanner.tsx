import { useIsOffline } from '@lib/hooks/use-is-offline'

const OfflineBanner = () => {
  const { isOffline } = useIsOffline()

  if (!isOffline) return null

  return (
    <div className="flex justify-center items-center fixed bottom-4 py-4 left-4 right-4 bg-blue z-20 rounded-lg">
      <p className="text-secondary uppercase text-sm font-bold">Sin internet</p>
    </div>
  )
}

export default OfflineBanner
