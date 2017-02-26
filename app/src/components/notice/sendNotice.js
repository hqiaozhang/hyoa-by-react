/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [公司公告-分页]
 */

import React, { Component } from 'react'
import { TitleCategory } from './title'
import { SendContent } from './sendContent'

class SendNoticeComponent extends Component {
  render(){
    return (
      <div className='send-notice'>
        <TitleCategory title='发布公告' />
        <SendContent />
      </div>
    )
  }
}

export { SendNoticeComponent }
