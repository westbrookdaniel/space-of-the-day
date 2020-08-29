import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const PostsList = ({ content }) => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			<AnimatePresence exitBeforeEnter>
				{!content
					? null
					: content.map((day, i) => {
							console.log(i)
							return (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										duration: 0.3,
										delay: i / 50
									}}
									key={day.date}
									className="max-w-sm rounded overflow-hidden shadow-md bg-white"
								>
									<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2 mt-4">
											{day.title}
										</div>
										<div className="text-black text-base opacity-50 mb-1">
											{day.copyright}
										</div>
										<p className="text-black text-base">{day.explanation.substring(0, 100).trim()}...</p>
									</div>
									<div className="px-6 pb-4">
										<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
											{day.date}
										</span>
									</div>
								</motion.div>
							)
					  })}
			</AnimatePresence>
		</div>
	)
}

export default PostsList
