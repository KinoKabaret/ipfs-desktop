import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

export function Menu (props) {
  return (
    <div className='flex flex-column h-100 w4 bg-navy'>
      {props.children}
    </div>
  )
}

Menu.propTypes = {
  children: PropTypes.any.isRequired
}

export function MenuOption (props) {
  let className = 'button-reset sans-serif pointer bg-transparent bn outline-0'
  if (props.active) {
    className += ' white'
  } else {
    className += ' aqua-muted hover-white'
  }

  return (
    <button onClick={props.onClick} className={className}>
      <p>{props.title}</p>
    </button>
  )
}

MenuOption.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}