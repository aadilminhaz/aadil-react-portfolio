import Slider from "react-slick";
import './SliderTest.css';

function Responsive() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (

    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-format">
            <h1>'Hey Alexa, how much gas my car has?'</h1>
        </div>
        <div className="slider-format">
            <h1>'GenAI powered Robot to deliver your food'</h1>
        </div>
        <div className="slider-format">
            <h1>'Event-Driven Applications'</h1>
            <p>Kafka, Topics, Producers, Consumer</p>
        </div>
        <div className="slider-format">
            <h1>Microservices - RESTful API development using Java, Spring Boot</h1>
        </div>
        
      </Slider>
    </div>
  );
}

export default Responsive;
