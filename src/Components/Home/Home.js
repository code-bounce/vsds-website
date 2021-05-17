import React from 'react'
import './Home.scss'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Stats from '../Stats/Stats';
import WhatsNew from '../WhatsNew/WhatsNew';
import Pricing from '../Pricing/Pricing'
import Query from '../Query/Query';
import About from '../About_us/About';
import Footer from '../Footer/Footer';
import Developed from '../Developed/Developed';
import Mobile__Home from '../../Mobile__components/Mobile__Home/Mobile__Home'
import { ImAngry } from 'react-icons/im';


function Home() {
    return (
        <div className="home">
            <div className='float'>
                <a href='mailto:sajiomega@gmail.com'><ImAngry size={20} style={{marginRight: '5px'}} />Complaints</a>
            </div>
            <div className="home__desktop">
            <div className="home__main">
            <div className="home__left">
                <div className="home__content">
                    <div className='home__content__sub'>Maruti Aprroved Driving School</div>
                    <div className="home__content__head">Don't worry <br/>We are here for every Solution.</div>
                    <div className="home__content__body">
                        <div className='content__tick'>Our meticulously designed courses help transform beginners into skilled and confident drivers. Learn driving at the best, from the best.</div>
                    </div>
                    <div className="btn__group">
                        <div className="home__content__button"><Button className="btn" variant='contained' color='primary'><a href="#query__page">Book Lesson</a></Button></div>
                        <Link to='/locations'> <Button className='locate__us'><LocationOnIcon className='location__icon' />Locate us</Button></Link>
                    </div>
                </div>
            </div>
            <div className="home__right"></div>
            </div>
            <Stats />
            <Pricing />
            <WhatsNew />
            <Query />
            <About />
            <Footer />
            <Developed />
            </div>
            <div className='home__mobile'>
                <Mobile__Home />
            </div>
        </div>
    )
}

export default Home
