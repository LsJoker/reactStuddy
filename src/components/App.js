import React from 'react';
// import logo from './logo.svg';
import '../day1.css';

/**
 * 1.新建一个组件Day1
 * 2.state传值
 * 3.className使用
 * 4.htmlFor
 * 5.style={{'color':'red';}}
 * 6.引入图片用import或者src={require(url)},远程图片src=url
 * 7.循环数据 
 * 8.事件方法，onClick
 * this指向当前组件this.getData.bind(this)
 * ,构造函数中执行this.getData.bind(this),
 * 函数用箭头函数
 * 9.改变state的值
 * this.setState({
 * 
 * })
 * 10.事件函数传参this.getData.bind(this，c参数)
 */
constructor(){

}
render{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
