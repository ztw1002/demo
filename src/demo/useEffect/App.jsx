import React, {useState} from 'react'
import {Button} from 'antd'
import { useEffect } from 'react'

/**
 * useEffect：在函数组件中，使用生命周期函数
 * 
 * useEffect(callback):
 *  第一次渲染完毕后，执行 callback，等价于 componentDidMount
 *  在组件每一次渲染完毕后，也会执行 callback，等价于 componentDidUpdate
 * 
 * useEffect(callback, []):
 * 只有第一次渲染完毕后，才会执行 callback，每一次视图更新完毕后，callback 不再执行
 * 类似于 componentDidMount
 */
export default function App () {
  let [num, setNum] = useState(0)
  let [x, setX] = useState(100)

  useEffect(() => {
    // 获取最新的状态值
    
  })
  const handle = () => {

  }

  return <div className='demo'>
    <span className="num">0</span>
    <Button type='primary' size='small' onClick={handle}>
      新增
    </Button>
  </div>
}