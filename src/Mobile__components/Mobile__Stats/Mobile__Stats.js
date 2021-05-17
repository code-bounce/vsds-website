import React from 'react'
import './Mobile__Stats.scss'
import Steering from '../../assets/steering-w.svg'
import Map from '../../assets/map.svg'
import Certificate from '../../assets/certificate.svg'
import Kilometers from '../../assets/km.svg'

function Mobile__Stats() {
    return (
        <div className='mobile__stats'>
            <div className="mobile__stats__head">What we offer our students.</div>
            <div className="mobile__stats__content">
                <div className="stats__info" style={{backgroundColor:'#ffffff'}}>
                    <img src={Steering} alt='' />
                    <div className="number" style={{color: '#3a416f'}}>8649+</div>
                    <div className="opinion" style={{color: '#3a416f'}}>Students are trained every year by our instructor</div>
                </div>
                <div className="stats__info">
                    <img src={Map} alt='' />
                    <div className="number">10</div>
                    <div className="opinion">Locations in Chennai</div>
                </div>
            </div>
            <div className="mobile__stats__content">
                <div className="stats__info">
                    <img src={Certificate} alt='' />
                    <div className="number">100%</div>
                    <div className="opinion">We bring the better driver in you.</div>
                </div>
                <div className="stats__info">
                    <img src={Kilometers} alt='' />
                    <div className="number">3475</div>
                    <div className="opinion">Our students drive so many kilometers every days</div>
                </div>
            </div>
        </div>
    )
}

export default Mobile__Stats
