import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
	<main>
		<section data-section="introduction">
      <div className="intro-container">
        <div className="front">
          <div className="intro-text">
            <h1 data-splitting className="headline--jump">Qui suis-je ? <img alt="mouse" className="mouse-img" src="images/mouse.png"></img></h1>
		  </div>
        </div>
        <div className="back hide-start">
          <h1> QUENTIN BRIDAY </h1>
		  <div>
			<h2>Jeune homme de 22 ans, passionné et déterminé, je vis pour apprendre continuellement de nouvelles choses et approfondir celles que je connais
			déjà.</h2>
		  </div>
		  
		  <div className="contact">
			<legend>Contact</legend>
			<h3><u>Tel</u> : +32491367474</h3>
			<h3><u>Mail</u> : quentinbriday@yahoo.fr</h3>
			<h3><a href="https://www.linkedin.com/in/quentin-briday-a66396171/">Mon profil Linkedin</a></h3>
		  </div>
		  <img alt="quentin briday" className="quentin" src="images/test_moi2.jpg"></img>
        </div>
      </div>
		</section>
      </main>
	  
	  )
  }
}
