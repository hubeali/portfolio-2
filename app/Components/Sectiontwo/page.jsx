import React from 'react'
import './two.css'
import plus from '../../Assects/plus.svg'
import lap from '../../Assects/lap.svg'
import laptwo from '../../Assects/laptwo.svg'
import Image from 'next/image'
const Sectiontwo = () => {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-md-7'>
                    <span className='whyus'> WHY US</span>

                    <h2 className='wehave'>We have over 25+ years in the <br /> Tech Industry</h2>
                    <p className='p-quis'>Quis eleifend quam adipiscing vitae proin sagittis nisl. <br /> Lectus vestibulum mattis.</p>
                    <div className='d-flex mt-5 ms-4'>
                        <Image src={plus} className='me-3 ' />
                        <h6 className='mt-1 dedicated'>DEDICATED TEAMS</h6>
                    </div>
                    <p className='p-quis ms-5 ps-3'>Risus viverra adipiscing at in tellus integer feugiat. <br /> Aenean et tortor at risus viverra.</p>

                    <div className='d-flex mt-4 ms-4'>

                        <Image src={plus} className='me-3 ' />
                        <h6 className='mt-1 dedicated'>CERTIFIED PROFESSIONAL</h6>
                    </div>

                    <div className='d-flex mt-3 ms-4'>

                        <Image src={plus} className='me-3 ' />
                        <h6 className='mt-1 dedicated'>24/7 SUPPORT TEAM</h6>
                    </div>
                </div>

                <div className='col-md-2'>
                    <Image src={lap} className='lap-img-1' />
                </div>
                <div className='col-md-3'>
                    <Image src={laptwo} className='lap-img-2 ms-2 ' />
                </div>

            </div>
        </div>
    )
}

export default Sectiontwo