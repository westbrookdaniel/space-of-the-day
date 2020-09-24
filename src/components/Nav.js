import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrFormSearch } from 'react-icons/gr'
import { AnimatePresence, motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

const Nav = ({ query, setQuery }) => {
	const history = useHistory()

	const [hidden, setHidden] = useState(false)
	const [lock, setLock] = useState(false)

	const handleExpand = () => setHidden(true)
	const handleCollapse = () => {
		if (lock) return
		setHidden(false)
	}
	const handleFocus = () => {
		history.push('/search')
		setLock(true)
	}
	const handleBlur = () => {
		setLock(false)
		setHidden(false)
	}

	return (
		<header className="absolute xl:fixed w-full z-50 bg-primary-500">
			<nav className="grid xl:flex grid-cols-2 items-center justify-between px-12 m-auto flex-wrap pb-4 xl:pb-0">
				<Link
					to="/about"
					style={{ gridRow: '2', gridColumn: 'span 2' }}
					className="text-center block mt-1 text-black font-bold hover:text-black xl:mr-4"
				>
					About
				</Link>
				<Link to="/" style={{ gridRow: '1', gridColumn: 'span 2' }} className="outline-none">
					<h1 className="no-select text-center text-5xl xl:text-8xl tracking-tight m-3 pb-1 leading-none font-display text-black outline-none">
						SPACE OF THE DAY
					</h1>
				</Link>
				<div
					className="cursor-pointer hidden xl:flex justify-center mt-1 text-black hover:text-black xl:mr-4"
					onMouseEnter={handleExpand}
					onMouseLeave={handleCollapse}
				>
					<GrFormSearch title="search" size="2em" />
					<AnimatePresence>
						{hidden && (
							<motion.div
								key={0}
								transition={{
									ease: 'easeOut',
								}}
								initial={{ opacity: 0, width: 0 }}
								animate={{ opacity: 1, width: 'auto' }}
								exit={{ opacity: 0, width: 0 }}
							>
								<input
									type="text"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									onBlur={handleBlur}
									onFocus={handleFocus}
									placeholder="Search this month"
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
