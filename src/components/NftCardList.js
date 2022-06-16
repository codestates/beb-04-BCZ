import React from "react";
import NftCard from "./NftCard";

function NftCardList({ nfts, web3 }) {
  return (
    <div className="nft-list">
      {nfts.map((nft) => (
        <NftCard nft={nft} key={nft.tokenId} />
      ))}
    </div>
  );
}

export default NftCardList;
