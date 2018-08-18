import { Component } from "preact";
import TeamMember from "./TeamMember";
import { memebers } from "./members";

export default class AboutTeam extends Component {
  generateTeam = teamMembers => {
    return teamMembers.map(member => {
      return (
        <TeamMember
          name={member.name}
          image={member.image}
          position={member.position}
          location={member.location}
        />
      );
    });
  };

  render() {
    return (
      <section class="team container">
        <h2 class="team__title section-header">Meet our team</h2>
        <ul class="team__list">{this.generateTeam(memebers)}</ul>
      </section>
    );
  }
}
