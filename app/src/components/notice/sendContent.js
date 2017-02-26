
import React, { Component } from 'react'

class SendContent extends Component{
  render(){
    return (
      <div className='send-content'>
        <table>
          <tbody>
            <tr>
              <td>标题：</td>
              <td><input type='text' className='title' /></td>
            </tr>
            <tr>
              <td>标签：</td>
              <td><input type='text' className='label' /></td>
            </tr>
            <tr>
              <td>正文：</td>
              <td><textarea rows="10" cols="30">
                    </textarea></td>
            </tr>
            <tr >
              <td className='fr'>
              
              <input type='button' value='发布' className='release' /></td>
              <input type='button' value='取消' className='cancel' />  
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export { SendContent }