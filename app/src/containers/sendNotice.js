/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [公司公告-分页]
 */
// 引入样式
import style from  "../../public/style/sendNotice.css";
import React, { Component } from 'react'
import { Left } from '../components/left'
import { SendNoticeComponent } from '../components/notice/sendNotice'

class SendNotice extends Component {
  render(){
    return (
      <div>
        <Left />
        <div className='right'>
          <SendNoticeComponent />
        </div>
      </div>
    )
  }
}

export { SendNotice }