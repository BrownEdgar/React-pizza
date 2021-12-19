
import React, { useState } from 'react';

import { PizzaList } from './assets/data/pizzas'
import './assets/stykeSheets/App.scss';

function App() {
	const [pizzas, setpizzas] = useState(PizzaList)
  return (
    <div className="App">
			<h1>Get started</h1>	
    </div>
  );
}

export default App;
