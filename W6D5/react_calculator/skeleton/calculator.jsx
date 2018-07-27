import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {num1: "", num2: "", result: 0};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.reset = this.reset.bind(this);
  }

  //your code here
  reset(event) {
    event.preventDefault();
    this.setState({num1: ""});
    this.setState({num2: ""});
    this.setState({result: 0});
  }

  setNum1(event) {
    event.preventDefault();
    const num1 = +event.target.value;
    this.setState({num1})
  }
  setNum2(event) {
    event.preventDefault();
    const num2 = +event.target.value;
    this.setState({num2})
  }

  add(e) {
    e.preventDefault();
    this.setState({
      result: this.state.num1 + this.state.num2
    });
  }

  minus(e) {
    e.preventDefault();
    this.setState({
      result: this.state.num1 - this.state.num2
    });
  }

  multiply(e) {
    e.preventDefault();
    this.setState({
      result: this.state.num1 * this.state.num2
    });
  }

  divide(e) {
    e.preventDefault();
    this.setState({
      result: this.state.num1 / this.state.num2
    });
  }

  render(){
    const { setNum1, setNum2, reset, add, minus, multiply, divide } = this;
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>Hello World</h1>

        <h1>{result}</h1>
        <input onChange={setNum1} value={num1}></input>
        <input onChange={setNum2} value={num2}></input>
        <button onClick={reset}>clear</button>
        <br />
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
    );
  }

}

export default Calculator;
