import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import PostsList from '../components/PostsList'
import PageCounter from '../components/PageCounter'
import api from '../api'
import useLocalStorage from '../util/useLocalStorage'

const Home = () => {
	const [page, setPage] = useState(1)
	const [content, setContent] = useState([])
	const [days, setDays] = useState()
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		api.getMonth().then((res) => setDays(res))
	}, [])

	// useEffect(() => {
	// 	console.log(days)
	// }, [days])

	useEffect(() => {
		let start = page * 9 - 9

		if (days) {
			if (days.length > 9) {
				setContent(days.slice(start, start + 9))
			}

			setTotalPages(Math.ceil(days.length / 9))
		}
	}, [days, page])

	return (
		<div>
			<div
				className={`h-screen bg-cover ${days && 'd-grid'}`}
				style={{ backgroundImage: `url("${days ? days[0]?.url : null}")` }}
			>
				{days ? null : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="animate-spin w-10 m-auto h-screen"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				)}
			</div>
			{days ? (
				<div className="p-6 py-12 max-w-6xl mx-auto">
					<div className="mb-3 flex items-center">
						<h2 className="text-3xl font-bold flex-grow font-body">
							Previous Photos
						</h2>
						<p className="font-bold">
							<PageCounter
								page={page}
								setPage={setPage}
								totalPages={totalPages}
							/>
						</p>
					</div>

					<PostsList content={content} />

					<Pagination setPage={setPage} page={page} totalPages={totalPages} />
				</div>
			) : null}
		</div>
	)
}

export default Home
