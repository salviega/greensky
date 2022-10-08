import "./App.scss";
import React from "react";
import { Route, Routes, Redirect, Navigate} from "react-router-dom";
import { ethers } from "ethers";
import { useAuth } from "../../hooks/useAuth"
import { GreenSkyMenu } from "../GreenSkyMenu"
import { GreenSkyWallet } from "../GreenSkyWallet"
import { GreenSkyHome } from '../GreenSkyHome';
import { GreenSkyMonitoreo } from '../GreenSkyMonitoreo';
import { GreenSkyProtectedArea } from '../GreenSkyProtectedArea';
import { GreenSkySubscribe } from '../GreenSkySubscribe'
import { GreenSkyFooter } from '../GreenSkyFooter';

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
    <div className="app__wrapper">
      <GreenSkyMenu>
        <GreenSkyWallet />
      </GreenSkyMenu>
      <main>
        <div className="main__container">
          <Routes>
            <Route path="/" element={<GreenSkyHome />} />
            <Route path="/monitoreo" element={<GreenSkyMonitoreo />} />
            <Route path="/monitoreo/:slug" element={<GreenSkyProtectedArea/>} />
            <Route path="/subcribe" element={<GreenSkySubscribe />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
          </Routes>
        </div>
      </main>
      <GreenSkyFooter />
    </div>
  );
}

export default App;
