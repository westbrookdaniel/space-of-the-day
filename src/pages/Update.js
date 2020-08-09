import React from 'react'
import UpdateForm from '../components/UpdateForm'
import { useLocation } from 'react-router-dom'

const Update = () => {
	let location = useLocation()
	let arr = location.pathname.split('/')
	let postId = arr[2]

	return (
		<div>
			<div className="mb-3 flex items-center">
				<h2 className="text-3xl font-bold flex-grow">
					Update Post {postId}
				</h2>
			</div>
			<UpdateForm postId={postId} />
		</div>
	)
}

export default Update
