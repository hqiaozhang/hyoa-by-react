import React from 'react'
import { Component } from 'react'

const styles = {
  ul: {
      listStyle: 'none'
  },
  lis: {
      width: 60,
      height: 60,
      lineHeight: '60px',
      background: '#64bcf1',
      borderRadius: 30,
      fontSize: 15,
      fontFamily: '微软雅黑',
      color: '#fff',
      float: 'left',
      marginLeft: 38,
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
      <ul className='top-menu'>{
      menu.map( menu => {
        console.log(menu.font)
        return <li  style={styles.lis} key={menu.id} ><i className={menu.fontIcon} ></i><span style={styles.span}>{menu.name}</span></li>
      })}
      </ul>
    )
  }
}

export { Icon }