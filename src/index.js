import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@rainbow-me/rainbowkit/styles.css';
import {
  injectedWallet,
  braveWallet,
  omniWallet,
  trustWallet,
  ledgerWallet,
  walletConnectWallet,
  metaMaskWallet,
  coinbaseWallet,
  argentWallet
} from '@rainbow-me/rainbowkit/wallets';
import {
  RainbowKitProvider,
  darkTheme 
} from '@rainbow-me/rainbowkit';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: '0k5WRNZpxfZSQYENENexxXi6CkBUiFs5' }),
    publicProvider()
  ]
);


const connectors = connectorsForWallets([
  {
    groupName: 'Party Wallets',
    wallets: [
      walletConnectWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
      metaMaskWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
      coinbaseWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
      argentWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
      trustWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
      injectedWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
      braveWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
      omniWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
      ledgerWallet({ chains, appName: "UNKNOWN's 21st Birthday"}),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        theme={darkTheme({
          accentColor: '#e9c46a',
          accentColorForeground: 'black',
          overlayBlur: 'large',
        })} 
        modalSize="compact" 
        coolMode
        chains={chains}>
    <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
