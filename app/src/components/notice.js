/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [公司公告]
 */
// 引入样式
import style from  "../../public/style/notice.css";
// 引入组件
import React from 'react'
import { Component } from 'react'
import { Left } from './left'
import { NoticeList } from './noticeList'

class Notice extends Component{
  render(){
    return (
      <div>
        <Left />
        <div className='right'>
          <NoticeList /> 
        </div>
      </div>
    )
  }
}

export { Notice }