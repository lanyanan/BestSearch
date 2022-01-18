import React from 'react'
import { render } from 'react-dom'
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import './css/style.css';
import store from './js/store/store';
import Rout from './js/router/router';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';



//等DOM加载完成
//这种是hash值改变的
document.addEventListener('DOMContentLoaded', ()=>{
	render((   
		<Provider store={store}>
	        <Rout></Rout>
	  	</Provider>		
	), document.getElementById('root'))
});
