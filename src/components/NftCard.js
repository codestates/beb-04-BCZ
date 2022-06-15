import React from "react";

export default function Nft({ nft, idx }) {
  return (
    <div className="nft">
      id: {nft.tokenId}
      <img src={nft.tokenURI} width={300} />
      {/* <img className="asset-img"></img> */}
      {/* <span className="asset-name">{asset.name}</span>
      <span className="asset-description">{asset.description}</span>
      <span className="asset-owner">{asset.owner}</span>
      <span className="asset-price">{asset.price}</span> */}
      {/* <button className="asset-button">Buy</button> */}
    </div>
  );
}
