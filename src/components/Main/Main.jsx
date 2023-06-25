import React from 'react';
import WalletButton from '../WalletButton/WalletButton';

function Main() {
  return (
    <main>
      <WalletButton onAuth={() => {}} providerName="ethereum" />
    </main>
  );
}

export default Main;
