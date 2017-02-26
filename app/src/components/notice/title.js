
import React, { Component } from 'react'

class TitleCategory extends Component{
  render(){
    return (
      <div className='title-category'><i className='iconfont notice'></i><h5>{this.props.title}</h5></div>
    )
  }
}

export { TitleCategory }