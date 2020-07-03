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
                <p>J'ai fait mes trois ans de bachelier en informatique de gestion à la Haute École Robert Schuman. Dans cette formation, j'ai appris énormément dans le domaine de l'informatique, que ce soit les différents langages, la gestion de base de données, les réseaux et des bases en hacking, ainsi que de la gestion de projets.</p>
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
                <p>Il s'agit du stage réalisé lors de mes études en informatique de gestion. Mes connaissances en analyse et gestion de base de données y ont été mises à contribution, et j'ai appris l'utilisation du framework PHP Symfony. Cette expérience fut un enrichissement merveilleux pour le travail en entreprise, et a débouché sur un job étudiant d'une durée de deux mois.</p>
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
                <p>Mes études secondaires à L'ISMA, en option latin, anglais et arts d'expression.</p>
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
