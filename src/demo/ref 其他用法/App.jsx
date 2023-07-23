import React, { PureComponent } from 'react'

class Child1 extends React.Component {
  render() {
    return (
      <div>
        子组件 1
        <br />
        <span ref={x => this.ss = x}>666666</span>
      </div>
    )
  }
}

const Child2 = React.forwardRef(
  function Child2(props, ref) {   
    // console.log(ref)   // 调用 Child2 时，设置的 ref 属性
    return (
      <div>
        子组件 2
        <button ref={ref}>按钮</button>
      </div>
    )
  }
)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Child1 ref={x => this.child1 = x} />
        <Child2 />
      </div>
    )
  }

  componentDidMount() {
    console.log(this.child1.ss) 
  }
}



export default App