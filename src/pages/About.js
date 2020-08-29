import React from 'react'
import { motion } from 'framer-motion'

const Create = () => {
	return (
		<div>
			<div className="mb-3 flex items-center">
				<h2 className="text-3xl font-bold flex-grow">About</h2>
			</div>
			<div className="max-w-lg">
				<p className="mb-3">
					This React app is made using the JSONPlaceholder API, and uses create,
					read, update, and delete methods on posts.
				</p>
				<p className="mb-6">Styling is done using TailwindCSS.</p>
				<motion.a
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="hover:underline text-black"
					target="_blank"
					rel="noopener noreferrer"
					href="https://westbrookdaniel.com/"
				>
					Made by Daniel Westbrook
				</motion.a>
			</div>
		</div>
	)
}

export default Create
