import './header.css';

import logo from '../../assects/logo.svg';
import phone from '../../assects/phone.svg';
import Image from 'next/image';
import line from '../../Assects/line.svg'
    ;
import arrow from '../../Assects/arrow.svg';
import friends from '../../Assects/friends.svg';
// import bg from '../../Assects/bg.svg'
import stars from '../../Assects/stars.svg';
import play from '../../Assects/play.svg';
import li from '../../Assects/li.svg';
import one from '../../Assects/one.svg';
import two from '../../Assects/two.svg';
import three from '../../Assects/three.svg';
import four from '../../Assects/four.svg';
import five from '../../Assects/five.svg';
import six from '../../Assects/six.svg';
const Header = () => {
    return (

        <div className='background-nav position-relative'>

            <nav className="container navbar navbar-expand-lg p-2  text-dark bg-opacity-10 ">
                <div className="container-fluid">
                    <div className='ms-5'>
                        <Image src={logo} className='ms-5' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mb-2 mb-lg-0 mx-auto text-white">
                            <li>
                                Home
                            </li>
                            <li >
                                Pages
                            </li>
                            <li>
                                Service
                            </li>
                            <li >
                                Team
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                        <div className='d-flex '>

                            <h1> <Image src={phone} className=' phone-1 mb-2 ' width={30} /></h1>
                            <div>

                                <h5 className='text-white number'>+25-8995-122 <br /> <span className='ms-3 text-white hotline'>Hotline 24/7 </span></h5>

                            </div>

                        </div>
                    </div>
                </div>

            </nav>
            <div className='position-absolute top-50 end-0 translate-middle-y'>
                <Image src={friends} className='img-fluid friendsimg' />
            </div>
            <div className='container'>
                <div className='row '>
                    {/* col-1 */}
                    <div className='col-md-6'>
                        <div className='ms-3'>

                            <div className='ms-5 main-text '>
                                <h3 className='ms-2 quality text-white'>High quality IT-Solutions <br />for help your problems <br /> about technology.</h3>
                                <p className='mt-4 quis ms-2 text-white'>Quis eleifend quam adipiscing vitae proin sagittis nisl. <br /> Lectus vestibulum mattis.</p>
                            </div>

                            <div class="position-relative search-items ">

                                <div className='mx-5 search-1'>
                                    <input type="text" name="search" placeholder="Enter your phone number"
                                        className="form-control w-75  rounded-5  pill py-2 pe-2 " />
                                </div>

                                <Image className="line img-fluid" src={line} alt="line" />

                                <h6 className='texture'>Request Call</h6>

                            </div>
                        </div>

                    </div>
                    {/* col-2 */}
                    <div className='col-md-6'>

                        <div className='main-div'>


                            <p className='text-white'>(4,5/5) Rating Star by Clients</p>

                            <div className='pb-3'>

                                <p className='text-white' > <Image src={stars} className='img-fluid me-3' /> More details</p>
                            </div>

                            <Image src={play} />
                            <Image src={arrow} className='arrowimg img-fluid' />
                            <div className='d-flex group-li-business'>
                                <p className='text-white business'> Watch a video about our business <Image src={li} className='lii' /> </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className='d-flex group-img '>
                    <div className=' mt-1'>
                        <Image src={one} className='img-fluid mt-3 ms-5 first-img' />
                    </div>
                    <div>

                        <Image src={two} width={120} className='img-fluid ms-3 ' />
                    </div>
                    <div>

                        <Image src={three} width={120} className='img-fluid ms-3' />
                    </div>
                    <div>

                        <Image src={four} width={120} className='img-fluid ms-3' />
                    </div>
                    <div>

                        <Image src={five} width={120} className='img-fluid ms-3' />
                    </div>
                    <div>

                        <Image src={six} width={120} className='img-fluid ' />
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Header;