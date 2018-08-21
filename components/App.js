import "../style";
import { Component } from "preact";
import AboutTeam from "./AboutTeam";
import TeamSlider from "./TeamSlider";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIsOpened: false,
      slideIndex: 0
    };
  }

  openSlider = event => {
    if (event.target.classList.contains("member__avatar")) {
      this.setState({
        sliderIsOpened: true,
        slideIndex: event.target.id - 1
      });
    }
  };

  closeSlider = event => {
    if (event.target.classList.contains("slider__close")) {
      this.setState({
        sliderIsOpened: false
      });
    }
  };

  componentDidMount() {
    addEventListener("click", this.openSlider);
    addEventListener("click", this.closeSlider);
  }
  componentWillUnmount() {
    removeEventListener("click", this.openSlider);
    removeEventListener("click", this.closeSlider);
  }

  render() {
    return (
      <div class="app">
        <AboutTeam />
        <TeamSlider
          sliderIsOpened={this.state.sliderIsOpened}
          slideIndex={this.state.slideIndex}
        />
      </div>
    );
  }
}
