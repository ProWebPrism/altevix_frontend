import React from 'react'
import customblueprint from '../../assets/images/innerpart.png'
import '../CustomizedBox/CustomizedBox.css'

function CustomizedBox() {
  return (
    <div className="customizedbox">
        <div className="customized-image">
            <img
                src={customblueprint}
                alt="Decorative"
                className="decorative-image"
            />
        </div>
        <div className="customized-content">
            <div className="customized-head">
                <h3>Symbio HR</h3>
                <h4>Headroom 2430 mm.</h4>
            </div>
            <ul>
                <li>Maximum load: 1600 kg.</li>
                <li>Maximum speed: 1 m/s.</li>
                <li>Car interior height: 2005 mm.</li>
                <li>Landing control panel cabinet.</li>
            </ul>
        </div>
    </div>
  )
}

export default CustomizedBox