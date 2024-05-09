import React from 'react';
import hero from '../assets/hero.png';
import crown from '../assets/crown.png';
import rocket from '../assets/rocket.png'
import EditableInput from './EditableInput';
import Button from './Button';
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className="header">
        <EditableInput className={"headerQuote"} value={"Success stories"}/>
        <EditableInput className={"headerDesc"} value="Every Success journey we've encountered"/>
      </div>

      <div className="heroSection">
        <div className="imageDiv">
          <img className='heroImg' src={hero}></img>
          <div className="absoluteDiv1">
            <img className='crownImg' src={crown}></img>
            <EditableInput className={"absoluteHeading1"} value="40%"/>

            <EditableInput className={"absoluteText1"} value="Achieved reduction in project execution time by optimising team availability"/>
          </div>

          <div className="absoluteDiv2">
            <div className="rocketImgDiv">
              <img className='rocketImg' src={rocket}></img>
            </div>
            <div className="textContent">
            <EditableInput className={"absoluteHeading2"} value="10 DAYS"/>

            <EditableInput className={"absoluteText2"} value="Staff Deployment"/>
          </div>
        </div>

          <div className="absoluteDiv3">
            <div style={{display: 'flex', alignItems: 'self-end'}}>
              <EditableInput className={"absoluteHeading3"} value="$0.5"/>
              <EditableInput className={"absoluteHeading3Span"} value="MILLION"/>
            </div>

            <EditableInput className={"absoluteText3"} value="Reduced client expenses by saving on hiring and employee costs."/>
          </div>
        </div>

        <div className="heroTextDiv">
          <EditableInput className={"heroDesc"} value="Enhance fortune 50 company’s insights teams research capabilities"/>

          <div className="nextSection">
            <div className="carouselNavDiv">
              <div className='carouselNavigation' style={{background: '#2DA950'}}></div>
              <div className='carouselNavigation'></div>
              <div className='carouselNavigation'></div>
            </div>

            <div>
              <Button className={"exploreBtn"} text={"Explore More"} img={<IoIosArrowRoundForward size={30}/>}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

