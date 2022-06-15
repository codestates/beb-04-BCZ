import { useState, useEffect } from "react";
import Erc721 from "../components/Erc721";
import erc721Abi from "../erc721Abi";

function Create({ account, web3, erc721Abi }) {
  // console.log("web3 = " + web3.tokenURL);
  // const addNewErc721Token = async () => {
  //   const tokenContract = await new web3.eth.Contract(erc721Abi, account);
  //   const totalSupply = await tokenContract.methods.totalSupply().call();
  //   console.log("totalSupply = " + totalSupply);
  // };

  const tokenURL =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69d76ff8-0043-4393-b955-6c700967c17c/woman.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220615T075225Z&X-Amz-Expires=86400&X-Amz-Signature=7244dabd0a96d6995138462f5e973b6b21e7d127999b0e8f492149cff394a133&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22woman.jpeg%22&x-id=GetObject";
  const [createForm, setCreateForm] = useState({
    fileId: "",
    nftId: "",
    nftDescription: "",
  });
  const onClickMint = async () => {
    try {
      if (!account) return;
      // const response = await web3.cozNFTs.mintNFT().send({ account, tokenURL });
      console.log("111");
      const tokenContract = await new web3.eth.Contract(erc721Abi, account);
      const totalSupply = await tokenContract.methods.totalSupply().call();
      console.log("totalSupply = " + totalSupply);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeCreateForm = (e) => {
    setCreateForm({
      ...createForm,
      [e.target.name]: e.target.value,
    });
    console.log("fileId" + createForm.fileId);
    console.log("nftId" + createForm.nftId);
    console.log("nftDescription" + createForm.nftDescription);
  };
  return (
    <div>
      <nav>
        <div>
          <input
            type="file"
            id="fileId"
            name="fileId"
            onChange={onChangeCreateForm}
          />
        </div>
        <div>
          <input
            id="nftId"
            type="text"
            name="nftId"
            placeholder="NFT-NAME 입력"
            onChange={onChangeCreateForm}
          ></input>
        </div>
        <div>
          <input
            id="nftDescription"
            type="text"
            name="nftDescription"
            placeholder="Description 입력"
            onChange={onChangeCreateForm}
          ></input>
        </div>
        <button onClick={onClickMint}>만들기!</button>
      </nav>
    </div>
  );
}

export default Create;
