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
    fontIcon: 'icon-home',
    id: 1
  },{
    name: '公司公告',
    fontIcon: 'icon-notice',
    id: 2
  },{
    name: '我的流程',
    fontIcon: 'icon-procedure',
    id: 3
  },{
    name: '信息查询',
    fontIcon: 'icon-info',
    id: 4
  },{
    name: '个人绩效',
    fontIcon: 'icon-performance',
    id: 5
  },{
    name: '项目管理',
    fontIcon: 'icon-project',
    id: 6
  },{
    name: '考勤管理',
    fontIcon: 'icon-work',
    id: 7
  },{
    name: '图书馆',
    fontIcon: 'icon-books',
    id: 8

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

