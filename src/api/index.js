import { tempapi } from '../tempapi'

const key = process.env.REACT_APP_API_KEY
const date = new Date()

export default {
	getMonth: async (month = date.getMonth() + 1) => {
		try {
			const out = []
			const data = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${date.getFullYear()}-${
					month - 1
				}-${date.getDate()}`
			)
			const json = await data.json()
			json.forEach(item => {
				if (item.hdurl) {
					out.push(item)
				}
			});
			return out.reverse()
		} catch (error) {
			console.log(error)
			return null
		}
	},
	getDay: async (date) => {
		try {
			const data = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${date}`
			)
			const json = await data.json()
			return json[0]
		} catch (error) {
			console.log(error)
			return null
		}
	},
}
