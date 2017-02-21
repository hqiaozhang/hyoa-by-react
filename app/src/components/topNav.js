import React from 'react'
import { Component } from 'react'
import { Icon } from './icon'

const menu = [
  {
    name: '首页',
    fontIcon: 'icon-home iconfont',
    id: 1
  },{
    name: '公司公告',
    fontIcon: 'icon-jxpg iconfont',
    id: 2
  },{
    name: '我的流程',
    fontIcon: 'icon-kaoqin iconfont',
    id: 3
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

