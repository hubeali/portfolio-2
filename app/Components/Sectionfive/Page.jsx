import React, { uaeState } from 'react';
import mirani from '../../Assects/quote.svg'
import Image from 'next/image';
import mirani2 from '../../Assects/star.svg'
import mirani3 from '../../Assects/doeone.svg'
import mirani4 from '../../Assects/doetwo.svg'
import mirani5 from '../../Assects/doethree.svg'
import threedots from '../../Assects/threedots.svg'
import './five.css';
const Sectionfive = () => {



    const data = [

        {
            imageUrl: mirani,
            plan: "Nisl rhoncus mattis rhoncus urna  neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
            starimg: mirani2,
            doe: mirani3,
            robet: "ROBERT DOE",
            bus: "Businessman"
        },
        {
            imageUrl: mirani,
            plan: "Nisl rhoncus mattis rhoncus urna  neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
            starimg: mirani2,
            doe: mirani4,
            julia: "JULIA DOE",
            bus1: "Businesswomen"
        },
        {

            imageUrl: mirani,
            plan: "Nisl rhoncus mattis rhoncus urna  neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
            starimg: mirani2,
            doe: mirani5,
            sarah: "SARAH DOE",
            bus2: "Businesswomen"
        },
    ]
    return (

        <div className='main '>
            <div><div class="container mt-5">
                <div className='row text-center'>
                    {/* map  */}
                    {data.map((item) => {
                        return (
                            // col-md-4 
                            <div className='col-md-4 mt-5 mb-5 pb-3'>
                                <div class="card map-card border-light-subtle ">

                                    <div class="card-body ">
                                        <Image src={item.imageUrl} className='' />
                                        <p className='font-size'>{item.plan}</p>
                                        <Image src={item.starimg} className='mt-5 ' />
                                        <div>
                                            <div className='mt-5 pt-3'>

                                                <Image src={item.doe} className='doe-1' width={100} />
                                                <Image src={item.doetwo} className='doe-1' width={100} />
                                                <Image src={item.doethree} className='doe-1' width={100} />

                                                <h6 className='mt-5'>{item.robet}</h6>
                                                <p>{item.bus}</p>
                                                <h6>{item.julia}</h6>
                                                <p>{item.bus1}</p>
                                                <h6>{item.sarah}</h6>
                                                <p>{item.bus2}</p>
                                            </div>
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
            <div className='text-center mt-5 mb-5' > <Image src={threedots} className='mt-3 mb-5' /> </div>
        </div>

    )
}

export default Sectionfive