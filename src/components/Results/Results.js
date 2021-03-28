import React from 'react';

import { connect } from 'react-redux';


import Search from '../Search/Search';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

const Results = (props) => {
  const { error404, isInputValid, loading } = props;

  const messageOn404 = (
    <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
      <p style={{ marginBottom: '.5rem' }}>Ничего не удалось найти.</p>
      <p>
        Возможно такого пользователя(репозитория) не существует или допущена
        ошибка при вводе имени пользователя(репозитория).
      </p>
    </div>);

  const messageInputNotValid = <p>Невалидный ввод</p>;

  let result;

  if (error404 && isInputValid) { result = messageOn404; }
  if (!error404 && isInputValid) { result = <Table />; }
  if (!isInputValid) { result = messageInputNotValid; }
  if (loading) { result = <Loader />; }

  return (
    <div>
      <Search />
      {result}
      <Pagination />
    </div>
  );
};




const mapStateToProps = state => ({
  error404: state.remoteIterations.error404,
  isInputValid: state.main.isInputValid,
  loading: state.main.loading,
});

export default connect(mapStateToProps)(Results);
