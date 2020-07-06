import React, { Component } from 'react'

export default class Parcours extends Component {
  render() {
    return (
	<main>
		<section data-section="parcours">
			<h1>Parcours</h1>
      <hr />
      <br />
      <div className="timeline-components">
        <div className="timeline">
          <div className="timeline-body">
            <div className="timeline-item">
              <p className="time">2016 - 2019</p>
              <div className="content">
                <h2 className="title">Diplôme de bachelier en informatique de gestion à l'HERS</h2>
                <p>J'ai suivi une formation de trois ans en informatique de gestion à la Haute École Robert Schuman. Grâce à cette formation, je suis compétent en différents langages de programmation, la gestion de base de données, les réseaux et des bases en hacking, ainsi que de la gestion de projets.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-body">
            <div className="timeline-item">
              <p className="time">Fev - Août 2019</p>
              <div className="content">
                <h2 className="title">Stage et job étudiant dans la société LEA-Agri</h2>
                <p>Durant ce stage, pour ma formation en informatique de gestion, mes connaissances en analyse et gestion de base de données ont été mises à contribution, et j'ai appris l'utilisation du framework PHP Symfony. Cette expérience fut très enrichissante, et a débouché sur un job étudiant d'une durée de deux mois.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-body">
            <div className="timeline-item">
              <p className="time">2015</p>
              <div className="content">
                <h2 className="title">CESS obtenu à l'Institut Sainte-Marie d'Arlon</h2>
                <p>Études secondaires à L'ISMA, option latin, anglais et arts d'expression.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
		</section>
      </main>
	  )
  }
}
