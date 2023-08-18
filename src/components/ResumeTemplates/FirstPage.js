import {
  Button,
  ButtonGroup,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  firstNameAdviser,
  lastNameAdviser,
  emailAdviser,
  mobileNoAdviser,
  addressAdviser,
  cityAdviser,
  stateAdviser,
  postalCodeAdviser,
  jobTitleAdviser,
  aboutMeAdviser,
} from "../../action/index";
import { useRef } from "react";
import { profilePhotoGiver } from '../../action'

export default function FirstPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const value = useSelector((state) => state.resumeFirstPageInfoGiver);

  const imgRef = useRef(null)

  
  const image = useSelector((state) => state.profilePictureUpdate)
  
  const handleImgClick = () => {
    imgRef.current.click()
  }

  const handleImgChange = (e) => {
    dispatch(profilePhotoGiver(e.target.files[0]))
  }

  const buttons = [
    <Button
      sx={{ width: "23vw", height: "5vw" }}
      key="one"
      onClick={() => navigate("/resumetemplates/resumetemplate/personalinfo")}
    >
      Personal Info
    </Button>,
    <Button
      sx={{ width: "23vw", height: "5vw" }}
      key="two"
      onClick={() => navigate("/resumetemplates/resumetemplate/workexperience")}
    >
      Work Experiences
    </Button>,
    <Button
      sx={{ width: "23vw", height: "5vw" }}
      key="three"
      onClick={() => navigate("/resumetemplates/resumetemplate/education")}
    >
      Education
    </Button>,
    <Button
      sx={{ width: "23vw", height: "5vw" }}
      key="four"
      onClick={() => navigate("/resumetemplates/resumetemplate/keyskill")}
    >
      Key Skills
    </Button>,
  ];

  const { handleSubmit } = useForm();

  const submitButton = () => {
    navigate("/resumetemplates/resumetemplate/workexperience");
    console.log(value);
  };

  const backButton = () => {
    dispatch(firstNameAdviser(""));
    dispatch(lastNameAdviser(""));
    dispatch(emailAdviser(""));
    dispatch(mobileNoAdviser(null));
    dispatch(addressAdviser(""));
    dispatch(cityAdviser(""));
    dispatch(stateAdviser(""));
    dispatch(stateAdviser(""));
    dispatch(postalCodeAdviser(""));
    dispatch(postalCodeAdviser(null));
    dispatch(jobTitleAdviser(""));
    dispatch(aboutMeAdviser(""));
    navigate("/resumetemplates");
  };

  return (
    <>
      <div
        style={{
          marginTop: "8vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "23%",
            height: "19.8vw",
            position: "sticky",
            top: "8vw",
            marginLeft: "3vw",
            boxShadow: "2px 4px 6px",
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {buttons}
          </ButtonGroup>
        </div>
        <div
          style={{
            border: "1px solid black",
            marginRight: "3vw",
            marginLeft: "4vw",
            width: "65%",
            marginBottom: "3vw",
          }}
        >
          <form
            style={{ marginTop: "2vw" }}
            onSubmit={handleSubmit(submitButton)}
          >
            <div
              style={{
                marginBottom: "3vw",
                marginLeft: "4vw",
                marginRight: "4vw",
                fontSize: "3vw",
              }}
            >
              Personal Information
            </div>

            <div style={{width: "15vw", height: "15vw", border: "3px solid black", borderRadius: "7.5vw", marginBottom: "2vw", marginLeft: "auto", marginRight: "auto"}} onClick={handleImgClick}>
              <img style={{width: "100%", height: "100%", borderRadius: "7.5vw"}} src={image} alt="" />
            <input type="file" ref={imgRef} onChange={handleImgChange} style={{display: "none"}}/>
            </div>


            <TextField
              label="First Name"
              value={value.firstName}
              onChange={(e) => dispatch(firstNameAdviser(e.target.value))}
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Last Name"
              value={value.lastName}
              onChange={(e) => dispatch(lastNameAdviser(e.target.value))}
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Email"
              value={value.givenEmail}
              onChange={(e) => dispatch(emailAdviser(e.target.value))}
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Mobile No."
              value={value.mobileNo}
              onChange={(e) => dispatch(mobileNoAdviser(e.target.value))}
              type="number"
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Address"
              value={value.address}
              onChange={(e) => dispatch(addressAdviser(e.target.value))}
              type="text"
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                marginBottom: "3vw",
                width: "54vw",
              }}
            />
            <TextField
              label="City"
              value={value.city}
              onChange={(e) => dispatch(cityAdviser(e.target.value))}
              type="text"
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="State"
              value={value.stateName}
              onChange={(e) => dispatch(stateAdviser(e.target.value))}
              type="text"
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Postal Code"
              value={value.postalCode}
              onChange={(e) => dispatch(postalCodeAdviser(e.target.value))}
              type="text"
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label= "Job Title"
              value={value.jobTitle}
              onChange={(e) => dispatch(postalCodeAdviser(e.target.value))}
              type="text"
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextareaAutosize
              value={value.aboutMe}
              onChange={(e) => dispatch(aboutMeAdviser(e.target.value))}
              required
              minRows={6}
              size="lg"
              variant="outlined"
              placeholder="About me..."
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                marginBottom: "3vw",
                width: "54vw",
              }}
            />
            <div
              style={{
                width: "37vw",
                marginLeft: "auto",
                marginBottom: "1.7vw",
              }}
            >
              <Button
                style={{
                  marginRight: "2vw",
                  paddingTop: "0.7vw",
                  paddingBottom: "0.7vw",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                }}
                variant="outlined"
                onClick={backButton}
              >
                Back to Resume Templates
              </Button>
              <Button
                style={{
                  marginRight: "2vw",
                  paddingTop: "0.7vw",
                  paddingBottom: "0.7vw",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                }}
                variant="contained"
                type="submit"
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
