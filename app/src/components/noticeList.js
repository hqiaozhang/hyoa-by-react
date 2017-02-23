/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-21
 *  @describe  [公司公告-右边列表]
 */

import React from 'react'
import { Component } from 'react'

class NoticeList extends Component{
  render(){
    return (
        <div className='notice-right'>
          <h2>公司公告</h2>
          <ul className='notice-list'>
              <li>
                <h4>关于春节放假的通知</h4>
                <span className='time'>2017-01-07</span>
                <p>为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如下。。。。</p>
              </li>
          </ul>
        </div>
    )
  }
}

export { NoticeList }
