import React from "react";
import './style.css';

class Greeting extends React.Component {
    render(){
      const {name} = this.props;
      return <p className="greetingText">Hello {!name ? 'Guest' : name}!</p>
    }
  }
  
  
  // const greeting1 = React.createElement(Greeting, { name: 'Test'})
  // const greeting1 = <Greeting name='Test'></Greeting>;
  //const greeting1 = <Greeting name='Test'/>; //possible if there is no children
  
  export default Greeting;