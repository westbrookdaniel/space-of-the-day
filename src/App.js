import React from 'react'
import './css/output.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/update">
							<Update />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
