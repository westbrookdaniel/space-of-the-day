import React from 'react'
import CreateForm from '../components/CreateForm'

const Create = () => {

	return (
		<div>
			<div className='mb-3 flex items-center'>
				<h2 className="text-3xl font-bold flex-grow">Create Post</h2>
			</div>
			<CreateForm />
		</div>
	)
}

export default Create
