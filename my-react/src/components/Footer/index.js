import React from 'react'


const Footer = () => {
    const year = (new Date()).getFullYear().toString();

    return <footer>
        <p>My - React &copy; {year}, Charles.</p>
    </footer>
}

 
export default Footer