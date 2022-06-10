import { FC } from 'react';

type ArrowProps = {
  rotate?: string,
  color: string
}

export const ArrowButton: FC<ArrowProps> = ({ color, rotate }) => {
  const options = [
    {opt:"top", val: 270},
    {opt:"bottom", val: 90},
    {opt:"right", val: 0},
    {opt:"left", val: 180}
  ]

  const direction = options.find(option => option.opt == rotate)
  return(
    <svg transform={`rotate(${direction?.val})`} width="8" height="12" viewBox="0 0 8 12" fill="none">
      <path d="M0.589996 10.59L5.17 6L0.589996 1.41L2 -6.16331e-08L8 6L2 12L0.589996 10.59Z" fill={color}/>
    </svg>
  )
}
