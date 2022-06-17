import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nft({ nft, idx }) {
  const { tokenId, tokenURI } = nft;
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/list/${tokenId}`);
  };

  return (
    <div className="nft-card" onClick={handleCardClick}>
      <div className="nft-card-title">#{tokenId} NAME : qwerty</div>
      <img className="nft-card-img" alt={`Img ${tokenId}`} src={tokenURI} />
    </div>
  );
}
