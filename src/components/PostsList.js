import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Card from './Card'

const PostsList = ({ content, animate = true }) => {
	const cards = () =>
		!content
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
			  })

	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{animate ? (
				<AnimatePresence exitBeforeEnter>{cards()}</AnimatePresence>
			) : (
				cards()
			)}
		</div>
	)
}

export default PostsList
