import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/headerHighResolution';
import MainPage from './routes/mainPage';
import TestPage from './routes/testPage';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' render={() => <MainPage />} />
      <Route exact path='/test' render={() => <TestPage />} />
    </Switch>
    </>
  );
}

export default App;
