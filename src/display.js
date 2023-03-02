import React from "react";
import { useAccount, useContractRead, useContractReads } from "wagmi";
// import ReactDOM from "react-dom/client";
import "./index.css";
// // import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

// const { chains, provider } = configureChains(
//   [mainnet, polygon, optimism, arbitrum],
//   [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

// export default function App() {

// const {ethereum} = window;

// ethereum ? <p>yes</p> : <p>install metamask</p>
// }

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

export default function App() {
  const { address } = useAccount();
  return (
    <>
      <h1> VISIBILITY CHECK for {address}</h1>
    </>
  );
}
