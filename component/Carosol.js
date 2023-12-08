import Carousel from "react-bootstrap/Carousel";

function carosol() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src="banner.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="banner2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="banner3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default carosol;
