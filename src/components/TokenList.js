import Erc721 from './Erc721';
import React from 'react';

function TokenList({ erc721list, web3, account }) {
  return (
    <div className="tokenlist">
      <Erc721 erc721list={erc721list} web3={web3} account={account} />
    </div>
  );
}

export default TokenList;
