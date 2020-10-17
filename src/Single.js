import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import api from './api'
import Buttons from './components/Buttons'

const Single = (props) => {
	const [day, setDay] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		api.getDay(props.match.params.date).then((data) => setDay(data))
	}, [props.match.params.date])

	return (
		<div className="h-screen pt-40 overflow-hidden">
			<AnimatePresence>
				{day && (
					<motion.div
						key={0}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="h-full relative p-8 flex flex-col justify-center items-center"
					>
						<img
							className={`${
								loading ? 'opacity-0' : null
							} transition-opacity ease-in-out duration-200 mb-16 xl:flex-grow w-full md:w-auto`}
							onLoad={() => {
								setLoading(false)
							}}
							src={day.hdurl}
							alt={day.title}
						/>
						{loading ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="animate-spin w-10 m-auto absolute top-0"
							>
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
							</svg>
							
						) : null}
						<h2 className="text-2xl">{day.title}</h2>
						<p>{day.date}</p>
						<Buttons day={day} details={false} className="mt-8" />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Single
