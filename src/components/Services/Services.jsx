import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className="services">

        {/* {left side} */}
        <div className="awesome">
            <span>My Awwsome</span>
            <span>services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam animi 
                <br/>consequatur fugiat? Ut, neque repudiandae!
            </span>
            <button className='button s-button'>Download CV</button>
            <div className='blur s-blur' style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* {rigth side} */}
        <div className='cards'>
            <div>
                <Card emoji = {HeartEmoji}
                heading = {'Design'}
                details = {'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </div>
        </div>
    </div>
  )
}

export default Services