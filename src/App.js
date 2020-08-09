import React from 'react'
import './css/output.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AnimatedSwitch from './AnimatedSwitch'
import Nav from './components/Nav'
import Home from './pages/Home'
import Create from './pages/Create'
import About from './pages/About'
import Update from './pages/Update'

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<div className="p-6 py-12 max-w-6xl mx-auto">
					<AnimatedSwitch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/create" component={Create} />
						<Route path="/update" component={Update} />
					</AnimatedSwitch>
				</div>
			</div>
		</Router>
	)
}

export default App
