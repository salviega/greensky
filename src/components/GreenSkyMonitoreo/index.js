import "./GreenSkyMonitoreo.scss";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from 'react-router-dom';

export function GreenSkyMonitoreo(){
  const auth = useAuth();

  if (auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to="/" />;
  }
  return (
    <h1>Monitoreo</h1>
  )
}