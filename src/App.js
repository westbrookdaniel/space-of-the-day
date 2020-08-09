import React from 'react'
import './css/output.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<div className="p-6 pt-10 max-w-6xl mx-auto">
					<Switch>
						<Route path="/about">
							<h1>About Page</h1>
						</Route>
						<Route path="/create">
							<h1>Create Page</h1>
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
