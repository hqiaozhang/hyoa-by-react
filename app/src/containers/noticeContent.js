/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [公司公告-分页]
 */
// 引入样式
import style from  "../../public/style/notice.css"
import React, { Component } from 'react'
import { Left } from '../components/left'
import { NoticeContentComponent } from '../components/notice/noticeContent'

class NoticeContent extends Component {
  render(){
    return (
      <div>
        <Left />
        <div className='right'>
          <NoticeContentComponent />
        </div>
      </div>
    )
  }
}

export { NoticeContent }