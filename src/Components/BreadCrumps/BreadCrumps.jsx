import React from 'react'
import './BreadCrumps.css'

function BreadCrumps() {
  return (
    <div className='breadcrumps-wrap'>
        <div className="wrapper">
            <ul className='breadcrump-list'>
                <li>Home</li>
                <li>Home</li>
                <li className='active'>Home</li>
            </ul>
        </div>
    </div>
  )
}

export default BreadCrumps