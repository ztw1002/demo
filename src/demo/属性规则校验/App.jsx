import PropTypes from 'prop-types'

export default function App(props) {

  const {title} = props
  console.log(props)

  return (
    <div>{title}</div>
  )
}

App.defaultProps = {
  x: 0
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number
}