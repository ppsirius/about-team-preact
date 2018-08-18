import { Component } from "preact";
export default class TeamMember extends Component {
  render(props) {
    return (
      <li class="member">
        <div class="member__avatar">
          <div class="member__avatar__icon" />
          <img
            class="member__avatar__image"
            src={props.image}
            alt="member name"
          />
        </div>
        <span class="member__name">{props.name}</span>
        <span class="member__position">{props.position}</span>
        <span class="member__location">{props.location}</span>
      </li>
    );
  }
}
