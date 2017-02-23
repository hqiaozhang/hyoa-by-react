/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [最新公告]
 */

import React from 'react'
import { Component } from 'react'



class NewNotice extends Component{
  render(){
    let noticeData = this.props.noticeData
    var title = this.props.title
    var className = this.props.className

    return (
      <div className={className}>
        <div className='title'><i className='iconfont'></i>{title}<span>更多>></span></div>
        <div>
        <ul className='content'>
        {
          noticeData.map( data => {
            return <li>{data.title}<span>{data.time}</span></li>
          })
        }
         </ul>
        </div>
      </div>
    )
  }
}





export { NewNotice }

