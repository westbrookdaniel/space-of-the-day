import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

const PostsList = () => {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)
	const [content, setContent] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((res) => {
				setPosts(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	useEffect(() => {
		let start = page * 9 - 9

		if (posts.length > 9) {
			setContent(posts.slice(start, start + 9))
		}
	}, [posts, page])

	let totalPages = Math.ceil(posts.length / 9)

	return (
		<div>
			<div className='mb-3 flex items-center'>
				<h2 className="text-3xl font-bold flex-grow">All Posts</h2>
				<p className="font-bold">Page {page} of {totalPages}</p>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{content.map((post) => {
					return (
						<div
							key={post.id}
							className="max-w-sm rounded overflow-hidden shadow-lg"
						>
							<div className="px-6 py-4">
								<div className="font-bold text-xl mb-2 mt-4">{post.title}</div>
								<p className="text-gray-700 text-base">{post.body}</p>
							</div>
							<div className="px-6 py-4">
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
									ID: {post.id}
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
									User ID: {post.userId}
								</span>
							</div>
						</div>
					)
				})}
			</div>
			<Pagination
				posts={posts}
				setPage={setPage}
				page={page}
				totalPages={totalPages}
			/>
		</div>
	)
}

export default PostsList
