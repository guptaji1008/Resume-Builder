import React from 'react'
import './Thirdpage.css'
import image from './Images/aboutUs.jpg'
import facebook from './Images/fbIcon.png'
import whatsapp from './Images/waIcon.png'
import twitter from './Images/twIcon.png'
import linkedin from './Images/linkedin.png'

export default function Thirdpage() {
  return (
    <div style={{marginTop: "8vw", display: "flex", marginBottom: "3vw"}}>
      <div style={{ marginLeft: "5vw"}}>
        <div style={{display: "flex"}}>
        <u className='heading' style={{fontSize: "4vw"}}>MY</u>
        <u className='heading' style={{fontSize: "4vw", marginTop: "1vw", marginLeft: "1vw", marginBottom: "5vw"}}>RESUMER'Z</u>
        </div>
        <div style={{width: "50vw", fontSize: "1.3vw", marginBottom: "2vw"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aut omnis amet. Eos sed doloribus rerum, hic voluptatem consequuntur sequi est soluta qui, labore molestias incidunt eligendi officiis rem eaque quidem! Quibusdam quasi sapiente consequatur dolores nihil eveniet, sit tenetur veniam quod ipsum dolorem distinctio magnam sint commodi saepe voluptatum animi inventore eum ut sequi maxime non reiciendis quas. Culpa quod atque architecto minima quas quis blanditiis voluptas ducimus inventore? Optio debitis impedit, necessitatibus quae accusamus quibusdam laudantium quasi voluptates voluptatem delectus modi, molestiae doloribus saepe harum at, soluta aperiam. Quidem, ea nam? Blanditiis unde architecto nemo quis aut molestias.
        </div>
        <div>
            <div style={{fontSize: "2vw", fontWeight: "bold"}}>Share with your friends :</div>
            <div style={{display: "flex", marginLeft: "1vw", marginTop: "1vw"}}>
                <div className='margin-x' onClick={() => {}}><img src={whatsapp} alt="" /></div>
                <div className='margin-x' onClick={() => {}}><img src={facebook} alt="" /></div>
                <div className='margin-x' onClick={() => {}}><img src={linkedin} alt="" /></div>
                <div className='margin-x' onClick={() => {}}><img src={twitter} alt="" /></div>
            </div>
        </div>
      </div>
      <div style={{width: "35vw", height: "35vw", marginLeft: "4vw"}}>
        <img style={{width: "100%", height: "100%"}} src={image} alt="" />
      </div>
    </div>
  )
}
