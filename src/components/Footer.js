import React from 'react'
import PropTypes from 'prop-types'

/**
 * Is a Pane's Footer.
 *
 * @param {Object} props
 *
 * @prop {Node} children
 *
 * @return {ReactElement}
 */
export default function Footer (props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired
}
