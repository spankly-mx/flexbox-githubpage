import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'The default value is'
}

ReactDOM.render(<App  cat={5} />, document.getElementById('app'));