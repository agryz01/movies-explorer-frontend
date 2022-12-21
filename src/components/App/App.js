// import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
