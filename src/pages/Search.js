import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import PostsList from '../components/PostsList'
import PageCounter from '../components/PageCounter'

const Search = ({ days, query }) => {
	const [page, setPage] = useState(1)
	const [filter, setFilter] = useState([])
	const [content, setContent] = useState([])
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		console.log(query)
		if (days) {
			const out = []
			days.forEach((day) => {
				console.log(day)
				if (day.title.toLowerCase().includes(query.toLowerCase())) {
					out.push(day)
				}
			})
			setFilter(out)
		}
	}, [query, days])

	useEffect(() => {
		let start = page * 9 - 9
		setContent(filter.length > 9 ? filter.slice(start, start + 9) : filter)
		setTotalPages(Math.ceil(filter.length / 9))
	}, [filter, page])

	return (
		<div className="pt-32">
			{days ? (
				<div className="p-6 py-12 max-w-6xl mx-auto">
					<div className="mb-3 flex items-center">
						<h2 className="text-3xl font-bold flex-grow font-body">Search</h2>
						<p className="font-bold">
							<PageCounter
								page={page}
								setPage={setPage}
								totalPages={totalPages}
							/>
						</p>
					</div>

					<PostsList content={content} animate={false} />

					<Pagination setPage={setPage} page={page} totalPages={totalPages} />
				</div>
			) : null}
		</div>
	)
}

export default Search
