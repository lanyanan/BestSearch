'use strict';
/**
 * 公共store，建议所有路由下reducer都在此文件进行注册合并
 * @type {store}
 */

import { combineReducers } from 'redux'
import { HomeReducer } from "./homeReducer";

const Store = combineReducers({
  HomeReducer ,        //种子项目的demoAction  
})

export default Store
