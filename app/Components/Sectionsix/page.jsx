import React from 'react'
import pcone from '../../Assects/pcone.svg'
import pctwo from '../../Assects/pctwo.svg'
import pcthree from '../../Assects/pcthree.svg'
import pcfour from '../../Assects/pcfour.svg'
import Image from 'next/image'
import bgsection from '../../Assects/bgsection.svg'
import './six.css'
const Sectionsix = () => {
    return (
        <div>
            <Image src={bgsection} className='bgsec position-absolute end-0' width={490} />
            <div className='container mt-5 mb-5'>
                <div className='row mb-5'>
                    <div className='col-md-6'>
                        <div className='ms-5'>
                            <Image src={pcone} className=' p-2' width={240} />
                            <Image src={pctwo} className='p-2' width={240} />
                        </div>
                        <div className='ms-5' >
                            <Image src={pcthree} className=' p-2' width={240} />
                            <Image src={pcfour} className=' p-2' width={240} />
                        </div>
                    </div>
                    <div className='col-md-6 mt-5 '>

                        <p className='project-p'>PROJECTS</p>
                        <h2 className='position-relative amazing'>Our amazing project that <br /> has been completed</h2>
                        <p className='position-relative turpis'>Turpis cursus in hac habitasse platea dictumst <br /> quisque sagittis purus. Ligula ullamcorper malesuada <br />  proin libero nunc consequat. <br /> <br />

                            Dignissim sodales ut eu sem integer vitae justo. <br /> Tincidunt tortor aliquam nulla facilisi cras.</p>

                        <button className='project py-3 px-4 mt-4  position-absolute'>RECENT PROJECTS</button>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Sectionsix