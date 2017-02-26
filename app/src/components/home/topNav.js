/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-21
 *  @describe  [首页-顶部导航]
 */


import React from 'react'
import { Component } from 'react'
import { Icon } from './icon'

const menu = [
  {
    name: '首页',
    fontIcon: 'icon-home'
  },{
    name: '公司公告',
    fontIcon: 'icon-notice'
  },{
    name: '我的流程',
    fontIcon: 'icon-procedure'
  },{
    name: '信息查询',
    fontIcon: 'icon-info'
  },{
    name: '个人绩效',
    fontIcon: 'icon-performance'
  },{
    name: '项目管理',
    fontIcon: 'icon-project'
  },{
    name: '考勤管理',
    fontIcon: 'icon-work'
  },{
    name: '图书馆',
    fontIcon: 'icon-books'

  }
]


class TopNav extends Component{
  render(){
    return(
     <Icon menu={menu} />
    )
  }
}

export { TopNav }

