import React from 'react';
import { Switch, Route } from "react-router-dom";

import MainPage from './routes/mainPage';
import TestPage from './routes/testPage';
import GetAdaptiveSize from "./adaptiveContext/getAdaptiveContext";
import Header from './routes/header';
import Footer from './routes/footer';
import Wrapper from './components/wrapper';


export const AdaptiveContext = React.createContext({})

function App() {
  const mobile = GetAdaptiveSize()

  if (typeof mobile === 'undefined') return null
  return (
    <AdaptiveContext.Provider value={{ mobile }}>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <MainPage />} />
          <Route exact path='/test' render={() => <TestPage />} />
        </Switch>
        <Footer />
      </Wrapper>
    </AdaptiveContext.Provider>
  );
}

export default App;
