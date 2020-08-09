import React from 'react'

const PostsList = ({ content }) => {
	return (
		
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{content.map((post) => {
					return (
						<div
							key={post.id}
							className="max-w-sm rounded overflow-hidden shadow-lg"
						>
							<div className="px-6 py-4">
								<div className="font-bold text-xl mb-2 mt-4">{post.title}</div>
								<p className="text-gray-700 text-base">{post.body}</p>
							</div>
							<div className="px-6 py-4">
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
									ID: {post.id}
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
									User ID: {post.userId}
								</span>
							</div>
						</div>
					)
				})}
			</div>
	)
}

export default PostsList
