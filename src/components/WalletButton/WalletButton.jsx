import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function WalletButton({ providerName, onAuth }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const provider = window[providerName];

  if (!provider) {
    return (
      <p>
        Sorry,
        {provider}
        {' '}
        provider not available. Make sure you have installed Metamask on your browser
      </p>
    );
  }

  const handleConnectWallet = async () => {
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });

      if (!accounts[0]) {
        throw new Error('No wallets found');
      }
      setWalletAddress(accounts[0]);
      setIsConnected(true);
      setErrorMessage('');
      onAuth({ walletAddress });
    } catch (error) {
      setIsConnected(false);
      setWalletAddress('');
      setErrorMessage(error.message);
      // eslint-disable-next-line no-console
      console.error(error);
      // Handle authentication error
      if (error.code === 4001) {
        return;
      }
      setErrorMessage(error.message);
    }
  };
  const buttonClass = 'wallet-button';
  return isConnected ? (
    <Button
      label={walletAddress}
      className={buttonClass}
      disabled
    />
  ) : (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <Button
        variant="secondary"
        label="Connect Wallet"
        onClick={handleConnectWallet}
        className={buttonClass}
      />
    </div>
  );
}

WalletButton.propTypes = {
  providerName: PropTypes.string.isRequired,
  onAuth: PropTypes.func.isRequired,
};

export default WalletButton;
