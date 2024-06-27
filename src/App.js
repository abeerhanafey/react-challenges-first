import './App.css';
import './Header.js';
import Header from './Header.js';
import Post from "./Post.js";
import Button from './Button.js';
import Footer from './Footer.js';
function App() {
  return (
    <div className="App">
      <Header />
      <div className={"content"}>
        <div className='posts'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
        <div className='btns'>
          <Button />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
