import React from 'react'

const Pagination = ({ posts, setPage, page, totalPages }) => {
    
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

	return (
		<div className="flex space-x-4 py-4 mt-6">
			<p className="mr-6 font-bold flex-grow">
				Page {page} of {totalPages}
			</p>
			<button
				className={`hover:underline ${page === 1 ? 'text-gray-600' : null}`}
				onClick={() => {
					if (page !== 1) {
                        setPage((p) => p - 1)
                        scrollTop()
					}
                }}
			>
				Previous
			</button>
			<button
				className={`hover:underline ${page === totalPages ? 'text-gray-600' : null}`}
				onClick={() => {
					if (page !== totalPages) {
                        setPage((p) => p + 1)
                        scrollTop()
					}
				}}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination
