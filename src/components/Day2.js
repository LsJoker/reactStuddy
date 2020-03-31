import React,{Component} from 'react';
// import logo from './logo.svg';
import '../assets/day1.css';
import logo from '../../src/logo.svg'

/**
 * 1.event.target
 * 2.监听表单改变事件，在改变事件里面获取表单输入的值，把获取的值赋给state，点击按钮获取state理的值
 * 3.ref获取dom值改state，this.refs.domId
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
