import React, { useState } from 'react'


function Audios({ source }) {
  console.log(source)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {
        source
          .map((source, index) => {
            if (index !== 0) return <audio key={index} src={source} controls></audio>
          })

      }
    </div>
  )
}

export default Audios