import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { GreenSkyBanner } from '../GreenSkyBanner';
import './GreenSkySubscribe.scss'
import banner from '../../asserts/images/banner-gray.png'

export function GreenSkySubscribe() {
  const auth = useAuth();

  if (auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to="/" />;
  }
  return (
    <div className='subscribe'>
      <GreenSkyBanner banner={banner}/>
      <h1 className='subscribe__title'>Subscribe</h1>
      <p className='subscribe__description'>As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea.</p>
    </div>
  )
}