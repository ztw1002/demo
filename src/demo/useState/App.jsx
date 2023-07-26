import React, {useState} from 'react'
import {Button} from "antd"

/*
  useState，
                let [num. setNum] = useState(initialValue)
  执行方法，返回数组：[状态值, 修改状态的方法]
- 
  执行 setNum(value)，修改状态值为 value，通知视图更新

  函数组件的每一次渲染更新，都会把函数重新执行，产生一个全新的“私有上下文”
  内部的代码也需要重新执行
  涉及的函数需要重新构建  （这些函数的作用域，是每一次执行 App 产生的闭包）
  
  每一次执行 App 函数，也会把 useState 重新执行
  执行 useState 只有第一次，设置的初始值会生效，其余以后再执行，获取的状态都是最新的状态值，而不是初始值
  返回的修改状态的方法，每一次都是返回一个新的


*/


export default function App() {
  let [num, setNum] = useState(0)

  const handle = () => {
    setNum(num + 10)
  }
  return (
    <div className='demo'>
      <span className="num">{num}</span>
      <Button type='primary' size="small" onClick={handle}>新增</Button>
    </div> 
  )
}