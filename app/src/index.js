/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-21
 *  @describe  [主入口]
 */

import { Component } from 'react'
import React from 'react'
import { render } from 'react-dom'
import { Main } from './components/home/main'
import { Notice } from './containers/notice'
import { Process } from './components/process/process'
import { SendNotice } from './containers/sendNotice'


render(
  <SendNotice />,
  document.querySelector('#main')
)



