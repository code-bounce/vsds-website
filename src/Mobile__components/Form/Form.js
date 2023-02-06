import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import Drawer from '@material-ui/core/Drawer';
import { Button, Divider} from '@material-ui/core';
import './Form.scss'
import {db} from '../../Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';



function Form(props) {
    return (
        <Drawer PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }} anchor={'bottom'} open={props.isOpen} onClose={()=>props.handler(false)}>
            <List />
        </Drawer>
    );
    function List() {
        const router = useHistory()
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const notify = () => toast.success('🦄 Wow so easy! Our agent will get in touch with you soon..', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        const { register, handleSubmit, reset, errors } = useForm()
        const onSubmit = (data) => {
            notify()
            db.collection('new_requests').add(
                {
                    ...data,
                    date,
                    time
                }
            );
            reset();
            setInterval(() => {props.handler(false)}, 5000)
            fetch("https://formsubmit.co/ajax/managermdsktp@vishnucars.in", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                date,
                time
            })
        })
        router.push("/thankYou")
        }
        return(
            <div className="form__view">
            <div className="form__details">
                <div className="divide"><Divider className="divider" /></div>
                <div className="mobile__form__head">Book your First Lesson</div>
                <form>
                    <input type='text' className="input__field" name='name' placeholder="Name" ref={register({required: 'true'})}/>
                    {errors.name && <p>Field Required</p>}
                    <input type='email' className="input__field" name='email' placeholder="Email" ref={register({required: 'true'})} />
                    <input type='text' className="input__field" placeholder="Phone Number" name='phoneNumber' ref={register({required: 'true', maxLength: 10, minLength: 10})}  />
                    {errors.phoneNumber && <p>Field Required</p>}
                    <textarea type='text' placeholder="Any Queries" defaultValue='No Queries' name='query' ref={register} />
                    <div className="check">
                        <input ref={register({required: 'true'})} type="checkbox" name='checked' ref={register({required: 'true'})} />
                        <div className="terms">
                            By checking the box, you confirm that you have read and accept the <a href="#">Terms and Conditions</a>.</div>
                    </div>
                    {errors.checked && <p>Field Required</p>}
                    <Button onClick={handleSubmit(onSubmit)} className="form__btn">Submit</Button>
                </form>
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
        
    };
}



export default Form