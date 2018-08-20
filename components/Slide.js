import { Component } from "preact";

export default class Slide extends Component {
  render(props) {
    return (
      <div className="slider__slide">
        <div className="slider__slide__wrapper">
          <span className="slider__slide__position">Founder</span>
          <span className="slider__slide__name">Barbar Jakastam</span>
        </div>
      </div>
    );
  }
}
