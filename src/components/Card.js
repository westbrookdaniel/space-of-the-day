import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Card({ day }) {
	const [loading, setLoading] = useState(true)

	return (
		<div className="max-w-sm overflow-hidden shadow-md h-full flex py-4 flex-col">
			<div className="relative">
				<span className="absolute top-0 right-0 bg-black px-3 py-2 text-sm font-semibold">
					{day.date}
				</span>
				<img
					className={`h-64 ${loading ? 'opacity-0' : null} transition-opacity ease-in-out duration-200 w-full object-cover`}
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
				{/* <p className="text-base">{day.explanation.substring(0, 100).trim()}...</p> */}
			</div>
			<div className="px-3 pb-4">
				<button className="inline-block bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 ease-in-out text-black px-3 py-2 text-sm font-semibold mr-2">
					Download
				</button>
				<button className="inline-block bg-white hover:bg-gray-400 active:bg-gray-500 transition-colors duration-200 ease-in-out text-black px-3 py-2 text-sm font-semibold mr-2">
					Details
				</button>
			</div>
		</div>
	)
}
