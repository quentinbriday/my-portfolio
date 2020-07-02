import React from 'react';
import './App.css';
import Introduction from './components/introduction'
import Sidebar from './components/sidebar'
import Parcours from './components/parcours'
import Competences from './components/competences'
import Loisirs from './components/loisirs'

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
          	</div>
      	</div>
      </div>
  );
}

export default App;

