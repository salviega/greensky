import React from 'react';
import './GreenSkyProtectedAreaStatistics.scss'
import { AreaChart } from '../../shared/charts/AreaChart'

export function GreenSkyProtectedAreaStatistics({data, labels}) {
  return (
    <div className='stats'>
      <AreaChart data={data} labels={labels} />
    </div>
  )
} 