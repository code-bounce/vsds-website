import React from 'react'
import './Developed.scss'
import Logo from '../../assets/logo.png'

function Developed() {
    return (
        <div className="developed">
            <div className="left">
                <img alt='' src={Logo} />
            </div>
            <div className="center">© We Design, Create, React | Build with passion</div>
            <div className="right">For Webites <a href='mailto:akhilrajktt@gmail.com'>Mail Us</a></div>
        </div>
    )
}

export default Developed
