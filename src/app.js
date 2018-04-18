import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'; // 新增

const App = () => {
  return (
	<div>
  		<p>这是一个测试文件！</p>
  		<p>动态更新哦！</p>
  		<p>好棒哦！！</p>
	</div>
  	);
};
export default hot(module)(App);
ReactDOM.render(<App />, document.getElementById("app"));
