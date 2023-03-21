import { Routes, Route } from 'react-router-dom';
import { PostList } from "./components/PostLists";

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<h1>POST</h1>} />
      </Routes>
    </div>
  )
}

export default App;
