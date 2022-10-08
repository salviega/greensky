import React from 'react';
import './GreenSkyProtectedAreaDetails.scss'
import protectedAreasList from '../../asserts/json/harcoredData.json'
import { Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function GreenSkyProtectedAreaDetails() {
  const auth = useAuth()
  const { slug } = useParams()
  const protectedArea = protectedAreasList.find(protectedArea => protectedArea.name === slug)

  if (auth.user.walletAddress === "Connect your wallet" && protectedArea) {
    return <Navigate to="/" />;
  }

  return (
    <h1>protectedArea</h1>
  )
}