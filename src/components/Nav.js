import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrFormSearch } from 'react-icons/gr'
import { AnimatePresence, motion } from 'framer-motion'

const Nav = () => {
	const [hidden, setHidden] = useState(false)
	const [lock, setLock] = useState(false)

	const handleExpand = () => setHidden(true)
	const handleCollapse = () => {
		if (lock) return
		setHidden(false)
	}
	const handleFocus = () => setLock(true)
	const handleBlur = () => {
		setLock(false)
		setHidden(false)
	}

	return (
		<header className="fixed w-full z-50 bg-primary-500">
			<nav className="grid xl:flex grid-cols-2 items-center justify-between px-12 m-auto flex-wrap pb-4 xl:pb-0">
				<Link
					to="/about"
					style={{ gridRow: '2' }}
					className="text-center block mt-1 text-black font-bold hover:text-black xl:mr-4"
				>
					About
				</Link>
				<Link to="/" style={{ gridRow: '1', gridColumn: 'span 2' }}>
					<h1 className="text-center text-8xl tracking-tight m-3 pb-1 leading-none font-display text-black">
						SPACE OF THE DAY
					</h1>
				</Link>
				<div
					style={{ gridRow: '2' }}
					className="cursor-pointer flex justify-center mt-1 text-black hover:text-black xl:mr-4"
					onMouseEnter={handleExpand}
					onMouseLeave={handleCollapse}
				>
					<GrFormSearch title="search" size="2em" />
					<AnimatePresence>
						{hidden && (
							<motion.div
								key={0}
								transition={{
									ease: 'easeOut'
								}}
								initial={{ opacity: 0, width: 0 }}
								animate={{ opacity: 1, width: 'auto' }}
								exit={{ opacity: 0, width: 0 }}
							>
								<input
									type="text"
									onBlur={handleBlur}
									onFocus={handleFocus}
									placeholder="Search"
									className="bg-primary-600 placeholder-primary-900 py-1 px-3 rounded focus:outline-none"
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</nav>
		</header>
	)
}

export default Nav
