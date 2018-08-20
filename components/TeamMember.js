import { Component } from "preact";
import store from "../store";

export default class TeamMember extends Component {
  openSlider = (e, data) => {
    store.dispatch({
      type: "OPEN_SLIDER",
      id: e.target.id
    });
  };

  render(props) {
    return (
      <li class="member">
        <div class="member__avatar" id={props.id} onClick={this.openSlider}>
          <div class="member__avatar__icon" />
          <img
            class="member__avatar__image"
            src={props.image}
            alt={props.name}
          />
        </div>
        <span class="member__name">{props.name}</span>
        <span class="member__position">{props.position}</span>
        <span class="member__location">{props.location}</span>
      </li>
    );
  }
}
