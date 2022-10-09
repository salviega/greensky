import "./GreenSkyMonitoreo.scss";
import React from "react";
import banner from '../../asserts/images/skywood-banner-2.jpg'
import protectedAreasList from '../../asserts/json/harcoredData.json'
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from 'react-router-dom';
import { GreenSkyBanner } from '../GreenSkyBanner';
import { GreenSkyProtectedAreas } from '../GreenSkyProtectedAreas';
import { GreenSkyProtectedArea } from '../GreenSkyProtectedArea';

export function GreenSkyMonitoreo(){
  const auth = useAuth();

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  if (auth.user.walletAddress === "CONNECT WALLET") {
    return <Navigate to="/" />;
  }
  return (
    <div className='monitoreo'>
      <GreenSkyBanner banner={banner}>
      </GreenSkyBanner>
      <p className='monitoreo__title'>Dynamic NFTs.</p>
      <p className='monitoreo__description'>The right to truthful and complete information is something that motivates us. Our Skywood dynamic NFTs let you access all of the monitoring information for each of our registered ecosystems.</p>
      {error && <p className='monitoreo__description'>There was an error, look the console inspect</p>}
      {loading && !error && 
        <GreenSkyProtectedAreas>
          {protectedAreasList.map((protectedArea, index) => (
            <GreenSkyProtectedArea key={index} protectedArea={protectedArea} />
          ))}
        </GreenSkyProtectedAreas>
      }
    </div>
  )
}