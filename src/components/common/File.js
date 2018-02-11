import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  div: {
    position: 'relative'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: '1px',
    border: 'solid 1px #e7e8ee',
    padding: '0.5em .7em'
  },
  placeholder: {
    color: 'rgba(127, 132, 145, 0.6)',
    position: 'absolute',
    top: 'calc(0.5em + 1px)',
    left: 'calc(0.7em + 1px)',
    margin: '0'
  }
}

export default function File (props) {
  const onChange = (event) => {
    event.preventDefault()
    props.onChange(event.target.value)
  }

  return (

  )
}

File.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  navigate: PropTypes.func,
  copy: PropTypes.func,
  remove: PropTypes.func,
  type: PropTypes.string,
  open: PropTypes.func
}
