import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrFormSearch } from 'react-icons/gr'
import { motion } from 'framer-motion'

const Nav = () => {
	return (
		<motion.header
			className="fixed w-full z-50 bg-primary"
			initial={{ height: '100vh', transition: { duration: 0.7, ease: "easeInOut" } }}
			animate={{ height: 'auto', transition: { delay: 0.3, duration: 0.7, ease: "easeInOut" } }}
			exit={{ height: '100vh', transition: { duration: 0.7, ease: "easeInOut" } }}
		>
			<nav className="flex items-center justify-between px-12 m-auto flex-wrap">
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
		</motion.header>
	)
}

export default Nav
