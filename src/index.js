import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// class Header extends React.Component {
  
//   render(){
//     const {titleText} = this.props;

//     const h1 = React.createElement('h1', {}, 'My Site');

//     const nav = React.cloneElement('nav', {}, 'This is nav');
    
//     return React.createElement(
//       'header',
//       {id: 'header', className: 'class', title: this.props.titleText},
//       'this is a header',
//       h1,
//       nav
//     )
//   }
// }

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.add  = this.add.bind(this);
  }
  add (){
    //++this.state.count; //
    

  }

  subtract = () => {
    --this.state.count;
  }

  render() {
    const { count } = this.state;

    const p = React.createElement('p', {}, `Count is: ${count}`);
    const add = React.createElement('button', {onClick : this.add}, 'Add');
    const subtract = React.createElement('button', {onClick: this.subtract}, 'Subtract');

    const fragment = React.createElement(React.Fragment, null, p, add, subtract)

    return fragment;
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));

// const elem = React.createElement(Header, {titleText: 'how props can work'});

const counter1 = React.createElement(Counter);

const container = React.createElement(
  React.Fragment,
  {},
  // elem,
  counter1
)

root.render(container); //takes only one element

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
