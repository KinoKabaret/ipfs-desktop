import React from 'react'
import PropTypes from 'prop-types'

/**
 * Is a Button.
 *
 * @param {Object} props
 *
 * @prop {String}   text    - text to be shown within the button
 * @prop {Function} onClick - function to be triggered when clicking the button
 *
 * @return {ReactElement}
 */
export default function Button (props) {
  let className = 'bg-aqua button'

  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.inactive} >
      <span>{props.text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inactive: PropTypes.bool
}

Button.defaultProps = {
  inactive: false
}
