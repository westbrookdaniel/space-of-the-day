import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import api from '../api'
import Buttons from '../components/Buttons'
import useHighRes from '../util/useHighRes'

const Single = (props) => {
	const [day, setDay] = useState()
	const [loading, setLoading] = useState(true)
	const { loadHighRes, src, isLoadingMore } = useHighRes(day)

	useEffect(() => {
		api.getDay(props.match.params.date).then((data) => setDay(data))
	}, [props.match.params.date])

	return (
		<div className="h-screen pt-40">
			<AnimatePresence>
				{day && (
					<motion.div
						key={0}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="min-h-full relative p-8 flex flex-col justify-center items-center"
					>
						<img
							className={`${
								loading ? 'opacity-0' : null
							} transition-opacity ease-in-out duration-200 mb-16 xl:flex-grow w-full md:w-auto`}
							style={{ maxHeight: '80vh' }}
							onLoad={() => {
								setLoading(false)
								loadHighRes()
							}}
							src={src}
							alt={day.title}
						/>
						{loading ? (
							<div class="flex justify-center flex-col space-y-8 absolute top-0 items-center">
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
						{isLoadingMore && <p className="mb-4">Loading High Resolution Image</p>}
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
