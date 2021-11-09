import React, { useMemo, useState } from 'react';
import { PostList } from './components/PostList';
import { PostForm } from './components/UI/PostForm';
import { PostFilter } from './components/UI/PostFilter';
import './styles/App.css';
function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      console.log('хук отработал');
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Post List"
      />
    </div>
  );
}

export default App;
