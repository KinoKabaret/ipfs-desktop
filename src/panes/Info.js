import React from 'react'
import PropTypes from 'prop-types'
import {clipboard, ipcRenderer} from 'electron'
import prettyBytes from '../utils/pretty-bytes'

import Pane from '../components/Pane'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

function openWebUI () {
  ipcRenderer.send('open-webui')
}

function copy (text) {
  return () => { clipboard.writeText(text) }
}

export default function Info (props) {
  return (
    <Pane className='info'>
      <Header />

      <div className='main'>
        <div className='left'>
          <div className='stats'>
            <div>
              <p className='title'>Space Used</p>
              <p className='value'>{prettyBytes(props.repo.repoSize)}</p>
            </div>

            <div>
              <p className='title'>Down Speed</p>
              <p className='value'>{prettyBytes(props.bw.rateIn) + '/s'}</p>
            </div>

            <div>
              <p className='title'>Up Speed</p>
              <p className='value'>{prettyBytes(props.bw.rateOut) + '/s'}</p>
            </div>
          </div>

          <hr />

          <div className='informations'>
            <h2>Your node informations</h2>

            <p><strong>Location:</strong> {props.node.location}</p>
            <p><strong>Protocol Version:</strong> {props.node.protocolVersion}</p>
            <p><strong>Peer ID:</strong> <code>{props.node.id}</code> <button onClick={copy(props.node.id)}>C</button></p>
            <p><strong>Public Key:</strong> <code>{props.node.publicKey.substr(0, 30)}</code> <button onClick={copy(props.node.id)}>C</button></p>
          </div>
        </div>

        <div className='right'>
          GRAPH
        </div>
      </div>

      <Footer>
        <Button mx={0} fontSize={1} onClick={openWebUI}>Open IPFS Control</Button>
      </Footer>
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
