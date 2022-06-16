import React, { useState } from "react";
import NftCard from "./NftCard";

function NftCardList({ nfts, web3, limit, page }) {
  const offset = (page - 1) * limit;
  return (
    <div className="nft-list-container">
      <div className="nft-list">
        {nfts.slice(offset, offset + limit).map((nft) => (
          <NftCard nft={nft} key={nft.tokenId} />
        ))}
      </div>
    </div>
  );
}

export default NftCardList;
