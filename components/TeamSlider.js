import { Component } from "preact";
import Slider from "react-slick";
import cx from "classnames";
import Slide from "./Slide";
import { members } from "./members";

export default class TeamSlider extends Component {
  next = () => {
    this.slider.slickNext();
  };

  previous = () => {
    this.slider.slickPrev();
  };

  componentWillReceiveProps(nextProps) {
    this.slider.slickGoTo(nextProps.slideIndex, true);
  }

  generateSlides = slides => {
    return slides.map(slide => {
      return (
        <Slide id={slide.id} name={slide.name} position={slide.position} />
      );
    });
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const classNames = cx("slider-wrapper", {
      "is-opened": this.props.sliderIsOpened
    });

    return (
      <div class={classNames}>
        <div className="slider">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {this.generateSlides(members)}
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
          <img src="/assets/close.png" class="slider__close">
            close
          </img>
        </div>
      </div>
    );
  }
}
