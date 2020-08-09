import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedSwitch = ({ children }) => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				initial={{ opacity: 0, translateY: '100px'}}
				animate={{ opacity: 1, translateY: '0px' }}
				exit={{ opacity: 0, translateY: '100px' }}
                key={location.pathname}
                transition={{ duration: 0.3, ease: 'backOut' }}
			>
				<Switch key={location.pathname} location={location}>
					{children}
				</Switch>
			</motion.div>
		</AnimatePresence>
	)
}

export default AnimatedSwitch
