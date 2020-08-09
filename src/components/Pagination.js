import React from 'react'
import PageCounter from './PageCounter'

const Pagination = ({ posts, setPage, page, totalPages }) => {
	return (
		<div className="flex space-x-4 py-4 mt-6">
			<p className="mr-6 font-bold flex-grow">
				<PageCounter page={page} setPage={setPage} totalPages={totalPages} />
			</p>
			<button
				className={`hover:underline ${page === 1 ? 'text-gray-600' : null}`}
				onClick={() => {
					if (page !== 1) {
						setPage((p) => parseInt(p) - 1)
					}
				}}
			>
				Previous
			</button>
			<button
				className={`hover:underline ${
					page === totalPages ? 'text-gray-600' : null
				}`}
				onClick={() => {
					if (page !== totalPages) {
						setPage((p) => parseInt(p) + 1)
					}
				}}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination
