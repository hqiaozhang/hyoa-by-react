/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [首页]
 */
// 引入样式
import style from  "../../public/style/index.css"
// 引入组件
import React from 'react'
import { Component } from 'react'
import { Left } from './left'
import { TopNav } from './topNav'
import { NewNotice } from './newNotice'

const noticeData = [
  {
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  },{
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  },{
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  },{
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  },{
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  }
]


class Main extends Component{
  render(){
    return (
      <div>
        <Left />
        <div className='right'>
          <div className='header'>
            <TopNav />
          </div>
          <div className='right-content'>
             <NewNotice noticeData = { noticeData } title='最新公告' className='new-list new-notice' />
             <NewNotice noticeData = { noticeData } title='最新图书' className='new-list new-books' />
          </div>
          
        </div>
      </div>

    )
  }
}

export { Main }

