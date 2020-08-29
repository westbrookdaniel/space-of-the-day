import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrFormSearch } from 'react-icons/gr'

const Nav = () => {
	return (
		<nav className="flex items-center justify-between px-12 m-auto flex-wrap shadow-md bg-primary">
			<Link
				to="/about"
				className="block mt-1 text-black font-bold hover:text-black mr-4"
			>
				About
			</Link>
			<Link to="/">
				<h1 className="text-8xl tracking-tight m-3 pb-1 leading-none font-display text-black">
					SPACE OF THE DAY
				</h1>
			</Link>
			<Link
				to="/create"
				className="block mt-1 text-black hover:text-black mr-4"
			>
				<GrFormSearch title="search" size="2em" />
			</Link>
		</nav>
	)
}

export default Nav
