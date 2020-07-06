import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    // const history = useHistory()

    // function backToMain(){  //directs user back to splash page
    //     history.push('/')
    // }

    return(
        <div id='nav'>
            <div id='nav-box-1'>
                <Link id='link' to='/'>Home</Link>
            </div>
            {/* <div id='logo-box'>
                <img id='logo' src='../glisten-png.png' alt='Glisten Window Cleaning Logo'  />
            </div> */}
            <div id='nav-box-1'>
                {/* <Link id='link' to='/About'>About Us</Link> */}
                <Link id='link' to='/Contact'>Contact Us</Link>
            </div>
        </div>
    )
}

export default Nav

// return (
//     <div className="App">
//       <Nav />
//       {routes}
//     </div>
//   );