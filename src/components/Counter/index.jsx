import React from "react";

class Counter extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        count: 0
      };
  
      this.add  = this.add.bind(this);
    }
    add (){
      //++this.state.count; //look up and finish
  
  
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
  