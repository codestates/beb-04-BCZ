import NftCard from "./NftCard";
import React, { useState, useEffect } from "react";

function NftCardList({ nfts, web3 }) {
  return (
    <div className="nft-list">
      {nfts.map((nft, idx) => (
        <NftCard nft={nft} key={idx} />
      ))}
    </div>
  );
}

export default NftCardList;
