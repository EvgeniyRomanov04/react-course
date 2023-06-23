import React, { useState } from 'react'
import MyInput from '../UI/Input/MyInput'
import MyButton from '../UI/Button/MyButton'

function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }
    return (
        <form>
            <MyInput
                // ref={refInputBody}
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='Название поста'
            />
            <MyInput
                type='text'
                placeholder='Содержание поста'
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm