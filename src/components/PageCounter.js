import React from 'react'

const PageCounter = ({ setPage, page, totalPages }) => {
	return (
		<>
			Page{' '}
			<input
				className="font-bold border border-gray-800 bg-black rounded px-1 w-12"
				type="number"
				value={page}
				onChange={(e) => {
                    console.log(e.target.value);
                    if (!((e.target.value < 1)| (e.target.value > totalPages)) | e.target.value === '') {
                        setPage(e.target.value)
                    }
				}}
			/>{' '}
			of {totalPages}
		</>
	)
}

export default PageCounter
