import React from 'react'
import Artist from './Artist'

export default function ShowInfo({ artists }) {
    return (
        <div className="showArtist">
            {artists.map((i, index) => (
                <Artist {...i} key={i.title || index} />
            ))}
        </div>
    )
}
