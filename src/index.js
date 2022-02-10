import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
class Main extends React.Component {
  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));