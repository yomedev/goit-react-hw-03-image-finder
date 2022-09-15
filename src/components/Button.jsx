import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ changePage }) => {
  return (
    <button
      onClick={() => changePage()}
      className='Button'
    >Load more</button>
  )
}

Button.propTypes = {
  changePage: PropTypes.func
}

export default Button