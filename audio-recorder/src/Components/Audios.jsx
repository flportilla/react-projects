import React, { useState } from 'react'


function Audios({ sources }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {
        sources
          .map((source, index) => {
            return <audio key={index} src={source} controls ></audio>
          })

      }
    </div >
  )
}

export default Audios