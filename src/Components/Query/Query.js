import React from 'react'
import './Query.scss'
import { useForm } from 'react-hook-form'
import BookIcon from '@material-ui/icons/Book';
import DialpadIcon from '@material-ui/icons/Dialpad';
import { Button } from '@material-ui/core'
import {db} from '../../Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Query() {
    const { register, handleSubmit, reset, errors } = useForm()
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const onSubmit = (data) => {
        db.collection('new_requests').add(
            {
                ...data,
                date,
                time
            }
        );
        reset();
        notify()
    }
    const notify = () => toast.success('🦄 Wow so easy!, We Will get in touch SOON.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
   
    return (
        <div className="query" id='query__page'>
            <div className="query__sub">Choose Course</div>
            <div className="query__head">Come and learn from the BEST.</div>
            <div className="query__main">
                <div className="query__left">
                    <div className="query__left__head"><BookIcon /> Online Form</div>
                    <div className="query__left__sub">Learn from the best proffesionals and make the best out of what we provide.</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input__fields">
                            <input type='text' placeholder='Name' name='name' ref={register({required: 'true'})} />
                            {errors.name && <p>Please enter your name</p>}
                            <input type='text' placeholder='Phone Number' name='phoneNumber' ref={register({required: 'true', maxLength: 10, minLength: 10})} />
                            {errors.phoneNumber && <p>Phone Number Required</p>}
                            <input type='text' placeholder="Email Address" name='email' ref={register({required: 'true'})} />
                        </div>
                        <div className='textarea'><textarea placeholder='Any Queries' name='query' defaultValue='No Queries' ref={register} /></div>
                        <div className='terms'><input type='checkbox' name='checked' ref={register({required: 'true'})} /> By Checking you accept the <a href='#'>terms and conditions.</a></div>
                        {errors.checked && <p>Required</p>}
                        <Button type='submit' className='btn'>Submit</Button>
                    </form>
                </div>
                <div className="query__right">
                    <div className="query__right__top">
                        <div className="query__right__head"><DialpadIcon /> Contact Us</div>
                        <div className='query__right__body'>
                            <div className="head">Head Office</div>
                            <div className="address">#203 - 206, Poonamalle Road, Kattupakkam, Chennai - 600 056.</div>
                        </div>
                    </div>
                    <div className="query__right__bottom">
                        <div className="contact">Contact</div>
                        <a className='contact__number' href="tel:+917339333708"><div className='span'>+91</div>7339333708</a>
                        <div className='name'>Z.Sanjeetha Begum</div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    {/* Same as */}
            <ToastContainer />
        </div>
    )
}

export default Query
