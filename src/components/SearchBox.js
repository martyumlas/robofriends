import React from 'react'

export default function SearchBox({searchField, searchChange}) {
    return (
        <div className='pa2'>
            <input className='pa2' type="search" placeholder='search robots' onChange={searchChange}/>
        </div>
    )
}
