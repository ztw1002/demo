import React from "react";
import PropTypes from 'prop-types'

export default function VoteMain (props) {
  let {supNum, oppNum} = props
  let ratio = '--'
  let total = supNum + oppNum
  if (total > 0) ratio = (supNum / total * 100).toFixed(2) + '%'


  return <div className="main">
    <p>支持人数：{supNum}人</p>
    <p>反对人数：{oppNum}人</p>
    <p>支持占比：{ratio}</p>
  </div>
}

VoteMain.defaultProps = {
  supNum: 0,
  oppNum: 0
}

VoteMain.propTypes = {
  supNum: PropTypes.number,
  oppNum: PropTypes.number
}