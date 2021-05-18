import { createStore } from "redux";

const initialState = {
    isLogin: false
}

const counterReducer = ( state = initialState, action ) => {
    if(action.type === 'TOGGLE_LOGIN'){
        return {isLogin: !state.isLogin}
    }
    return state
}

const store = createStore(counterReducer)

export default store