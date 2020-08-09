import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	const [hidden, setHidden] = useState(true)

	return (
		<nav className="flex items-center justify-between flex-wrap bg-orange-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
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
					className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white"
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
						className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
					>
						Create
					</Link>
					<Link
						to="/about"
						className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4"
					>
						About
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Nav
