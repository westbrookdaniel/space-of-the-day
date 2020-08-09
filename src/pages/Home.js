import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import PostsList from '../components/PostsList'
import PageCounter from '../components/PageCounter'

const Home = () => {
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
			<div className="mb-3 flex items-center">
				<h2 className="text-3xl font-bold flex-grow">All Posts</h2>
				<p className="font-bold">
					<PageCounter page={page} setPage={setPage} totalPages={totalPages} />
				</p>
			</div>

			<PostsList content={content} />

			<Pagination
				posts={posts}
				setPage={setPage}
				page={page}
				totalPages={totalPages}
			/>
		</div>
	)
}

export default Home
