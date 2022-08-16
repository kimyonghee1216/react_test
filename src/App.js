import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Sample from './Sample';

function App() {
  var a = 10 + 10
  console.log(a)
  var name = 'MyName'
  console.log('안녕하세요'+name)
  const text = <h1>React Project, {10 * 20}</h1>
  function add10(num){
    return num + 10
  }
  function handleClickEvent(event){
    alert(event.target.textContent)
  }
  const customStyle={
    color:'red',textAlign:'center'
  }
  class MyTag extends Component{
    render() {
      return (
        <div>
          Hello, {this.props.name}
        </div>
      );
    }
  }
  return (
    <>
      <h1 style={customStyle}>Main Title</h1>
      <h2 style={{color:'blue',backgroundColor:'yellow'}}>Sub Title</h2>
      <div>
        {a}{text}
      </div>
      <Sample />
      <MyTag name="Kim" />
      <h1 className='title' onClick={handleClickEvent}>add10함수결과: {add10(3)}</h1>
    </>
  );
}

export default App;
