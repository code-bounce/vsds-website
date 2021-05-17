import React from 'react'
import './Mobile__Footer.scss'
import Maruti from '../../assets/suzuki.svg'

function Mobile__Footer() {
    return (
        <div className="mobile__footer">
            <div className="mobile__footer__head">Started small Now grown to <br/>huge Organisation.</div>
            <div className='mobile__footer__body'>Vishnu Cars Private Limited promoted in the year 2001, by Mr Immani Venkata Rao. The Group is diversified into various businesses such as, Automobiles, Warehousing, Constructions etc.</div>
            <div className="mobile__footer__image">
                <img alt='' src={Maruti} />
            </div>
        </div>
    )
}

export default Mobile__Footer