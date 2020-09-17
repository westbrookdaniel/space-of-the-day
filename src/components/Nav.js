import React from 'react'
import { Link } from 'react-router-dom'
import { GrFormSearch } from 'react-icons/gr'

const Nav = () => {
	return (
		<header className="absolute w-full z-50 bg-primary-500">
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
				<Link
					to="/create"
					style={{ gridRow: '2' }}
					className="flex justify-center mt-1 text-black hover:text-black xl:mr-4"
				>
					<GrFormSearch title="search" size="2em" />
				</Link>
			</nav>
		</header>
	)
}

export default Nav
