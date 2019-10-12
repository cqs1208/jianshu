import React from 'react';
import { GlobalStyled } from  './style';
import { IconfontStyled } from  './statics/iconfont/iconfont';
import Header from './common/header/index';

function App() {
  return (
    <div >
        <Header />
        <IconfontStyled />
        <GlobalStyled />
    </div>
  );
}

export default App;
