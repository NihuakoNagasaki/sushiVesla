import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";

import MainPage from './routes/mainPage';
import GetAdaptiveSize from "./adaptiveContext/getAdaptiveContext";
import Header from './routes/header';
import Footer from './routes/footer';
import Wrapper from './components/wrapper';
import Baked from './routes/Baked';
import Fried from './routes/Fried';
import Sets from './routes/sets';
import Common from './routes/commonRolls';
import Napitki from './routes/napitki';
import PokeAndSalads from './routes/pokeAndSalads';


export const AdaptiveContext = React.createContext({})

function App() {
  const mobile = GetAdaptiveSize()
  
  const [arrayOfBaked, getArrayOfBaked] = useState(null)
  const [arrayOfCommon, getArrayOfCommon] = useState(null)
  const [arrayOfFried, getArrayOfFried] = useState(null)
  const [arrayOfSets, getArrayOfSets] = useState(null)
  const [arrayOfNapitki, getАrrayOfNapitki] = useState(null)
  const [arrayOfpokeAndSalads, getАrrayOfpokeAndSalads] = useState(null)

  if (typeof mobile === 'undefined') return null
  return (
    <AdaptiveContext.Provider value={{ mobile }}>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <MainPage />} />
          <Route exact path='/baked-rolls' render={() => <Baked arrayOfBaked={arrayOfBaked} getArrayOfBaked={getArrayOfBaked}/>} />
          <Route exact path='/fried-rolls' render={() => <Fried arrayOfFried={arrayOfFried} getArrayOfFried={getArrayOfFried} />} />
          <Route exact path='/sets' render={() => <Sets arrayOfSets={arrayOfSets} getArrayOfSets={getArrayOfSets} />} />
          <Route exact path='/rolls' render={() => <Common arrayOfCommon={arrayOfCommon} getArrayOfCommon={getArrayOfCommon} />} />
          <Route exact path='/napitki' render={() => <Napitki arrayOfNapitki={arrayOfNapitki} getАrrayOfNapitki={getАrrayOfNapitki} />} />
          <Route exact path='/salad' render={() => <PokeAndSalads arrayOfpokeAndSalads={arrayOfpokeAndSalads} getАrrayOfpokeAndSalads={getАrrayOfpokeAndSalads} />} />
        </Switch>
        <Footer />
      </Wrapper>
    </AdaptiveContext.Provider>
  );
}

export default App;
