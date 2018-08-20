import "./style";
import { Component } from "preact";
import AboutTeam from "./components/AboutTeam";
import TeamSlider from "./components/TeamSlider";

export default class App extends Component {
  render() {
    return (
      <div class="app">
        <AboutTeam />
        <TeamSlider />
      </div>
    );
  }
}
