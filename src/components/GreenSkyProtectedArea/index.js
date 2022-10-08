import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './GreenSkyProtectedArea.scss'

export function GreenSkyProtectedArea() {
  const auth = useAuth();

  if (auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to="/" />;
  }
  return (
    <h1>Protectd Area</h1>
  )
}