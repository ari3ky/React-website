import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => { //arrow function
    return ( 
        <nav className='navbar'>
           <h1>The Gaming Blog</h1>
            <div className="links">
                <Link to='/' style={{
                    color: "white",
                    backgroundColor: "#2B86C5",
                    borderRadius: '8px'

                }}>Home</Link>
                <Link to='/create' style={{ // Link is faster than regular anchor tag - react matches with route servers
                    color: "white",
                    backgroundColor: "#2B86C5",
                    borderRadius: '8px'

                }}>New page</Link>
            </div>
        </nav>
       
     );
}

 
export default Navbar;