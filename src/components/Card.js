import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import { Link } from 'react-router-dom'

export default function Card({ day }) {
	const [loading, setLoading] = useState(true)
	const [isDownloading, setIsDownloading] = useState(false)

	const handleDownload = async () => {
		setIsDownloading(true)
		const data = await fetch(`https://cors-anywhere.herokuapp.com/${day.hdurl}`)
		const blob = await data.blob()
		saveAs(blob, `${day.title}.jpg`)
		setIsDownloading(false)
	}

	return (
		<div className="max-w-sm overflow-hidden shadow-md h-full flex py-4 flex-col">
			<div className="relative">
				<span className="absolute top-0 right-0 bg-black px-3 py-2 text-sm font-semibold">
					{day.date}
				</span>
				<img
					className={`h-64 ${
						loading ? 'opacity-0' : null
					} transition-opacity ease-in-out duration-200 w-full object-cover`}
					onLoad={() => {
						setLoading(false)
					}}
					src={day.url}
					alt={day.title}
				/>
			</div>

			<div className="px-3 pt-2 pb-5 flex-grow">
				<div className="font-bold text-xl mb-1 mt-4">{day.title}</div>
				<div className="text-base opacity-50">{day.copyright}</div>
			</div>
			<div className="px-3 flex pb-4">
				<button
					onClick={handleDownload}
					className="w-32 focus:outline-none inline-block bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 ease-in-out text-black px-3 py-2 text-sm font-semibold mr-2"
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
				<button className="focus:outline-none inline-block bg-white hover:bg-gray-400 active:bg-gray-500 transition-colors duration-200 ease-in-out text-black px-3 py-2 text-sm font-semibold mr-2">
					Details
				</button>
			</div>
		</div>
	)
}
