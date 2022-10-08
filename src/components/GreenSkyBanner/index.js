import "./GreenSkyBanner.scss"
import React from 'react'

export function GreenSkyBanner({banner}) {
  return (
    <figure className='collection__banner'>
      <img src={banner} alt='banner' />
    </figure>
  )
}