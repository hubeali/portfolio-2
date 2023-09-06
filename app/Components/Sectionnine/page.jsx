import React from 'react'
import './nine.css'
import peoples from '../../Assects/peoples.svg'
import Image from 'next/image'
const Sectionnine = () => {
    return (
        <div className='main-bg'>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-md-3'>
                        <Image src={peoples} className='ms-5' />
                    </div>
                    <div className='col-md-9'>
                        <p className=' mt-3 me-3 '> Quis eleifend quam adipiscing vitae proin sagittis nisl. Lectus vestibulum mattis. <span className='bcolor'> Make a Request</span></p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Sectionnine