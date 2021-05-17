import React, { useState } from 'react'
import './Mobile__Home.scss'
import Mobile__Navbar from '../Mobile__Navbar/Mobile__Navbar'
import { Button } from '@material-ui/core'
import Mobile__Stats from '../Mobile__Stats/Mobile__Stats';
import Mobile__Yus from '../Mobile__Yus/Mobile__Yus';
import Mobile__About from '../Mobile__About/Mobile__About';
import Mobile__Courses from '../Mobile__Courses/Mobile__Courses';
import Mobile__Completed from '../Mobile__Completed/Mobile__Completed';
import Main from '../../assets/main__illustration.svg'
import Form from '../Form/Form';
import Mobile__Footer from '../Mobile__Footer/Mobile__Footer'
import { ImAngry } from 'react-icons/im';

function Mobile__Home() {
    const [isopen, setisopen] = useState(false)

    function handleopen() {
        setisopen(!isopen)
    }
    return (
        <div className="mobile__home">
            <Mobile__Navbar  handler={value=>setisopen(value)}/>
            <div className='mobile__float'>
                <a href='mailto:sajiomega@gmail.com'><ImAngry size={20} style={{marginRight: '5px'}} />Complaints</a>
            </div>
            <div className="home__view">
                <div className="home__image">
                    
                </div>
                <div className="home__view__content">
                    <div className="head__top">Learn Driving</div>
                    <div className="head__bottom">At the Best, from the Best</div>
                    <div className="body">Our meticulously designed courses help transform beginners into skilled and confident drivers. Learn driving at the best, from the best.</div>
                    <Button className="btn" onClick={()=>handleopen()}>Book Lesson</Button>
                </div>
            </div>
            <Form isOpen={isopen} handler={value=>setisopen(value)} />
            <Mobile__Stats />
            <Mobile__Yus />
            <Mobile__Courses  handler={value=>setisopen(value)} />
            <Mobile__About />
            <Mobile__Footer />
            <Mobile__Completed />
        </div>
    )
}

export default Mobile__Home
