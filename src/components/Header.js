import React from 'react'
import PropTypes from 'prop-types'

import TextInput from './common/TextInput'

/**
 * Is a Pane's Header.
 *
 * @param {Object} props
 *
 * @prop {Function} search
 *
 * @return {ReactElement}
 */
export default function Header (props) {
  return (
    <div className='mv3 center pb3 flex justify-between items-center bb b--moon-gray'>
      <img className='h2-25' src='../img/ipfs-logo.png' />
      <TextInput value='' onChange={() => {}} placeholder='Search' />
    </div>
  )
}

Header.propTypes = {
  search: PropTypes.func
}

Header.defaultProps = {
  search: () => {}
}
