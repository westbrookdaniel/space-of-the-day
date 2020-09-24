import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import { Link } from 'react-router-dom'

const Buttons = ({ day, details = true, ...props }) => {
	const [isDownloading, setIsDownloading] = useState(false)

	const handleDownload = async () => {
		setIsDownloading(true)
		const data = await fetch(`https://cors-anywhere.herokuapp.com/${day.hdurl}`)
		const blob = await data.blob()
		saveAs(blob, `${day.title}.jpg`)
		setIsDownloading(false)
	}

	return (
		<div className="px-3 flex pb-4" {...props}>
			<button
				onClick={handleDownload}
				className={`w-32 focus:outline-none inline-block bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 ease-in-out text-black px-3 py-2 text-sm font-semibold ${
					details && 'mr-2'
				}`}
			>
				{isDownloading ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="animate-spin w-5 m-auto"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				) : (
					<p>Download</p>
				)}
			</button>
			{details && (
				<Link to={`/day/${day.date}`} className="focus:outline-none">
					<button className="focus:outline-none inline-block bg-white hover:bg-gray-400 active:bg-gray-500 transition-colors duration-200 ease-in-out text-black px-4 py-2 text-sm font-semibold mr-2">
						Details
					</button>
				</Link>
			)}
		</div>
	)
}

export default Buttons
