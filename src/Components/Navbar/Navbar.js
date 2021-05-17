import React,{useState} from 'react'
import { Link  } from 'react-router-dom'
import './Navbar.scss'
import { Button } from '@material-ui/core'
import Logo from '../../assets/mainlogo.svg'


function Navbar() {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="logo">
                    <img src={Logo} /> 
                    {/*<div className="logo__name">Vishnu Cars</div>*/}
                </div>
                <div className="nav__items">
                    <Button className="nav__link" ><Link to="/">Home</Link></Button>
                    <Button className="nav__link"><Link to="/locations">Locate Nearest point</Link></Button>

                    <Button className="nav__link" ><Link to='/book_lesson'>Book Lesson</Link></Button>
                    <Button className="nav__link" ><Link to="/blog">Blog</Link></Button>
                    <Button className="nav__link contact"><a href='tel:+919710635120'>Contact</a></Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
