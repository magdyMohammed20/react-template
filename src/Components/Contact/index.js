import React from 'react';

const Contact = () => {
    return (
        <div className='pt-5'>
            <h1 className='text-center'>DROP ME A LINE</h1>
            <div className='container'>
                <form className='row'>
                    <div className='col-12 d-flex justify-content-center mt-4'>
                        <input className='col-6 form-control' type='text' placeholder='Your Name...' />
                        <input className='col-6 ml-2 form-control' type='email' placeholder='Your Email...' />
                    </div>
                    <div className='col-12 d-flex justify-content-center mt-3'>
                        <input className='w-100 form-control' type='email' placeholder='Your Subject...' />
                    </div>
                    <div className='col-12 d-flex justify-content-center mt-3'>
                        <textarea className='w-100 form-control' placeholder='Your Message...'></textarea>
                    </div>
                    <button className='btn btn-success w-50 mx-auto mt-5'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;