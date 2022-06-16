import React, { useState, useEffect } from "react";
import NftCardList from "../components/NftCardList";
import Pagination from "../components/Pagination";
import erc721Abi from "../erc721Abi";
import { erc721Addr } from "../erc721Addr";

function Explore({ web3, nfts, setNfts }) {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 8;

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

        // 리렌더링 될 때마다 totalSupply만큼 계속 state 값에 추가 되는 오류 방지
        if (nfts.length < totalSupply) {
          for (let tokenId of arr) {
            let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
            setNfts((prevState) => {
              return [...prevState, { tokenId, tokenURI }];
            });
          }
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
        <div id="asset-list-title">
          <p>Explore...</p>
        </div>
        <div id="asset-totalNum">total: {total}</div>
        <div id="asset-list-content">
          <NftCardList nfts={nfts} web3={web3} limit={limit} page={page} />
        </div>
        <Pagination total={total} limit={limit} page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default Explore;
