const key = process.env.REACT_APP_API_KEY
const date = new Date('October 17, 2020 03:24:00')
// const date = new Date()

class apiClass {
	constructor() {
		this.savedMonth = null
	}

	getMonth = async (month = date.getMonth() + 1) => {
		try {
			if (this.savedMonth) {
				return this.savedMonth
			} else {
				const out = []
				const data = await fetch(
					`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${date.getFullYear()}-${
						month - 1
					}-${date.getDate()}&end_date=${date.getFullYear()}-${month}-${date.getDate()}`
				)
				const json = await data.json()
				json.forEach((item) => {
					if (item.hdurl) {
						out.push(item)
					}
				})
				const monthArr = out.reverse()
				this.savedMonth = monthArr
				return monthArr
			}
		} catch (error) {
			console.log(error)
			return null
		}
	}
	getDay = async (date) => {
		console.log(date)
		try {
			if (this.savedMonth) {
				return this.savedMonth.find((day) => day.date === date)
			} else {
				const data = await fetch(
					`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${date}`
				)
				const json = await data.json()
				return json[0]
			}
		} catch (error) {
			console.log(error)
			return null
		}
	}
}
const api = new apiClass()
export default api
