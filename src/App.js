import React, { useEffect, useState } from 'react'
import './css/output.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AnimatedSwitch from './AnimatedSwitch'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import api from './api'
import Search from './pages/Search'
import Single from './pages/Single'
import Error from './pages/404s'

function App() {
	const [days, setDays] = useState()
	const [query, setQuery] = useState('')

	useEffect(() => {
		api.getMonth().then((res) => {
			setDays(res)
		})
	}, [])

	return (
		<Router>
			<div className="font-body text-white">
				<Nav query={query} setQuery={setQuery} />
				<AnimatedSwitch>
					<Route exact path="/">
						<Home days={days} />
					</Route>
					<Route path="/about" component={About} />
					<Route path="/search">
						<Search days={days} query={query} />
					</Route>
					<Route path="/day/:date" component={Single} />
					<Route component={Error} />
				</AnimatedSwitch>
			</div>
		</Router>
	)
}

export default App
