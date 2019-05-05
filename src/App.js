import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/dashboard/Home';
import ArticleDetails from './components/articles/ArticleDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateArticle from './components/articles/CreateArticle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/articles/:slug' component={ArticleDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateArticle} />
        </Switch>
      </div>    
    </BrowserRouter>
  );
}

export default App;
