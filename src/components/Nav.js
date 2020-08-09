import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	const [hidden, setHidden] = useState(true)

	return (
		<nav className="flex items-center justify-between flex-wrap p-6 shadow-lg bg-white">
			<div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
				<Link to="/">
					<h1 className="font-semibold text-xl tracking-tight">
						Placeholder CRUD
					</h1>
				</Link>
			</div>
			<div className="block lg:hidden">
				<button
					onClick={() => {
						setHidden((h) => !h)
					}}
					className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-400 hover:text-gray-500 hover:border-gray-500"
				>
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div
				className={`w-full ${
					hidden ? 'hidden' : null
				} lg:block lg:flex flex-grow lg:items-center lg:w-auto`}
			>
				<div>
					<Link
						to="/create"
						className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4"
					>
						Create
					</Link>
					<Link
						to="/about"
						className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-500 mr-4"
					>
						About
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Nav
