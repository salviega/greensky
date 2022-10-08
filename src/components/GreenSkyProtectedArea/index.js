import React from 'react';
import './GreenSkyProtectedArea.scss'
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function GreenSkyProtectedArea({protectedArea}) {
  const auth = useAuth();

  if (auth.user.walletAddress === "Connect your wallet") {
    return <Navigate to="/" />;
  }
  return (
    <div className="protected-area">
      <figure >
        <img src={protectedArea.imgbase64} alt="logo" />
      </figure>
      <div className="protected-area-description">
        <p className="protected-area-description__title">{protectedArea.name}</p>
      </div>
        <div className="protected-area-description__show">
          <Link to={`/monitoreo/${protectedArea.name}`}>Show</Link>
        </div>
    </div>
  )
}