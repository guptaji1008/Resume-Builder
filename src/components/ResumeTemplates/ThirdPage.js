import {
  Autocomplete,
  Button,
  ButtonGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  qualificationAdviser,
  universityAdviser,
  collegeStartYearAdviser,
  collegeEndYearAdviser,
} from "../../action";
import { useForm } from "react-hook-form";


export default function ThirdPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const eduState = useSelector((state) => state.resumeEducationPage);

  const {handleSubmit} = useForm()

  const submitButton = () => {
    navigate('/resumetemplates/resumetemplate/keyskill')
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
          <form style={{ marginTop: "2vw" }} onSubmit={handleSubmit(submitButton)}>
            <div
              style={{
                marginBottom: "3vw",
                marginLeft: "4vw",
                marginRight: "4vw",
                fontSize: "3vw",
              }}
            >
              Education Details
            </div>
            <TextField
              label="Qualification"
              value={eduState.qualification}
              onChange={(e) => dispatch(qualificationAdviser(e.target.value))}
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "54vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="University"
              value={eduState.university}
              onChange={(e) => dispatch(universityAdviser(e.target.value))}
              required
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "54vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Starting Year"
              value={eduState.collegeStartYear}
              onChange={(e) =>
                dispatch(collegeStartYearAdviser(e.target.value))
              }
              required
              type="number"
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Ending Year"
              value={eduState.collegeEndYear}
              onChange={(e) => dispatch(collegeEndYearAdviser(e.target.value))}
              required
              type="number"
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />

            <div
              style={{
                width: "22vw",
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
                onClick={() => navigate(-1)}
              >
                Back
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
