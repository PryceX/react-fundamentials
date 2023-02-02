import './styles/App.css';
import { useState } from 'react';
import PostList from './Components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'TS', body: 'Cool' },
    { id: 3, title: 'Java', body: 'Shit' },
  ]);

  return (
    <div className="App">
      <form>
        <input></input>
      </form>
      <PostList posts={posts} title={'List of posts'}/>
    </div>
  );
}

export default App;
