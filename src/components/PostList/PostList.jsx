import React from 'react'
import Post from '../Post/Post'
import style from '../Post/post.module.css'


function PostList({ remove, posts, title }) {
    return (
        <div className={style['list']}>
            <h1>{title}</h1>
            {posts.map((post, index) => {
                return (
                    <div key={post.id}>
                        <Post remove={remove} postIndex={index + 1} post={post} key={post.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default PostList