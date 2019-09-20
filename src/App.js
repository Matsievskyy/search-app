import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchPage from './containers/SearchPage/SearchPage';
import ResultPage from './containers/ResultPage/ResultPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SearchPage} />
      <Route path="/result" component={ResultPage} />
    </BrowserRouter>

  );
}

export default App;
