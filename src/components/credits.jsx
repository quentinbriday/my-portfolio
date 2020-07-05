import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
		<main>
			<section data-section="credits">
				<div className="credits-container">
					<legend>Ce portfolio a vu le jour durant le confinement, né d'une fusion entre mon ennui et mon désir d'apprendre le framework <i>React.js</i>.</legend>
				</div>
			</section>
		</main>
	 )
  }
}