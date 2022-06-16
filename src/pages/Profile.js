import React, { useEffect } from "react";
import Erc721 from "../components/Erc721";
import erc721Abi from "../erc721Abi";
import { erc721Addr } from "../erc721Addr";
import NftCardList from "../components/NftCardList";


function Profile({account, isLogin, web3, setNfts, nfts}) {
  
  const getMyNfts = async () => {
    try {
      const tokenContract = await new web3.eth.Contract(erc721Abi, erc721Addr); //컨트랙트 정보 가져옴, 연결
      const totalSupply = await tokenContract.methods.totalSupply().call(); //
      let arr = [];
      let tokenMethods = await tokenContract.methods;
      
      for (let i = 1; i <= totalSupply; i++) {
        arr.push(i);
      }
      for (let tokenId of arr) {
        const tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
        if(tokenOwner.toUpperCase() === account.toUpperCase()){
          let tokenURI = await tokenMethods.tokenURI(tokenId).call();
          setNfts((prevState) => {
            return [...prevState, { tokenId, tokenURI }];
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=> {
    if (web3) {
      getMyNfts();
    }
  }, [web3]);

  return (
    <div className="Profile">
      <h1>Profile 출력하기</h1>

      <h3>내 메타마스크 주소</h3>
      <p>{account}</p>

      <h3>내가 민팅한 nft</h3>
      <button onClick={getMyNfts}>카드 새로코침</button>

      <div id="asset-list-container">
        <div id="asset-list-body">
          <NftCardList nfts={nfts} web3={web3} />
        </div>
      </div>

      <h3>현재 로그인여부 : {String(isLogin)}</h3>

    </div>
  );
}

export default Profile;