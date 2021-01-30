import React from 'react'

const EmptyList = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col items-center mt-1/5 text-primary-60">
      <div className="w-2/3 pb-1/3 mb-2 rounded-sm bg-accent opacity-60" />
      <div className="w-2/4 pb-4 mb-2 rounded-sm bg-accent opacity-40" />
      <div className="w-2/5 pb-4 mb-6 rounded-sm bg-accent opacity-20" />
      <p className="font-bold">{title}</p>
      <span className="text-xs mt-2 w-5/6 text-center">{description}</span>
    </div>
  )
}

export default EmptyList
