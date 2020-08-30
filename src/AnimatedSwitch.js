import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'

const AnimatedSwitch = ({ children }) => {
	const location = useLocation()
	console.log(location.pathname)
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div key={location.pathname}>
				<Nav />
				<motion.div
					transition={{ delay: 0.7 }}
				>
					<Switch location={location}>{children}</Switch>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

export default AnimatedSwitch
