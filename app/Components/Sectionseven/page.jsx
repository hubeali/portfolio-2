import React from 'react'
import './seven.css'
import barone from '../../Assects/barone.svg'
import bartwo from '../../Assects/bartwo.svg'
import barthree from '../../Assects/barthree.svg'
import teerone from '../../Assects/teerone.svg'
import teertwo from '../../Assects/teertwo.svg'
import Image from 'next/image'

const Sectionseven = () => {
    return (


        <div className='background-color-section-seven'>

            <br />
            <div >
                <div>
                    <br />
                    <br />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <p className='color-brown'>SKILLS</p>
                            <h1 className='experts'>We have experts in their <br /> respective fields</h1>
                            <p className='para-leo'>Leo urna molestie at elementum. At consectetur <br /> lorem donec massa sapien
                                faucibus et. iverra <br />suspendisse potenti nullam ac tortor vitae. fFacilisi <br />
                                etiam dignissim diam quis.</p>
                            <Image src={barone} className='mt-5' />
                            <Image src={bartwo} className='mt-5' />
                            <Image src={barthree} className='mt-5' />
                        </div>
                        <div className='col-md-7'>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className='input-one mt-5  '>

                                <input type="text" className='inputs-set border border-color-suitable py-3 ms-3' />
                                <Image src={teerone} className='teer-one-img' />

                                <p className='nunc ms-5'>Nunc sed blandit libero volutpat sed?</p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />

                            <p className='nisl ms-5 mt-4 ps-3'>Nisl rhoncus mattis rhoncus urna neque viverra. <br />  Turpis egestas pretium aenean pharetra magna ac <br /> placerat vestibulum.</p>
                            <br />
                            <div className='input-one  '>

                                <input type="text" className='inputs-set border border-color-suitable py-3 ms-3' />
                                <Image src={teertwo} className='teer-one-img' />

                                <p className='nunc ms-5'>Congue mauris rhoncus aenean vel elit?</p>

                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className='input-one  '>

                                <input type="text" className='inputs-set border border-color-suitable py-3 ms-3' />
                                <Image src={teertwo} className='teer-one-img' />

                                <p className='nunc ms-5'>Magna eget est lorem ipsum dolor sit amet?</p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br /><br />
            <div className='text-center'>
                <p className='color-brown text-center'>TEAM</p>
                <h2 className='our-certified-expert'>Our certified experts</h2>
                <br />
                <p className='quie-eleifed'>Quis eleifend quam adipiscing vitae proin sagittis nisl. <br /> Lectus vestibulum mattis.</p>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Sectionseven