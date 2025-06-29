import React from 'react'

export default function Artist({title, publishYear, technique, desc}) {
  return (
    <div className='artist-card'>
        <div>{title}</div>
        <div>{publishYear}</div>
        <p>{technique}</p>
        <p>{desc}</p>
    </div>
  )
}
