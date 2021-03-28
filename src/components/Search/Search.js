import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions/actions';

import css from './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: false,
      isTouched: false,
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const {
      onSubmit, inputValid, notValidInput, loadStart, history,
    } = this.props;
    const {
      isValid, value,
    } = this.state;

    let path = '';

    if (isValid) {
      loadStart();
      history.push('/results'); // переместиться на страницу /results
      inputValid(); // меняем редаксовский state
      path = `repos/${value}/forks`;
      onSubmit(path, this.getTargetRepoName(value));
    } else { // не валидный ввод
      notValidInput(); // меняем редаксовский state
      history.push('/results');
    }
  };

  handleChange = (event) => {
    const valid = this.checkValidity(event.target.value);
    this.setState({
      value: event.target.value,
      isTouched: true,
      isValid: valid,
    });
  }

  checkValidity = (str) => {
    const regexp = /^\/|\/.*\/| |[а-яА-ЯёЁ]|[:;?@&=+$,]|\/$/ig;
  

    const check = str.match(regexp);

  
    const oneslash = str.match(/\//g);

    return !check && !!oneslash; 
  };

  getTargetRepoName = value => (
    
    value.substr(value.indexOf('/') + 1)
  );

  render() {
    const { value, isValid, isTouched } = this.state;
    const inputCssClasses = [css.input];

    if (isTouched && !isValid) {
      inputCssClasses.push(css.input__warn);
    }

    return (
      <form className={css.Search} onSubmit={this.submitHandler}>
        <label className={css.label} htmlFor="searchRequest">
          <input id="searchRequest" type="text" className={inputCssClasses.join(' ')} value={value} placeholder="Введите имя репозитория вида owner/repositoryName" onChange={this.handleChange} />
          <span className={css.label__hint}>Введите имя репозитория вида owner/repositoryName</span>
        </label>
      </form>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  onSubmit: (path, targetRepoName) => dispatch(actions.submitInput(path, targetRepoName)),
  inputValid: () => dispatch(actions.validInput()),
  notValidInput: () => dispatch(actions.notValidInput()),
  loadStart: () => dispatch(actions.loadStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(Search));
