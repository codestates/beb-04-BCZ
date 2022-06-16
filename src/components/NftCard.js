import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nft({ nft, idx }) {
  const { tokenId, tokenURI } = nft;
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/list/${tokenId}`);
  };

  return (
    <div className="nft" onClick={handleCardClick}>
      <img className="nft-img" alt={`Img ${tokenId}`} src={tokenURI} width={300} />
      id: {tokenId} ---- <span> name: qwerty</span>
    </div>
  );
}
