import React, { PureComponent } from 'react'

export class App extends PureComponent {
  box3 = React.createRef()    // this.box3 = xxx

  render() {
    return (
      <div>
        <h2 className="title" ref={x => this.box2 = x}>答案</h2>
        <h2 className="title" ref={this.box3}>提示</h2>
      </div>
    )

  }
  componentDidMount() {
    console.log(this.box2)
    console.log(this.box3.current)
  }
}

export default App