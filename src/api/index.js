const key = process.env.REACT_APP_API_KEY
const date = new Date()

export default {
	getMonth: async (month = date.getMonth() + 1) => {
		try {
			const data = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${date.getFullYear()}-${month - 1}-${date.getDate()}`
			)
			const json = await data.json()
			return json
		} catch (error) {
			console.log(error)
			return null
		}
	},
}
