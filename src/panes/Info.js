import React from 'react'
import PropTypes from 'prop-types'
import {clipboard} from 'electron'
import prettyBytes from '../utils/pretty-bytes'

import Pane from '../components/Pane'
import Header from '../components/Header'

function copy (text) {
  return () => { clipboard.writeText(text) }
}

const styles = {
  main: {
    display: 'flex',
    background: '#fff',
    width: '90%',
    margin: '1em auto'
  },
  left: {
    width: '60%',
    padding: '1em',
    color: '#7f8491'
  },
  right: {
    width: '40%',
    backgroundColor: '#215d7f'
  },
  hr: {
    color: '#f3f3f2',
    border: '1px solid'
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  stat: {
    title: {
      margin: '0',
      fontSize: '0.8em'
    },
    value: {
      margin: '0',
      fontSize: '1.25em',
      fontWeight: 'medium'
    }
  },
  title: {
    fontSize: '28px',
    fontWeight: '500'
  }
}

export default function Info (props) {
  return (
    <Pane className='info'>
      <Header />

      <div style={styles.main}>
        <div style={styles.left}>
          <div style={styles.stats}>
            <div>
              <p style={styles.stat.title}>Space Used</p>
              <p style={styles.stat.value}>{prettyBytes(props.repo.repoSize)}</p>
            </div>

            <div>
              <p style={styles.stat.title}>Down Speed</p>
              <p style={styles.stat.value}>{prettyBytes(props.bw.rateIn) + '/s'}</p>
            </div>

            <div>
              <p style={styles.stat.title}>Up Speed</p>
              <p style={styles.stat.value}>{prettyBytes(props.bw.rateOut) + '/s'}</p>
            </div>
          </div>

          <hr style={styles.hr} />

          <div>
            <h2 style={styles.title}>Your Node Informations</h2>

            <p><strong>Location:</strong> {props.node.location}</p>
            <p><strong>Protocol Version:</strong> {props.node.protocolVersion}</p>
            <p><strong>Peer ID:</strong> {props.node.id}</p>
            <p><strong>Public Key:</strong> {props.node.publicKey}</p>
          </div>
        </div>

        <div style={styles.right}>
          GRAPH
        </div>
      </div>
    </Pane>
  )
}

Info.propTypes = {
  node: PropTypes.object,
  repo: PropTypes.object,
  bw: PropTypes.object
}

Info.defaultProps = {
  node: {
    id: 'Undefined',
    location: 'Unknown',
    protocolVersion: 'Undefined',
    publicKey: 'Undefined',
    addresses: []
  },
  repo: {
    repoSize: 0,
    numObjects: 0
  },
  bw: {
    totalIn: 0,
    totalOut: 0,
    rateIn: 0,
    rateOut: 0
  }
}
