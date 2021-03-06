import React from 'react'
import { motion } from 'framer-motion'

const Create = () => {
	return (
		<div className="p-6 py-12 max-w-6xl mx-auto pt-64">
			<div className="mb-3 flex items-center">
				<h2 className="text-3xl font-bold flex-grow">About</h2>
			</div>
			<div className="max-w-lg">
				<p className="mb-3">
					This app utilizes the NASA Astronomy of the Day API with React.
					Styling uses TailwindCSS, with animations done using Framer Motion.
					Have any questions? Just ask.
				</p>
				<p className="mb-3">
					For Copyright Information See:{' '}
					<a
						className="hover:underline"
						href="https://apod.nasa.gov"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://apod.nasa.gov
					</a>
				</p>
				<motion.a
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
					className="hover:underline"
					target="_blank"
					rel="noopener noreferrer"
					href="https://westbrookdaniel.com/"
				>
					<p>Made by Daniel Westbrook</p>
				</motion.a>
			</div>
		</div>
	)
}

export default Create
