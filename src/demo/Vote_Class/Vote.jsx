import React from 'react'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'

export class Vote extends React.Component {
  state = {
    supNum: 10,
    oppNum: 0
  }

  change = (type) => {
    let {supNum, oppNum} = this.state
    if (type === 'sup') {
      this.setState({ supNum: supNum + 1})
      return
    }
    this.setState({oppNum: oppNum + 1})
  }
  render() {
    let {supNum, oppNum} = this.state
    return (
      <div className='vote-box'>
        <div className="header">
          <h2 className="title">Vote</h2>
          <span className="num">{supNum + oppNum}</span>
        </div>
        <VoteMain supNum={supNum} oppNum={oppNum}/>
        <VoteFooter change={this.change}/>
      </div>
    )
  }
}

export default Vote