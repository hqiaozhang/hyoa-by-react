import * as actionType from '../constants/actionType'
import api from '../reducers/notice'

export const loadNoticeList = () => {
  return {
    type: actionType.NOTICE_LIST,
    promise: api.getNoticeList()
  }
}