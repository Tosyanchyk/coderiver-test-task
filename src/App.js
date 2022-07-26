import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header'

import s from './App.module.sass'

export default function App() {
  return (<div className={s.page} >
    <div className={s.sidebar}>
      <Sidebar />
    </div>

    <div className={s.content}>
      <Header />
    </div>
  </div>
  );
}

