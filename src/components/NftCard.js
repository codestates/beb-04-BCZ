import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Nft({ nft, idx }) {
  const { tokenId, tokenURI } = nft;
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/list/${tokenId}`);
  };

  return (
    <div className="nft" onClick={handleCardClick}>
      id: {tokenId}
      <img src={tokenURI} width={300} />
      {/* <img className="asset-img"></img> */}
      {/* <span className="asset-name">{asset.name}</span>
      <span className="asset-description">{asset.description}</span>
      <span className="asset-owner">{asset.owner}</span>
      <span className="asset-price">{asset.price}</span> */}
      {/* <button className="asset-button">Buy</button> */}
    </div>
  );
}
