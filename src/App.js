import React from 'react'
import './css/output.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

import AnimatedSwitch from './AnimatedSwitch'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'

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
TODO: Apply Branding
TODO: Write About Page
TODO: Setup api and caching
TODO: Improve card layout for information (Date, Image, Title, Author)
TODO: Add a details page for explination and larger image
TODO: Add Search (at least by date)
----
Only Read, as CRUD will be illsutrated in IPD Project

*/

function App() {
	return (
		<Router>
			<div className="App font-body">
					<AnimatedSwitch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</AnimatedSwitch>
			</div>
		</Router>
	)
}

export default App
