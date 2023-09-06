import React from 'react'
import './footer.css'
import phone from '../../Assects/phone.svg'
import email from '../../Assects/email.svg'
import map from '../../Assects/map.svg'
import rightangle from '../../Assects/rightangle.svg'
import footerlogo from '../../Assects/footerlogo.svg'
import Image from 'next/image'
import facebook from '../../Assects/facebook.svg'
import twitter from '../../Assects/twitter.svg'
import linkdin from '../../Assects/linkdin.svg'
import whatsapp from '../../Assects/whatsapp.svg'
import buttonicon from '../../Assects/buttonicon.svg'
const Footer = () => {
  return (

    <div>


      <div className='bg-top-footer-color'>
        <div className='container'>
          <div className='row'>

            <div className='col-md-12'>
              <div className='d-flex'>


                <div className='ms-5'>
                  <h3 className='text-white mt-3 Service'>
                    Service discount up to 30% for any project
                  </h3>
                </div>


                <button className='btn-start-project'>START PROJECT NOW</button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* this div use for  footer background color */}
      <div className='bgfooter'>
        <div className='container py-5 '>
          <div className='row text-white my-5'>
            {/* col-1 */}
            <div className='col-md-3'>
              <div className='d-flex'>

                <div className='me-2 mt-2'>
                  <Image src={phone} />
                </div>
                <div>

                  <span>+25-8995-122 <br /> <p className='H ms-1'>  Hotline 24/7 </p></span>
                </div>

              </div>
            </div>
            {/* col-2 */}
            <div className='col-md-3'>
              <div className='d-flex'>

                <div className='me-2 mt-2'>
                  <Image src={email} />
                </div>
                <div>
                  <span>  support@mail.com  <br /> <p className='H ms-1'> Free consult </p></span>
                </div>
              </div>
            </div>
            {/* col-3 */}
            <div className='col-md-3'>
              <div className='d-flex'>
                <div className='me-2 mt-2'>
                  <Image src={map} />
                </div>
                <div>

                  <span>12, Rd. Balista Avenue<br /> <p className='Birmingham ms-1'> Birmingham, England 59985. </p></span>
                </div>
              </div>
            </div>
            {/* col-4 */}
            <div className='col-md-3'>
              <div className='d-flex'>
                <div>

                  <span>+25-8995-122 <br />
                    <p className='H ms-1'>GET IN TOUCH</p></span>
                </div>
                <div className=' ms-4'>
                  <Image src={rightangle} />
                </div>
              </div>
            </div>
          </div>
          <hr className='hr-1' />
        </div>

        <div className='container'>
          <div className='row'>
            {/* col-1 */}
            <div className='col-md-4'>
              <div className='ms-5 ps-2'>

                <Image src={footerlogo} />
                <p className="footer-p mt-4"> Leo urna molestie at elementum. At consectetur lorem donec massa sapien faucibus et. iverra suspendisse potenti nullam ac tortor vitae.</p>
                <div className='d-flex icon-group mt-4'>

                  <Image src={facebook} width={30} />
                  <Image src={twitter} width={30} />
                  <Image src={linkdin} width={30} />
                  <Image src={whatsapp} width={30} />
                </div>
              </div>
            </div>

            {/* col-2 */}
            <div className='col-md-4'>

              {/* display flex two parient items div */}
              <div className='d-flex'>
                <div className='mt-3'>
                  <h6 className='text-white mb-4'>PAGES</h6>
                  <div className='mb-3'>
                    <Image src={rightangle} />
                    <span className='text-white ms-1'>Home</span>
                  </div>
                  <div className='mb-3'>
                    <Image src={rightangle} />
                    <span className='text-white ms-1'>About</span>
                  </div>
                  <div className='mb-3'>
                    <Image src={rightangle} />
                    <span className='text-white ms-1'>Team</span>
                  </div>
                  <div>
                    <Image src={rightangle} />
                    <span className='text-white ms-1'>FAQs</span>
                  </div>
                </div>

                {/* second items parient div*/}

                <div className='ms-5 ps-4 mt-3'>
                  <h6 className='text-white mb-4'>SERVICES</h6>
                  <div className='mb-3'>
                    <Image src={rightangle} />
                    <span className='text-white ms-1 text-group-span'>Software Development</span>
                  </div>
                  <div className='mb-3'>
                    <Image src={rightangle} />
                    <span className='text-white ms-1 text-group-span'>AI Programer</span>
                  </div>
                  <div className='mb-3'>
                    <Image src={rightangle} />
                    <span className='text-white ms-1 text-group-span'>System Application</span>
                  </div>
                  <div>
                    <Image src={rightangle} />
                    <span className='text-white ms-1 text-group-span'>Network Solution</span>
                  </div>
                </div>
                {/* displayed flex div end  */}
              </div>
              {/* col-2 end  */}
            </div>
            {/* col-3 */}
            <div className='col-md-4'>

              <div className='input-h-tag mt-3'>

                <h6 className='text-white mb-4'>NEWSLETTER</h6>

                <div className='mb-3'>
                  <Image src={buttonicon} className=' button-icon' />
                  <input type="text" className='rounded-pill py-3 ps-3 input-footer' placeholder='Enter your email' />
                </div>
                <div className='mb-3'>

                  <p className='text-white ms-1 footer-span'>Nisl rhoncus mattis rhoncus urna neque viverra. <b>Unsubscribe</b></p>
                </div>
              </div>
              {/* col-3 end  */}
            </div>
            {/* row div end  */}
          </div>
          {/* container div end  */}
        </div>
        <div className='mt-5'>

          <div className='text-center text-white py-5 mt-5 '>
            <p className='mt-5 pt-4'>© Copyright by AltDesain-Studio – All right reserved.</p>
          </div>
        </div>

        {/* background color footer div end  */}
      </div>
      {/* main parient div end  */}
    </div>
  )
}

export default Footer