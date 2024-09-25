import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import {ConnectionProvider,WalletProvider} from '@solana/wallet-adapter-react'
import {
WalletMultiButton,
WalletDisconnectButton,
WalletModalProvider
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css'

function App() {
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <TokenLaunchpad></TokenLaunchpad>
            </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
    </>
    
  )
}

export default App
