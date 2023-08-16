import {
  Button,
  ButtonGroup,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  jobPositionProvider,
  startingYearProvider,
  endingYearProvider,
  companyNameProvider,
  jobDescriptionProvider,
  jobExperienceAdder,
  jobExperienceReducer,
} from "../../action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SecondPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const jobState = useSelector((state) => state.resumeSecondPageInfo);

  const jobList = useSelector((state) => state.resumeJobExpList);

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

  const addButton = () => {
    if (
      jobState.jobPosition !== "" &&
      jobState.startingYear !== "" &&
      jobState.endingYear !== "" &&
      jobState.companyName !== "" &&
      jobState.jobDescription !== ""
    ) {
      let listItem = jobState;
      dispatch(jobExperienceAdder(listItem));
      dispatch(jobPositionProvider(""));
      dispatch(companyNameProvider(""));
      dispatch(startingYearProvider(""));
      dispatch(endingYearProvider(""));
      dispatch(jobDescriptionProvider(""));
    } 
    else {
       toast.error("Please fill the boxes")
    }
  };

  const deleteButton = (indNum) => {
    dispatch(jobExperienceReducer(indNum));
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
          <form style={{ marginTop: "2vw" }}>
            <div
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                fontSize: "3vw",
                marginBottom: "3vw",
              }}
            >
              Work Experiences
            </div>
            <TextField
              label="Job Position"
              value={jobState.jobPosition}
              onChange={(e) => dispatch(jobPositionProvider(e.target.value))}
              type="text"
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Company Name"
              value={jobState.companyName}
              onChange={(e) => dispatch(companyNameProvider(e.target.value))}
              type="text"
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextField
              label="Starting Year"
              value={jobState.startingYear}
              onChange={(e) => dispatch(startingYearProvider(e.target.value))}
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
              value={jobState.endingYear}
              onChange={(e) => dispatch(endingYearProvider(e.target.value))}
              type="number"
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                width: "23vw",
                marginBottom: "3vw",
              }}
            />
            <TextareaAutosize
              value={jobState.jobDescription}
              onChange={(e) => dispatch(jobDescriptionProvider(e.target.value))}
              minRows={6}
              size="lg"
              variant="outlined"
              placeholder="Write something about you job.."
              style={{
                marginLeft: "4vw",
                marginRight: "4vw",
                marginBottom: "3vw",
                width: "54vw",
              }}
            />
            <div
              style={{
                paddingLeft: "30vw",
                marginBottom: "3vw",
                marginTop: "2vw",
              }}
            >
              <Button variant="text" onClick={addButton}>
                Add New <BiPlus />
              </Button>
            </div>
          </form>

          {jobList.length !== 0 &&
            jobList.map((elem, idNo) => {
              return (
                <div
                  key={idNo}
                  style={{
                    marginLeft: "4vw",
                    marginRight: "4vw",
                    marginBottom: "3vw",
                    width: "54vw",
                    borderRadius: "1vw",
                    backgroundColor: "#cceaed",
                    padding: "1vw",
                    fontSize: "1.4vw",
                  }}
                >
                  <div style={{ paddingLeft: "48vw" }}>
                    <Button onClick={() => deleteButton(idNo)} variant="text">
                      <RxCross2 />
                    </Button>
                  </div>
                  <div style={{ marginBottom: "1vw" }}>
                    <span style={{ fontWeight: "bold" }}>
                      JOBS POSITION &nbsp; : &nbsp;{" "}
                    </span>
                    <span>{elem.jobPosition}</span>
                  </div>
                  <div style={{ marginBottom: "1vw" }}>
                    <span style={{ fontWeight: "bold" }}>
                      COMPANY NAME &nbsp; : &nbsp;{" "}
                    </span>
                    <span>{elem.companyName}</span>
                  </div>
                  <div style={{ marginBottom: "1vw" }}>
                    <span style={{ fontWeight: "bold" }}>
                      WORKING YEAR &nbsp; : &nbsp;
                    </span>
                    <span>
                      {elem.startingYear}-{elem.endingYear}
                    </span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      JOB EXPERIENCES &nbsp; : &nbsp;
                    </span>
                    <span>{elem.jobDescription}</span>
                  </div>
                </div>
              );
            })}

          <div
            style={{ width: "22vw", marginLeft: "auto", marginBottom: "1.7vw" }}
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
              onClick={() =>
                {
                  if (jobList.length >= 1) {
                    navigate("/resumetemplates/resumetemplate/education")
                  }
                  else {
                    toast.error("Please add your experiences")
                  }
                }
              }
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
