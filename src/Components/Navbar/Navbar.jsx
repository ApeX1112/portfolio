import React, {useState} from 'react'
import './Navbar.css';
import { getImageUrl } from '../../utils';

const Navbar = () => {
    const[menuopen,setMenuOpen]=useState(false)
    return (
    <nav className='navbar'>
        <a href='/' className='title'> Portfolio</a>
        <div className='menu'>
            <img className={`menuBtn ${menuopen ? 'active' : '' }`} src={menuopen? getImageUrl("nav/closeIcon.png") :getImageUrl("nav/menuIcon.png")}
            alt='menu Button' onClick={()=>setMenuOpen(!menuopen)}></img>
            <ul className={`menuitems ${!menuopen ? 'animated' : 'unanimated'}`} onClick={()=>setMenuOpen(false)}>
                {menuopen &&
                <>
                    <li>
                        <a href='#about'>About </a>
                    </li>
                    <li>
                        <a href='#experience'>experience </a>
                    </li>
                    <li>
                        <a href='#projects'>projects </a>
                    </li>
                    <li>
                        <a href='#contact'>contact </a>
                    </li>
                </>
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar