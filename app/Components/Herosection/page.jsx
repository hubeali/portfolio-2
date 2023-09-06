import React from 'react'
import './style.css';
import rectangle from '../../Assects/rectangle.svg'
import Image from 'next/image';
import angle from '../../Assects/angle.svg'
import anglewhite from '../../Assects/anglewhite.svg'
const Herosectionpage = () => {
  return (
    <div>

      <p className=' service'>SERVICES</p>
      <h3 className='text-center we'>We provide All-in-one Solution <br /> for every IT job</h3>
      <div className='mt-5'>

        <div className='container mb-5'>
          <div className='row'>
            {/* card-1 */}
            <div className='col-md-3 p-1'>
              <div class="card card-1 h-100 border border-light">
                <div class="card-body">
                  <Image src={rectangle} className='rectangle' />
                  <h5 className='h5-1 mb-4'>Software <br /> Development</h5>
                </div>
                <p className='para-1 '>Posuere morbi leo urna <br /> molestie at elementum eu <br /> egestas.</p>
                <div>

                  <h6 className='h6-1'>LEARN MORE <Image src={angle} className='img-fluid' /></h6>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className='col-md-3 p-1'>
              <div class="card card-2 h-100 border border-light-subtle">
                <div class="card-body">
                  <h5 className='h5-2 mb-4'>AI Programmer <br /> & Technical</h5>
                </div>
                <p className='para-2 '>Posuere morbi leo urna <br /> molestie at elementum eu <br /> egestas.</p>
                <div>
                  <h6 className='h6-2'>LEARN MORE <Image src={anglewhite} className='img-fluid' /></h6>
                </div>
              </div>
            </div>
            {/* </card-3>     */}
            <div className='col-md-3 p-1'>
              <div class="card card-3 h-100 border border-light-subtle">
                <div class="card-body">
                  <h5 className='h5-3 mb-4'>System Application Development</h5>
                </div>
                <p className='para-3'>Posuere morbi leo urna <br /> molestie at elementum eu <br /> egestas.</p>
                <div>

                  <h6 className='h6-3'>LEARN MORE <Image src={angle} className='img-fluid' /></h6>
                </div>
              </div>
            </div>
            {/* card-4 */}
            <div className='col-md-3 p-1'>
              <div class="card card-4 h-100 border-light-subtle">
                <div class="card-body">
                  <h5 className='h5-4 mb-4'>Server and Network Solutions</h5>
                </div>
                <p className='para-4'>Posuere morbi leo urna <br /> molestie at elementum eu <br /> egestas.</p>
                <div>

                  <h6 className='h6-4'>LEARN MORE <Image src={angle} className='img-fluid' /></h6>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
export default Herosectionpage