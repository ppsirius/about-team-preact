import './style';
import { Component } from 'preact';
import AboutTeam from './components/AboutTeam'

export default class App extends Component {
	render() {
		return (
			<div class="app">
				<AboutTeam />
			</div>
		);
	}
}
