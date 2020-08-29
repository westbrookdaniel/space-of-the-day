import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UpdateForm = ({ postId }) => {
	const [form, setForm] = useState({
		title: '',
		userId: '',
		body: '',
	})

	const handleSubmit = (e) => {
		let classes = e.target.classList
		e.preventDefault()

		classes.add('opacity-50')


		// fetch('https://jsonplaceholder.typicode.com/posts/1', {
		// 	method: 'PATCH',
		// 	body: JSON.stringify({
		// 	  title: 'foo'
		// 	}),
		// 	headers: {
		// 	  "Content-type": "application/json; charset=UTF-8"
		// 	}
		//   })
		//   .then(response => response.json())
		//   .then(json => console.log(json))
		

		let patchForm = {}
		Object.keys(form).forEach((key, index) => {
			if (!(form[key] === '' | form[key] === undefined)) {
				patchForm[key] = form[key]
			}
		});
		console.log(patchForm);


		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
			method: 'PATCH',
			body: JSON.stringify(patchForm),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
				classes.remove('opacity-50')
				document.querySelector(
					'#notify'
				).innerText = `Updated Post ${res.title}`
			})
			.catch((err) => {
				console.log(err)
				document.querySelector('#notify').innerText = `Failed Updating Post`
			})
	}

	function handleChange(e) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<form className="w-full max-w-sm" onSubmit={handleSubmit}>
			<div className="mb-6">
				<label className="block text-black font-bold md:mb-0 pr-4">
					Title
				</label>
				<input
					className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="text"
					placeholder="Interesting Title"
					onChange={handleChange}
					value={form.title}
					name="title"
				/>
			</div>
			<div className="mb-6">
				<label className="block text-black font-bold md:mb-0 pr-4">
					User ID
				</label>
				<input
					className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					type="number"
					placeholder="0"
					onChange={handleChange}
					value={form.userId}
					name="userId"
				/>
			</div>
			<div className="mb-6">
				<label className="block text-black font-bold md:mb-0 pr-4">
					Description
				</label>
				<textarea
					className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					placeholder="Your Post Description"
					onChange={handleChange}
					value={form.body}
					name="body"
				/>
			</div>
			<div className="">
				<button
					className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
					type="submit"
				>
					Update
				</button>
				<Link
					className="hover:text-black focus:shadow-outline focus:outline-none text-black font-bold ml-6"
					to="/"
				>
					Back
				</Link>
			</div>
			<p id="notify" className="mt-6"></p>
		</form>
	)
}

export default UpdateForm
