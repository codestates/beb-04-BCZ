import React, { useState, useEffect } from "react";
import Nft from "../components/Nft";

function Explore({ web3 }) {
  const [nfts, setNfts] = useState([]);

  const getNfts = async () => {
    try {
      data = {}; // 토큰의 속성 등 정보
      setNfts((prev) => [...prev, data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNfts();
  }, [web3]);

  return (
    <div id="asset-list-container">
      <div id="asset-list-body">
        <div id="asset-list-title">Explore...</div>
        {nfts.map((nft, idx) => (
          <Nft nft={nft} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
