/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-21
 *  @describe  [主入口]
 */

import { Component } from 'react'
import React from 'react'
import { render } from 'react-dom'
import { Main } from './components/main'
import { Notice } from './components/notice'
 
render(
  <Main />,
  document.querySelector('#main')
)



