import "./App.scss";
import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import { ethers } from "ethers";
import { useAuth } from "../../hooks/useAuth"
import { GreenSkyMenu } from "../GreenSkyMenu"
import { GreenSkyWallet } from "../GreenSkyWallet"
import { GreenSkyHome } from '../GreenSkyHome';
import { GreenSkyMonitoreo } from '../GreenSkyMonitoreo';
import { GreenSkySubscribe } from '../GreenSkySubscribe'
import { GreenSkyFooter } from '../GreenSkyFooter';
import { GreenSkyProtectedAreaDetails } from '../GreenSkyProtectedAreaDetails';

function App() {
  const auth = useAuth();

  React.useEffect(() => {
    const currentNetwork = async () => {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3Signer = web3Provider.getSigner();
      const chainId = await web3Signer.getChainId();
      return chainId;
    };
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        currentNetwork().then((response) => {
          if (response !== 5) {
            auth.logout();
          }
        });
      });
      window.ethereum.on("accountsChanged", () => {
        auth.logout();
      });
    }
  });

  return (
    <React.Fragment>
      <GreenSkyMenu>
        <GreenSkyWallet />
      </GreenSkyMenu>
      <main>
          <Routes>
            <Route path="/" element={<GreenSkyHome />} />
            <Route path="/monitoreo" element={<GreenSkyMonitoreo />} />
            <Route path="/monitoreo/:slug" element={<GreenSkyProtectedAreaDetails/>} />
            <Route path="/subscribe" element={<GreenSkySubscribe />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
      </main>
      <GreenSkyFooter />
    </React.Fragment>
  );
}

export default App;
