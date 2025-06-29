import React from 'react'
import Artist from './Artist'

export default function ShowInfo({ artists }) {
    return (
        <div className='artists-container'>
            {artists.map((i, index) => (<Artist {...i} key={i.title || index} />))}
        </div>
    )
}
