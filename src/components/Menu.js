import React from 'react'
import PropTypes from 'prop-types'

export default function Menu (props) {
  return (
    <div className='menu bg-navy'>
      {props.children}
    </div>
  )
}

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}
