import NftCard from "./NftCard";
import React, { useParams } from "react";

// NFT 카드의 상세 페이지
function NftCardDetail({ nfts, web3 }) {
  //   const { id } = useParams();
  //   console.log({ id });
  //   const nft = nfts.forEach((el) => {
  //     if (el.tokenId === { id }) return el;
  //   });

  return (
    <div className="nft-list-detail">
      <h1> detail </h1>
      {/* <p>{nft.tokenId}</p> */}
    </div>
  );
}

export default NftCardDetail;
