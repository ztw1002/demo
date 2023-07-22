import PropTypes from 'prop-types'
import React from 'react'

export default function App(props) {
  let { title, x, children } = props
  //把插槽变为数组
  children = React.Children.toArray(children)
  
  let headerSlot = [],
      footerSlot = [], 
      defaultSlot = []
      
  children.forEach(child => {
    let {slot} = child.props
    if (slot === 'header') {
      headerSlot.push(child)
    } else if (slot === 'footer') {
      footerSlot.push(child)
    } else {
      // 不起名字的设置为默认插槽
      defaultSlot.push(child)
    }
  })

  return (
    <div className='demo-box'>
      {headerSlot}
      <br />
        {/* 把筛选出来的具体插槽信息，放在指定的位置进行渲染 */}
      <h2 className="title">{title}</h2>
      <span>{x}</span>

      <br />
      {footerSlot}
    </div>
  )
}

App.defaultProps = {
  x: 0
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number
}




