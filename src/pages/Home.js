import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import PostsList from '../components/PostsList'
import PageCounter from '../components/PageCounter'
import useHighRes from '../util/useHighRes'

const Home = ({ days }) => {
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [content, setContent] = useState([])
	const [totalPages, setTotalPages] = useState(0)
	const [heroDay, setHeroDay] = useState(null)
	const { loadHighRes, src } = useHighRes(heroDay)

	useEffect(() => {
		if (Array.isArray(days)) {
			setHeroDay(days[0])
		}
	}, [days])

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
			<div className="h-screen">
				<img
					className={`${
						loading ? 'opacity-0 absolute' : 'opacity-1'
					} transition-opacity ease-in-out duration-200 w-full h-full object-cover`}
					onLoad={() => {
						setLoading(false)
						loadHighRes()
					}}
					src={days && src}
					alt={days ? days[0]?.title : 'Loading'}
				/>

				{loading ? (
					<div class="flex justify-center flex-col space-y-8 items-center h-screen">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="animate-spin w-10"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
						<p>Loading Image</p>
					</div>
				) : null}
			</div>
			{days ? (
				<div className="p-6 py-12 max-w-6xl mx-auto">
					<div className="mb-3 flex items-center">
						<h2 className="text-3xl font-bold flex-grow font-body">
							This Month's Images
						</h2>
						<p className="font-bold hidden lg:block">
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
