import React from "react";
import "./GreenSkyProtectedAreaDetails.scss";
import protectedAreasList from "../../asserts/json/harcoredData.json";
import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { GreenSkyResumen } from '../GreenSkyResumen';

export function GreenSkyProtectedAreaDetails() {
  const auth = useAuth();
  const { slug } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  console.log(slug);
  const protectedArea = protectedAreasList.find(protectedArea => protectedArea.id === slug)

  if (auth.user.walletAddress === "Connect your wallet" && protectedArea) {
    return <Navigate to="/" />;
  }


  return (
    <div className="details-container">
      <div
          className="details-container__cancel"
        >
        </div>
        <div className="details-container-head">
          <p className="details-container-head__title">
            Nombre: {protectedArea.name}
          </p>
          <p className="details-container-head__slogan">
            ID: {protectedArea.id}
          </p>
        </div>
        <div className="details-container__vector"></div>
        <div className="details-container-project">
          <figure>
            <img src={protectedArea.imgbase64} alt="logo" />
          </figure>
          <p className="details-container-project__item">
            Latitud: {protectedArea.lat}
          </p>
          <p className="details-container-project__item">
            Longitud: {protectedArea.min}
          </p>
          <p className="details-container-project__item">
            Date: {protectedArea.timestamp}
          </p>
        </div>
        <GreenSkyResumen protectedArea={protectedArea} />
    </div>
  );
}
