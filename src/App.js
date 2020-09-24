import React, { useEffect, useState } from 'react'
import './css/output.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AnimatedSwitch from './AnimatedSwitch'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import api from './api'
import Search from './pages/Search'

/*

More appealing
Astronomy Picture of the Day
----
Shows all legacy pictures in gallery with thumbnails
Download Links too
https://apod.nasa.gov/apod/astropix.html
Endpoint Examples: 
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-17
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10
----
TODO: Write About Page
TODO: Support Videos
TODO: Add a details page for explination and larger image
TODO: Add Search (at least by date)
----
Only Read, as CRUD will be illsutrated in IPD Project

*/

function App() {
	const [days, setDays] = useState()

	useEffect(() => {
		api.getMonth().then((res) => {
			setDays(res)
		})
	}, [])

	return (
		<Router>
			<div className="font-body text-white">
				<Nav />
				<AnimatedSwitch>
					<Route exact path="/">
						<Home days={days} />
					</Route>
					<Route path="/about" component={About} />
					<Route path="/search">
						<Search days={days} />
					</Route>
				</AnimatedSwitch>
			</div>
		</Router>
	)
}

export default App
