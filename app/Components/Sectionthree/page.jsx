import React from 'react'
import './three.css'
import Image from 'next/image'
import ellipseone from '../../Assects/ellipseone.svg'
import ellipsetwo from '../../Assects/ellipsetwo.svg'
import ellipsethree from '../../Assects/ellipsethree.svg'
const Sectionthree = () => {
    return (
        <div className='bg-two mb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>

                        <div class="card  ms-5  card-one mx-5">
                            <div class="card-body ">

                                <h5 className='consulation ms-5'>Consultation for Free</h5>
                                <p className='posure ms-5'>Posuere morbi leo urna molestie at <br />elementum eu egestas.</p>
                                <input type="text" placeholder='Your Name' className='rounded-pill  py-3 ms-5 mt-4  input-3' />
                                <input type="text" placeholder='Phone number' className='rounded-pill  py-3 ms-5 mt-4  input-3' />
                                <input type="text" placeholder='Project Category' className='rounded-pill py-3 ms-5 mt-4  input-3' />
                                <br />
                                <a href="#" class="btn btn-primary py-2 rounded-pill px-5 btn-send ms-5 mt-5">Send</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='main-our'>

                            <p className='our'>OUR SUCCESS</p>
                            <h2 className='helped'>We have helped more than 700+  clients worldwide</h2>
                            <p className='p-2'>Quis eleifend quam adipiscing vitae proin sagittis nisl. <br />Lectus vestibulum mattis.</p>
                            <div className='d-flex  mt-5'>
                                <Image src={ellipseone} className='me-4 ' />
                                <Image src={ellipsetwo} />
                            </div>
                            <div className='d-flex '>
                                <Image src={ellipsethree} className='me-4 mt-5' />
                                <Image src={ellipseone} className='mt-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Sectionthree