import { Component } from "preact";

export default class Slide extends Component {
  render(props) {
    return (
      <div className="slider__slide">
        <div className="slider__slide__wrapper">
          <span className="slider__slide__position">{props.position}</span>
          <span className="slider__slide__name">
            {`${props.name} ${props.id}`}
          </span>
        </div>
      </div>
    );
  }
}
