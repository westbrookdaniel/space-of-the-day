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
				<motion.div
					className="absolute h-screen w-screen top-0 left-0 right-0 bottom-0 bg-primary"
					initial={{
						opacity: 1,
						transition: { duration: 0.2, ease: 'easeInOut' },
					}}
					animate={{
						opacity: 0,
						transition: { delay: 0.5, duration: 0.2, ease: 'easeInOut' },
					}}
					exit={{
						opacity: 1,
						transition: { duration: 0.2, ease: 'easeInOut' },
					}}
				></motion.div>

				<Nav />
				<motion.div transition={{ delay: 0.7 }}>
					<Switch location={location}>{children}</Switch>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

export default AnimatedSwitch
