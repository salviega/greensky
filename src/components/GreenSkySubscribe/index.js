import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './GreenSkySubscribe.scss'

export function GreenSkySubscribe() {
  const auth = useAuth();

  if (auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to="/" />;
  }
  return (
    <h1>Subscribe</h1>
  )
}