import "../style";
import { Component } from "preact";
import { connect } from "preact-redux";
import reduce from "../reducers";
import * as actions from "../actions";
import AboutTeam from "./AboutTeam";
import TeamSlider from "./TeamSlider";

@connect(
  reduce,
  actions
)
export default class App extends Component {
  render() {
    return (
      <div class="app">
        <AboutTeam />
        {/* <TeamSlider /> */}
      </div>
    );
  }
}
