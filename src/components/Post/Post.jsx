import React from 'react'
import style from './post.module.css'
import MyButton from '../UI/Button/MyButton'

function Post({ remove, ...props }) {
  return (
    <div className={style['post']}>
      <div className={style['post__content']}>
        <strong>{props.postIndex}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <MyButton onClick={() => { remove(props.post) }}>Delete</MyButton>
    </div>
  )
}

export default Post