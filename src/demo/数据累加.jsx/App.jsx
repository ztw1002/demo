import React from "react";
import ReactDOM from 'react-dom/client'
import '@/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'))

class Count extends React.Component {
  state = { num: 0 }
  render() {
    const {num} = this.state    // 对象解构
    // let num = this.state.num

    return (
      <div>
        <span>{num}</span>
        <br />
        <button onClick={() => {
          num++
          this.setState({
            num
          })
        }}>+++</button>
      </div>
    )
  }
}

root.render(
  <Count/>
)