import { CHANGE_DEMO_ACTION , ASYNC_GET_DATA} from '../actions/homeAction';

let dataTree = {
  successMark: "项目已经启动",
  product_trends:[]
}

export function HomeReducer(state = dataTree, action) {
    switch (action.type) {
        case CHANGE_DEMO_ACTION://改变demoAction
            return Object.assign({}, state, {data: action.data});
        case ASYNC_GET_DATA:
            return Object.assign({}, state, {product_trends: action.data.product_trends||[]}); 
        default:
          return state
    }
}