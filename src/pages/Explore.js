import React, { useState, useEffect } from "react";
import NftCardList from "../components/NftCardList";
import erc721Abi from "../erc721Abi";
import { erc721Addr } from "../erc721Addr";

function Explore({ web3, nfts, setNfts }) {
  const [total, setTotal] = useState();

  useEffect(() => {
    const getNfts = async () => {
      try {
        const tokenContract = await new web3.eth.Contract(erc721Abi, erc721Addr);
        const totalSupply = await tokenContract.methods.totalSupply().call();
        setTotal(totalSupply);
        let arr = [];
        for (let i = 1; i <= totalSupply; i++) {
          arr.push(i);
        }
        for (let tokenId of arr) {
          let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
          setNfts((prevState) => {
            return [...prevState, { tokenId, tokenURI }];
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (web3) {
      getNfts();
    }
  }, [web3]);

  return (
    <div id="asset-list-container">
      <div id="asset-list-body">
        <div id="asset-list-title">Explore...</div>
        <div>total: {total}</div>
        <NftCardList nfts={nfts} web3={web3} />
      </div>
    </div>
  );
}

export default Explore;