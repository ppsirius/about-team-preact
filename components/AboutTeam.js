import { Component } from "preact";
import TeamMember from "./TeamMember";
import { members } from "./members";

export default class AboutTeam extends Component {
  generateTeam = teamMembers => {
    return teamMembers.map(member => {
      return (
        <TeamMember
          id={member.id}
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
        <h2 class="team__title">Meet our team</h2>
        <ul class="team__list">{this.generateTeam(members)}</ul>
      </section>
    );
  }
}
