import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Main() {
  const renderSlides = () =>
    [1, 2, 3, 4, 5].map((num) => (
      <div>
        <img src={`${process.env.PUBLIC_URL}/main${num}.jpg`} alt="main1" width="100%"></img>
      </div>
    ));
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplaySpeed: 2000,
  };
  return (
    <div className="Main">
      <h1>Main</h1>
      <div className="main-body">
        <div className="main-slick-img">
          <Slider {...settings}>{renderSlides()}</Slider>
        </div>
        <div className="main-button">
          <ul>
            <li>
              <Link to="/list">
                <button>Explore</button>
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
