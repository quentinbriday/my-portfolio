import React from 'react';
import './App.css';
import Introduction from './components/introduction'
import Sidebar from './components/sidebar'
import Parcours from './components/parcours'
import Competences from './components/competences'
import Loisirs from './components/loisirs'
import Credits from './components/credits'

function App() {
  return (
    <div>
        <div>
		<Sidebar></Sidebar>
			<div>
				<Introduction></Introduction>
				<Parcours></Parcours>
				<Competences></Competences>
				<Loisirs></Loisirs>
				<Credits></Credits>
          	</div>
      	</div>
      </div>
  );
}

export default App;

