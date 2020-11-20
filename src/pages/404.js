import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = (props) => {
	return (
		<div className="h-screen pt-40 overflow-hidden">
			<motion.div
				key={0}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="h-full relative p-8 flex flex-col justify-center items-center"
			>
				<h2 className="text-2xl">Page not Found</h2>
				<p>The page you are looking for could not be found.</p>
				<Link to="/" className="focus:outline-none">
					<button className="mt-8 w-32 focus:outline-none inline-block bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 ease-in-out text-black px-3 py-2 text-sm font-semibold">
						Home
					</button>
				</Link>
			</motion.div>
		</div>
	)
}

export default Error
