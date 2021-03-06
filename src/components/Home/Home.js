import React from 'react';

import Search from '../Search/Search';

import css from './Home.css';

const Home = () => (
  <div>
    <div className={css.Home}>
      <h2 className={css.greeting__h2}>Добро пожаловать!</h2>
      <p>
        Данное приложение, в табличном виде отображает
        <em> forks </em>
        введенного в поисковую строку репозитория.
      </p>
      <p>
        Для ввода используется имя репозитория вида
        <em> owner/repositoryName</em>
        .
      </p>
    </div>
    <Search />
  </div>
);



export default Home;
