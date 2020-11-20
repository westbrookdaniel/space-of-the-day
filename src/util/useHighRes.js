import { useEffect, useState } from 'react'

const useHighRes = (day) => {
	const [currentSrc, setCurrentSrc] = useState(null)
	const [isLoadingMore, setIsLoadingMore] = useState(false)

	useEffect(() => {
		if (day) {
			setCurrentSrc(day?.url)
		}
	}, [day])

	const loadHighRes = () => {
		setIsLoadingMore(true)
		if (day) {
			const img = new Image()
			img.addEventListener('load', () => {
				setIsLoadingMore(false)
				setCurrentSrc(img.src)
			})
			img.src = day?.hdurl
		}
	}

	return {
		loadHighRes,
		src: currentSrc,
		isLoadingMore,
	}
}

export default useHighRes
