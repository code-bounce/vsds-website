import React, { useState } from 'react'
import './Mobile__Courses.scss'
import { IconButton } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import License from '../../assets/driving-license.svg'
import PriceCards from "./PriceCards";
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function Mobile__Courses(props) {
    var [id, setID] = useState(0);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Pricing = [
        {
            id: 1,
            course: 'Learner Course',
            price: '₹ 7,670',
            color: '5px solid rgb(242, 64, 61)',
            backcolor: '-1px 1px 2px rgba(242, 64, 61,0.3)',
            wordcolor: 'rgb(242, 64, 61)',
            textcolor: 'rgba(242, 64, 61,0.2)'
        },
        {
            id: 2,
            course: 'Learner Extended Course',
            price: '₹ 10,030',
            color: '5px solid rgb(242, 242, 61)',
            backcolor: '-1px 1px 2px rgba(242, 242, 61,0.3)',
            wordcolor: 'rgb(242, 242, 61)',
            textcolor: 'rgba(242, 242, 61,0.2)'
        },
        {
            id: 3,
            course: 'Learner Detailed Course',
            price: '₹ 11,800',
            color: '5px solid rgb(61, 242, 150)',
            backcolor: '-1px 1px 2px rgba(61, 242, 150,0.3)',
            wordcolor: 'rgb(61, 242, 150)',
            textcolor: 'rgba(61, 242, 150,0.2)'
        },
        {
            id: 4,
            course: 'Advance Course',
            price: '₹ 5,900',
            color: '5px solid rgb(61, 126, 242)',
            backcolor: '-1px 1px 2px rgba(61, 126, 242,0.3)',
            wordcolor: 'rgb(61, 126, 242)',
            textcolor: 'rgba(61, 126, 242,0.3)'
        }
    ]
    return (
        <div className="mobile__courses">
            <div className="mobile__courses__head">Courses We offer.</div>
            <div className='course__pricing'>
                {Pricing.map(value => (
                    <div className="course" style={{borderLeft: value.color, boxShadow: value.backcolor}} key={value.id} >
                        
                        <div className="middle">
                            <div className="middle__head">{value.course}</div>
                            <div className="middle__price" style={{color: value.wordcolor, backgroundColor: value.textcolor}}>{value.price}</div>
                        </div>
                        <div className="right">
                            <IconButton className="icon__btn" onClick={() => { handleOpen(); setID(value.id) }}>
                                <ArrowForwardIosIcon className="icon" />
                            </IconButton>
                        </div>
                    </div>
                ))}

            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)} 
                style={{ top: '40vw' }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <PriceCards id={id} controller={(val) => props.handler(val)} closeCard={() => setOpen(false)} />
                </Fade>
            </Modal>
        </div>
    )
}

export default Mobile__Courses
