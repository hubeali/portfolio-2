import React, { uaeState } from 'react';
import one from '../../Assects/imageone.svg'
import two from '../../Assects/imagetwo.svg'
import three from '../../Assects/imagethree.svg'
import './eight.css';
import fac from '../../Assects/facebookone.svg'
import twiti from '../../Assects/twiterone.svg'
import linki from '../../Assects/linkdinone.svg'
import Image from 'next/image';

const Sectioneight = () => {
    const mapdata = [
        {
            img: one,
            sebastian: "SEBASTIAN DOE",
            Code: "Code Expert",
            link: linki,
            twit: twiti,
            face: fac
        },
        {
            image: two,
            sebastian: "STEVE DOE",
            Code: "Software Engineer",
            link: linki,
            twit: twiti,
            face: fac
        },
        {
            imag: three,
            sebastian: "SARAH DOE",
            Code: "Analysator",
            link: linki,
            twit: twiti,
            face: fac
        },
    ]
    return (
        <div className='main main-bg'>
            <div><div class="container">
                <div className='row text-center'>
                    {/* map  */}
                    {mapdata.map((item) => {
                        return (
                            // col-md-4 
                            <div className='col-md-4 mt-5 mb-5 pb-5'>
                                <div class="card map-card border-light-subtle ">
                                    <div class="card-body ">
                                        <Image src={item.img} width={320} />
                                        <Image src={item.image} width={320} />
                                        <Image src={item.imag} width={320} />
                                        <h6 className='mt-4'>{item.sebastian}</h6>
                                        <p className='code'>{item.Code}</p>
                                        <div className='d-flex position-absolute icons '>
                                            <Image src={item.face} width={40} />
                                            <Image src={item.twit} width={40} />
                                            <Image src={item.link} width={40} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Sectioneight