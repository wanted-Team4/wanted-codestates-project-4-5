import { SET_POST } from "../actions/coordinate";

const initialState = {
    post: null
}

const posts = (state = initialState, action) => { //첫번째 인자는 기본값, 두번째 인자는 액션
    switch (action.type) {//action type으로 분기
        case SET_POST:
            return action.payload

        default:
            return state;
    }
}

export default posts;