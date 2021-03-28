import React from 'react';


import css from './Layout.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <div className={css.Layout}>
        
        <main className={css.main}>
          {children}
        </main>
      </div>
    );
  }
}



Layout.defaultProps = {
  children: '',
};

export default Layout;
