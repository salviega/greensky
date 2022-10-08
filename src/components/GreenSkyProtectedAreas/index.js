import React from 'react';
import './GreenSkyProtectedAreas.scss'

export function GreenSkyProtectedAreas({children}) {
  return (
    <div className='protected-areas'>
      {React.Children.toArray(children).map(child => React.cloneElement(child, { }))}
    </div>
  )
}