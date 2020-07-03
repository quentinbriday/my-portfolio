import React, { Component } from 'react'

export default class Loisir extends Component {
  render() {
    return (
	<main>
		<section className="loisir-section" data-section="loisirs">
    <h1>Loisirs</h1>
    <hr />
    <br />
    <div className="loisir-container">
        <div className="loisir-column active">
          <div className="loisir-content">
            <h1>1</h1>
            <div className="loisir-box">
              <h2>Lire</h2>
              <p>Grand fan de roman policiers, psychologiques, mangas... Je pourrais me perdre des heures dans de bons livres.</p>
            </div>
          </div>
          <div className="bg bg1" />
        </div>

        <div className="loisir-column">
          <div className="loisir-content">
            <h1>2</h1>
            <div className="loisir-box">
              <h2>La batterie</h2>
              <p>Je joue de la batterie depuis mes 10 ans. Cet instrument m'a permis de prendre confiance en moi et de m'exprimer.</p>
            </div>
          </div>
          <div className="bg bg2" />
        </div>

        <div className="loisir-column">
          <div className="loisir-content">
            <h1>3</h1>
            <div className="loisir-box">
              <h2>Écrire</h2>
              <p>Que ce soit des thrillers, des critiques, voire du code, écrire est l'une de mes occupations favorites.</p>
            </div>
          </div>
          <div className="bg bg3" />
        </div>

        <div className="loisir-column">
          <div className="loisir-content">
            <h1>4</h1>
            <div className="loisir-box">
              <h2>La musculation</h2>
              <p>Le fitness et la musculation me poussent à me dépasser sans cesse et à améliorer ma condition physique.</p>
            </div>
          </div>
          <div className="bg bg4" />
        </div>
      </div>
		</section>
      </main>
	  )
  }
}
