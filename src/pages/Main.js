import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <h1>Main</h1>
      <div className="main-body">
        <div className="main-image">
          <img
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10ba0eee-927a-413f-b706-e3b5902976d5/maxresdefault.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220615T080956Z&X-Amz-Expires=86400&X-Amz-Signature=3746ababbaa9b212d351eb5c66c03fa37a7e1da2681039da4db39b32d1088438&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22maxresdefault.jpg%22&x-id=GetObject"
            width="600"></img>
        </div>
        <div className="main-button">
          <ul>
            <li>
              <Link to="/list">
                <button onClick="/explore">Explore</button>
              </Link>
            </li>
            <li>
              <Link to="/create">
                <button>Create</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
