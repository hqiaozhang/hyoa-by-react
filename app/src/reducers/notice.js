import { NOTICE_LIST } from '../constants/actionType'



const initialState = {
  noticeList: []
}

function getNoticeLits(state = initialState, action) {
  // 这里暂不处理任何 action，
  // 仅返回传入的 state。
  switch (action.type) {
    case NOTICE_LIST:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}