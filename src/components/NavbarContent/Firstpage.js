import React from 'react'
import first from './Images/first1.png'
import second from './Images/second1.png'
import third from './Images/third1.png'
import fourth from './Images/fourth1.png'
import './Firstpage.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { templateSelector } from "../../action"

export default function Firstpage() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleClickFirst = () => {
    dispatch(templateSelector("first"))
    navigate('/resumetemplates/resumetemplate/personalinfo')
  }
  const handleClickSecond = () => {
    dispatch(templateSelector("second"))
    navigate('/resumetemplates/resumetemplate/personalinfo')
  }
  const handleClickThird = () => {
    dispatch(templateSelector("third"))
    navigate('/resumetemplates/resumetemplate/personalinfo')
  }
  const handleClickFourth = () => {
    dispatch(templateSelector("fourth"))
    navigate('/resumetemplates/resumetemplate/personalinfo')
  }

  return (
    <>
    <div className='mainImgBox'>
        <Button onClick={handleClickFirst} variant='text'><div className='imgBox'><img style={{height: "100%", width: "100%"}} src={second} alt="" /></div></Button>
        <Button onClick={handleClickSecond} variant='text'><div className='imgBox'><img style={{height: "100%", width: "100%"}} src={first} alt="" /></div></Button>
        <Button onClick={handleClickThird} variant='text'><div className='imgBox'><img style={{height: "100%", width: "100%"}} src={third} alt="" /></div></Button>
        <Button onClick={handleClickFourth} variant='text'><div className='imgBox'><img style={{height: "100%", width: "100%"}} src={fourth} alt="" /></div></Button>
    </div>  
    </>
  )
}


