import React from 'react'
import './style.styl';


const Footer = () => {
    const year = (new Date()).getFullYear().toString();

    return <div className='footer'>
        <p>My - React &copy; {year}, Charles.</p>
    </div>
}

 
export default Footer