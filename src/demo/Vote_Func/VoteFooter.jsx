import React from "react";
import {Button} from 'antd'
import PropTypes from 'prop-types'

export default class VoteFooter extends React.Component {

  // 属性规则校验
  static defaultProps = {}
  static propTypes = {
    change: PropTypes.func.isRequired
  }
  render() {
    let {change} = this.props
    return <div className="footer">
      <Button type="primary" onClick = {change.bind(null, 'sup')}>支持</Button>
      <Button type="primary" onClick = {change.bind(null, 'opp')} danger>反对</Button>
    </div>
  }
}