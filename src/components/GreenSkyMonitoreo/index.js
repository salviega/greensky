import "./GreenSkyMonitoreo.scss";
import React from "react";
import banner from '../../asserts/images/banner-gray.png'
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


  if (auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to="/" />;
  }
  return (
    <div className='monitoreo'>
      <GreenSkyBanner banner={banner}/>
      <h1 className='monitoreo__title'>Monitoreo</h1>
      <p className='monitoreo__description'>As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea.</p>
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