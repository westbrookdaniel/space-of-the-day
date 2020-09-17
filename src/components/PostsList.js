import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Card from './Card'

const PostsList = ({ content }) => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			<AnimatePresence exitBeforeEnter>
				{!content
					? null
					: content.map((day, i) => {
							return (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										duration: 0.3,
										delay: i / 50,
									}}
									key={day.date}
								>
									<Card day={day} />
								</motion.div>
							)
					  })}
			</AnimatePresence>
		</div>
	)
}

export default PostsList
