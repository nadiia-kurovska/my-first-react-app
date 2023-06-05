import React from "react";

class Greeting extends React.Component {
    render(){
      const {name} = this.props;
      return <p>Hello {name}!</p>
    }
  }
  
  
  // const greeting1 = React.createElement(Greeting, { name: 'Test'})
  // const greeting1 = <Greeting name='Test'></Greeting>;
  const greeting1 = <Greeting name='Test'/>; //possible if there is no children
  