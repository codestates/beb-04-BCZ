import React, { useState } from 'react';
import erc721Abi from '../erc721Abi'; // 컨트랙트 객체를 생성하기 위해서는 ABI가 필요하기 때문에 임포트

function Erc721({ erc721list, web3, account }) {
  const [to, setTo] = useState('');

  const sendToken = async (tokenAddr, tokenId) => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, tokenAddr, { from: account });
    tokenContract.methods
      .transferFrom(account, to, tokenId)
      .send({ from: account })
      .on('receipt', (receipt) => {
        console.log(receipt);
        setTo('');
      });
  };

  return (
    <div className="erc721list">
      {erc721list.map((token) => {
        return (
          <div className="erc721token">
            Name: <span className="name">{token.name}</span>(
            <span className="symbol">{token.symbol}</span>)
            <div className="nft">id: {token.tokenId}</div>
            <img src={token.tokenURI} width={300} />
            {/* nft 전송 관련 */}
            <div className="tokenTransfer">
              To:{' '}
              <input
                type="text"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              ></input>
              <button
                className="sendErc20Btn"
                onClick={sendToken.bind(this, token.address, token.tokenId)}
              >
                send Token
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Erc721;
