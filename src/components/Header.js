import React from 'react'
import PropTypes from 'prop-types'

import TextInput from './common/TextInput'

const styles = {
  margin: '1em auto',
  width: '90%',
  paddingBottom: '1em',
  borderBottom: '1px solid rgba(156,154,166, 0.29)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

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
    <div style={styles}>
      <div>IPFS LOGO</div>
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
