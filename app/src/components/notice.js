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
import { NoticePage } from './noticePage'

let lists = [
  {
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下。。。。 ',
    mark: true
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下。。。。 ',
    mark: true
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下。。。。 '
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下。。。。 '
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下。。。。 '
  },{
    title: '关于春节放假的通知',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下。。。。 '
  }
]

class Notice extends Component{
  render(){
    return (
      <div>
        <Left />
        <div className='right'>
          <NoticeList lists={lists}/> 
          <NoticePage />
        </div>
      </div>
    )
  }
}

export { Notice }