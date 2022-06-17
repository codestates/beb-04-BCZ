import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiArrowLeftCircleFill } from "react-icons/ri";
// NFT 카드의 상세 페이지
function NftCardDetail({ nfts, web3, match }) {
  const navigate = useNavigate();
  const { tokenId } = useParams();
  let nft = nfts.find((el) => el.tokenId === Number(tokenId));

  return (
    <div className="nft-detail-container">
      <div className="nft-detail-back">
        <RiArrowLeftCircleFill color="#6d5dfe" fontSize="2.5em" onClick={() => navigate(-1)} />
      </div>
      <div className="nft-detail-body">
        <div className="nft-detail-img">
          <img src={nft.tokenURI} alt={`Img${nft.tokenId}`} width="100%" />
        </div>
        <div className="nft-detail-info">
          <h1>#{nft.tokenId} NAME</h1>
          <p>Owned by:</p>
          <p>Description:</p>
          <p>Contract Address:</p>
          <p>Blockchain: Ethereum</p>
        </div>
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
