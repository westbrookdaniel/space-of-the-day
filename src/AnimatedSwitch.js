import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedSwitch = ({ children }) => {
	const location = useLocation()

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div key={location.pathname}>
				<motion.div
					initial={{
						opacity: 0,
						transition: { duration: 0.2, ease: 'easeInOut' },
					}}
					animate={{
						opacity: 1,
						transition: { delay: 0.5, duration: 0.2, ease: 'easeInOut' },
					}}
					exit={{
						opacity: 0,
						transition: { duration: 0.2, ease: 'easeInOut' },
					}}
					transition={{ delay: 0.7 }}
				>
					<Switch location={location}>{children}</Switch>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

export default AnimatedSwitch
