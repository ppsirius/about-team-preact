import { Component } from 'preact';
import TeamMember from './TeamMember';

export default class AboutTeam extends Component {
	render() {
		return (
			<section class="team container">
				<h2 class="team__title section-header">
					Meet our team
				</h2>
				<ul class="team__list">
					<TeamMember />
				</ul>
			</section>
		);
	}
}
