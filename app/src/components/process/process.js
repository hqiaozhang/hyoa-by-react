/**
 *  @Author    zhanghq
 *  @DateTime  2017-02-22
 *  @describe  [首页]
 */
// 引入样式
import style from  "../../../public/style/process.css"
// 引入组件
import React from 'react'
import { Component } from 'react'
import { Left } from './../left'

const data = [
  {
    title: '流程管理',
    time: '2017-01-07'
  },{
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  },{
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  },{
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  },{
    title: '团建活动通知：下午2点开始',
    time: '2017-01-07'
  }
]


class Process extends Component{
  render(){
    
    return (
      <div>
        <Left />
        <div className='right'>
          
          <div className='process-main'>

            <h4><i className='iconfont'>&#xe63f;</i>流程管理</h4>
            <ul className='query-criteria'>
                <li><span>流程类型</span>: 
                  <select>
                    <option>请假</option>
                    <option>调休</option>
                  </select>
                </li>
                <li><span>状态</span>: 
                  <select>
                    <option>待审批</option>
                    <option>待审批</option>
                  </select>
                </li>
            </ul>

            <div className='query-content-list'>
                <table  width='100%'>
                <thead >
                <tr>
                  <th>序号</th>
                  <th>类型</th>
                  <th>开始时间</th>
                  <th>结束时间</th>
                  <th>事由</th>
                  <th>审批人</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
                
                </thead>
                <tbody >
                <tr>
                  <td>1</td>
                  <td>请假</td>
                  <td>2017-1-5 9:30</td>
                  <td>2017-1-5 9:30</td>
                  <td>外出办公</td>
                  <td>刘成</td>
                  <td>待审批</td>
                  <td>修改</td>
                </tr>
                
                </tbody>
                </table>
            </div>

          </div>
          
        </div>
      </div>

    )
  }
}

export { Process }

