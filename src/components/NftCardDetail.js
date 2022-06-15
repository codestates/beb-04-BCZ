import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// NFT 카드의 상세 페이지
function NftCardDetail({ nfts, web3, match }) {
  const navigate = useNavigate();
  const { tokenId } = useParams();
  let nft = nfts.find((el) => el.tokenId === Number(tokenId));

  return (
    <div className="nft-detail">
      <h1> detail </h1>
      <p>{nft.tokenId}</p>
      <div>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
      <div className="nft-detail-img">
        <img src={nft.tokenURI} alt={`Img${nft.tokenId}`} width={500} />
      </div>
      {/* <span className="asset-name">{asset.name}</span>
      <span className="asset-description">{asset.description}</span>
      <span className="asset-owner">{asset.owner}</span>
      <span className="asset-price">{asset.price}</span> */}
      {/* <button className="asset-button">Buy</button> */}
    </div>
  );
}

export default NftCardDetail;
