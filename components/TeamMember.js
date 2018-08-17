import { Component } from 'preact';

export default class TeamMember  extends Component {
	render() {
		return (
      <li class="team__member">
        <div class="team__member__avatar">

        </div>
        <span class="team__member__name">
          Basia Sołtyńska
        </span>
        <span class="team__member__position">
          Founder
        </span>
        <span class="team__member__location">
          Warsaw
        </span>
      </li>
		);
	}
}
