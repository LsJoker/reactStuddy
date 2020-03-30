import React,{Component} from 'react';
// import logo from './logo.svg';
import '../assets/day1.css';
import logo from '../../src/logo.svg'

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
class Day1 extends Component {
	constructor(props){
		super(props);
		this.state = {
			msg:'子组件',
			colorClass:'red',
			arr1:['1','2','3']
		}
		this.getData3 = this.getData3.bind(this)
	}
	getData1 () {
		this.setState({
			msg:'111'
		})
	}
	getData2 = (str)=>{
		this.setState({
			msg:str
		})
	}
	getData3(){
		this.setState({
			msg:'333'
		})
	}
	render(){
		let arr1Doc = this.state.arr1.map(function(val,key) {
			return <h2 key={key}>{val}</h2>
		})
	  return (
		
		// let listResult=this.state.list.map(function(value,key){

		// 	return <li key={key}>{value}</li>
		// })
		<div>
			<h2 onClick={this.getData1.bind(this)}>{this.state.msg}</h2>
			<h2 onClick={this.getData2.bind(this,'123')} className={this.state.colorClass}>{this.state.msg}</h2>
			<label htmlFor='userName'>用户名</label><input id="userName" />
			<h2 onClick={this.getData3} style={{'color':this.state.colorClass}}>{this.state.msg}</h2>
			<img src={logo} style={{'width':'100px','height':'100px'}}/>
			<img src={require('../../src/logo.svg')} style={{'width':'100px','height':'100px'}}/>
			{arr1Doc}
			{
				this.state.arr1.map(function(val,key) {
					return <h2 key={key}>{val}</h2>
				})
			}
		</div>
	  );
	}
}


export default Day1;
