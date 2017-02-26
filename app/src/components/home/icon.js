/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-21
 *  @describe  [首页-顶部导航图标]
 */

import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router'

const styles = {
  ul: {
      listStyle: 'none'
  },
  lis: {
      width: 60,
      height: 60,
      lineHeight: '60px',
      borderRadius: 30,
      fontSize: 15,
      fontFamily: '微软雅黑',
      color: '#fff',
      float: 'left',
      marginRight: 55,
      textAlign: 'center'
  },
  span: {
    width: '100%',
    color: '#0a81ca',
    display: 'block'
  }

}

class Icon extends Component{
  render(){
    var menu = this.props.menu
    return (
      <ul className='top-menu'>
      {
        menu.map( (menu, index) => {
          let id = menu.id
          return (
             <li style={styles.lis} key={index} className={menu.fontIcon}>
               <Link > <i className='iconfont' ></i><span style={styles.span}>{menu.name}</span> </Link>
             </li>
          )
        })
      }
      </ul>
    )
  }
}

export { Icon }