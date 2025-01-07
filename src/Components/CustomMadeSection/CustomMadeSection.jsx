import React from 'react'
import custom from '../../assets/images/custom.jpg'
import './CustomMadeSection.css'

const CustomMadeSection = () => {
    return (
        <div className='custom-made-section'>
            <div className="wrapper">
                <div className="section-content">
                <div className="left-side">
                    <img src={custom} alt="" />
                </div>
                <div className="right-side">
                    <h3>SOLUTIONS <span className='highlight'>CUSTOM MADE</span></h3>
                    <p>We are specialists in developing specific projects tailored to the special needs of our clients.
                        We also specialize in elevators in existing buildings with extreme heights.We are specialists in
                        developing specific projects tailored to the special needs of our clients. We also specialize in
                        elevators in existing buildings with extreme heights.</p>
                    <button>About us</button>
                </div>

                </div>


            </div>
        </div>
    )
}

export default CustomMadeSection