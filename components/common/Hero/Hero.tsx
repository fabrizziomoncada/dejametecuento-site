type Props = {
  title: string
  description?: string
}

const Hero = ({ title, description }: Props) => {
  return (
    <div className="py-4 text-center">
      <h1 className="text-xl mb-2">{title}</h1>
      {description && <p className="text-s text-secondary">{description}</p>}
    </div>
  )
}

export default Hero
