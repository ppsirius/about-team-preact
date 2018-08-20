import { Component } from "preact";
import Slider from "react-slick";

export default class TeamSlider extends Component {
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div class="slider-wrapper">
        <div className="slider">
          <Slider ref={e => (this.slider = e)} {...settings}>
            <div className="slider__slide">
              <div className="slider__slide__wrapper">
                <span className="slider__slide__position">Founder</span>
                <span className="slider__slide__name">Barbar Jakastam</span>
              </div>
            </div>
            <div className="slider__slide">
              <div className="slider__slide__wrapper">
                <span className="slider__slide__position">Founder</span>
                <span className="slider__slide__name">Barbar Jakastam</span>
              </div>
            </div>
            <div className="slider__slide">
              <div className="slider__slide__wrapper">
                <span className="slider__slide__position">Founder</span>
                <span className="slider__slide__name">Barbar Jakastam</span>
              </div>
            </div>
          </Slider>
          <div className="arrows">
            <img
              className="arrow prev"
              src="/assets/arrow.png"
              onClick={this.previous}
            />
            <img
              className="arrow next"
              src="/assets/arrow.png"
              onClick={this.next}
            />
          </div>
        </div>
      </div>
    );
  }
}
