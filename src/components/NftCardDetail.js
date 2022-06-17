import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { erc721Addr } from "../erc721Addr";
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
          <p>
            <b>Owned by</b> | {nft.tokenOwner}
          </p>
          <p>
            <b>Description</b> |
          </p>
          <p>
            <b>Contract Address</b> | {erc721Addr}
          </p>
          <p>
            <b>Blockchain</b> | Ethereum
          </p>
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
