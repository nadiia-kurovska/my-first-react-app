import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import index from './components/Header';



class Header extends React.Component {
render(){
  const {titleText} = this.props;

  return (
    <header id='header' className='class' title={titleText}>
      <h1>My Site</h1>
      <nav>This is nav</nav>
    </header>
  );
}
}





const root = ReactDOM.createRoot(document.getElementById('root'));

const elem = React.createElement(Header, {titleText: 'how props can work'});

const counter1 = React.createElement(Counter);

const container = React.createElement(
  React.Fragment,
  {},
  elem,
  counter1,
  greeting1
)

root.render(container); //takes only one element

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
