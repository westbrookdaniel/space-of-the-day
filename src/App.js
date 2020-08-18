import React from 'react'
import './css/output.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

import AnimatedSwitch from './AnimatedSwitch'
import Nav from './components/Nav'
import Home from './pages/Home'
import Create from './pages/Create'
import About from './pages/About'
import Update from './pages/Update'

/*

More appealing
Astronomy Picture of the Day
----
Shows all legacy pictures in gallery with thumbnails
Download Links too
Endpoint Examples: 
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-17
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10
----
TODO: Improve card layout for information (Date, Image, Title, Author)
TODO: Add a details page for explination and larger image
TODO: Download for the image using HD version
TODO: Search by date
TODO: Rebrand and ReName

*/


function App() {
	return (
		<Router>
			<div className="App">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.75, duration: 0.5 }}
				>
					<Nav />
				</motion.div>
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
