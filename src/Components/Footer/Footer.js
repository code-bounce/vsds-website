import React from 'react'
import './Footer.scss'
import Maruti from '../../assets/maruthi.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__head">Started small Now grown to <br/>huge Organisation.</div>
            <div className='footer__body'>Vishnu Cars Private Limited promoted in the year 2001, by Mr Immani Venkata Rao. The Group is diversified into various businesses such as, Automobiles, Warehousing, Constructions etc.</div>
            <div className="footer__image">
                <img alt='' src={Maruti} />
            </div>
        </div>
    )
}

export default Footer
