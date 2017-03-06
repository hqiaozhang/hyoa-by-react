/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [图书馆]
 */
// 引入样式
import style from  "../../public/style/project.css";
// 引入组件
import React, { Component } from 'react'

import { Left } from '../components/left'

class Project extends Component{
  render(){
    return (
       <div>
        <Left />
        <div className='right'>
          <div className='project-main'>
            <h2>项目管理</h2>
            <div className='project-list'>
                <div className='project-name'>
                    汉阳项目 
                    <span>开发中</span>
                </div>
                <div className='project-content'>
                  <div><i className='member'></i> 项目经理：马毅才</div>
                  <div><i className='member'></i> 项目成员：马毅才，丁祖科，尹帮会，娄绿林，林海泉，陈兴旺</div>
                  <div><span className='outline'>项目概要</span>
                    <p>本系统总览页包括的功能有五大核心数据展示——警情、破案、刑事拘留、治安行政、强戒的分局去年、分局今年、今年六大中心城区全市平均数及同比变化；雷达图及报警(五大数据及细节报警)；五大核心数据及细节数据趋势及预警等</p>
                  </div>
                </div>
                <div className='project-progress'>
                    <h5>项目进度</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Project }