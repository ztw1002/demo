import React, {useState} from 'react'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'

export default function Vote () {
  let [supNum, setSupNum] = useState(10), 
      [oppNum, setOppNum] = useState(0)


  const change = (type) => {
    if (type === 'sup') {
      setSupNum(supNum + 1)
      return 
    }
      setOppNum(oppNum + 1)
  }
  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">Vote</h2>
        <span className="num">{supNum + oppNum}</span>
      </div>
      <VoteMain supNum={supNum} oppNum={oppNum} />
      <VoteFooter change = {change} />
    </div>
  )  
}