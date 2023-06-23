import { useRef, useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';

import style from './app.module.css'
import Post from './components/Post/Post';
import PostList from './components/PostList/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';
import PostForm from './components/PostList/PostForm';
import MySelect from './components/UI/Select/MySelect';
import InputUnderLine from './components/UI/Input/InputUnderLine';
import { useInView } from 'react-intersection-observer';

function App() {
  const [value, setValue] = useState('')
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа1', body: 'дд3' },
    { id: 2, title: 'вв2', body: 'аа1' },
    { id: 3, title: 'дд3', body: 'вв2' }
  ])
  const [selectedSort, setSelectedSort] = useState()
  const [ref, inView, entry] = useInView({
    threshold: 1.0
  })
  // const refInputBody = useRef()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = sort => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const inputHandler = e => {
    setValue(e.target.value)
  }

  return (
    <div className={style['App']}>
      <Counter />
      <Input />
      <MySelect
        value={selectedSort}
        onChange={sortPost}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
        defaultValue={'Сортировка'}
      />
      <PostForm create={createPost} />
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Список потов' />
        : <div>Посты не найдены</div>
      }
    </div>
  );
}

export default App;
