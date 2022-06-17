import { useState, useEffect } from "react";
import Erc721 from "../components/Erc721";
import erc721Abi from "../erc721Abi";
import { erc721Addr } from "../erc721Addr";

function Create({ account, web3 }) {
  // Abi코드는 바뀌는 상태값이 아니기 때문에 props에서 지우고 import해온 것을 사용했습니다.
  // console.log("web3 = " + web3.tokenURL);

  // const tokenURL =
  //   "https://gateway.pinata.cloud/ipfs/QmdX6MKinhR5K3QjXv34UohN8BjGwKBF1UmUVoU15ZPzAC/dog.jpeg";
  //"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/35675615-2910-484d-b796-9b9ad28a2c43/apple.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220615T141739Z&X-Amz-Expires=86400&X-Amz-Signature=ad0bfd87ba1b5b83c1be5af3120cb19bab41229cb5146506bd0c01f46189d146&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22apple.jpeg%22&x-id=GetObject";
  const [createForm, setCreateForm] = useState({
    fileId: "",
    token_url: "",
    nftId: "",
    nftDescription: "",
  });
  const onClickMint = async () => {
    try {
      if (!account) return;
      // const response = await web3.cozNFTs.mintNFT().send({ account, tokenURL });
      const tokenContract = await new web3.eth.Contract(erc721Abi, erc721Addr);
      // console.log("account = " + account);
      // console.log("token_url = " + createForm.token_url);
      // console.log("tokenURL = " + tokenURL);
      tokenContract.methods.mintNFT(account, createForm.token_url).send({ from: account });
      const totalSupply = await tokenContract.methods.totalSupply().call();
      // console.log("totalSupply = " + totalSupply);
    } catch (error) {
      console.error(error);
    }
    // contract.methods.transferd('0x497fe03ba1dabf3b391079e8f69eb178243a736b')
    // .send({from:accounts[0]})
  };

  const onChangeCreateForm = (e) => {
    setCreateForm({
      ...createForm,
      [e.target.name]: e.target.value,
    });
    // console.log("fileId" + createForm.fileId);
    // console.log("nftId" + createForm.nftId);
    // console.log("nftDescription" + createForm.nftDescription);
    // console.log("token_url" + createForm.token_url);
  };
  return (
    <div>
      <nav>
        <div>
          <input type="file" id="fileId" name="fileId" onChange={onChangeCreateForm} />
        </div>
        <div>
          <input type="text" id="token_url" name="token_url" placeholder="사진 url입력" onChange={onChangeCreateForm}></input>
        </div>
        <div>
          <input id="nftId" type="text" name="nftId" placeholder="NFT-NAME 입력" onChange={onChangeCreateForm}></input>
        </div>
        <div>
          <input id="nftDescription" type="text" name="nftDescription" placeholder="Description 입력" onChange={onChangeCreateForm}></input>
        </div>
        <button onClick={onClickMint}>만들기!</button>
      </nav>
    </div>
  );
}

export default Create;
