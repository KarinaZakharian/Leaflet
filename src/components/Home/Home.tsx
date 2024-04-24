import React from 'react';

import './Home.scss';
import Header from '../Header/Header';
import Board from '../Board/Board';
import Main from '../Main/Main';


function Home() {
  return (
    <div>
      <Header />
  <Board />
  <Main/>
    </div>
  );
}

export default Home;
