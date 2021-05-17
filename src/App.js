import React from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Locate from './Components/Location/Locate'; 
import NewBlog from './Components/NewBlog/NewBlog';
import Blog from './Components/NewBlog/Blogs/Blog';
import Query from './Components/Query/Query';

function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/locations' component={Locate}/>
          <Route path="/blog" component={NewBlog} />
          <Route path='/blog_content' component={Blog} />
          <Route path='/book_lesson' component={Query} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
