import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const PostsList = ({ content }) => {
	const [loading, setLoading] = useState(false)

	const handleDelete = (e) => {
		const classes = e.target.classList
		if (loading) {
			return
		}
		console.log(e.target.id)
		setLoading(true)
		classes.add('opacity-50')

		fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(`Success: ${JSON.stringify(res)}`)
				setLoading(false)
				classes.remove('opacity-50')
			})
			.catch((err) => {
				console.log(err)
				setLoading(false)
				classes.remove('opacity-50')
			})
	}

	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			<AnimatePresence exitBeforeEnter>
			{content.map((post) => {
				console.log();
				return (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, delay: (post.id - content[0].id) / 20 }}
						key={post.id}
						className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
					>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2 mt-4">{post.title}</div>
							<p className="text-gray-700 text-base">{post.body}</p>
						</div>
						<div className="px-6 pb-4">
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								ID: {post.id}
							</span>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								User ID: {post.userId}
							</span>
						</div>

						<div className="px-6 pb-6">
							<button
								id={post.id}
								className="inline-block bg-gray-500 hover:bg-gray-400 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2"
								onClick={handleDelete}
							>
								Remove
							</button>
							<Link
								className="inline-block bg-gray-500 hover:bg-gray-400 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2"
								to={`/update/${post.id}`}
							>
								Update
							</Link>
						</div>
					</motion.div>
				)
			})}
			</AnimatePresence>
		</div>
	)
}

export default PostsList
