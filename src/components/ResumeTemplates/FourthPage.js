import { Button, ButtonGroup, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  skillAdviser,
  addSkillListAdviser,
  removeSkillListAdviser,
} from "../../action";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FourthPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const skillState = useSelector((state) => state.resumeFourthPage);

  const skillListState = useSelector((state) => state.resumeSkillList);

  const template = useSelector((state) => state.templateDecider)

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
    if (skillState !== "") {
      let newSkill = skillState;
      dispatch(addSkillListAdviser(newSkill));
      dispatch(skillAdviser(""));
    } else {
      toast.error("Please fill the box");
    }
  };

  const removeButton = (index) => {
    dispatch(removeSkillListAdviser(index));
  };

  const previewButton = () => {
    if (skillListState.length >= 1) {
      if (template === "first") {
        navigate('/resumetemplates/resumetemplate/keyskill/preview01')
      }
      else if (template === "second") {
        navigate('/resumetemplates/resumetemplate/keyskill/preview02')
      }
      else if (template === "third") {
        navigate('/resumetemplates/resumetemplate/keyskill/preview03')
      }
    }
    else {
      toast.error("Please add your skill")
    }
  }

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
                marginBottom: "3vw",
                marginLeft: "4vw",
                marginRight: "4vw",
                fontSize: "3vw",
              }}
            >
              Key Skills
            </div>
            <TextField
              label="Add Your Skills"
              value={skillState}
              onChange={(e) => dispatch(skillAdviser(e.target.value))}
              type="text"
              style={{
                marginLeft: "7vw",
                marginRight: "7vw",
                width: "48vw",
                marginBottom: "1vw",
              }}
            />
            <div style={{ paddingLeft: "29vw", marginBottom: "3vw" }}>
              <Button variant="text" onClick={addButton}>
                Add New
              </Button>
            </div>
          </form>

          <div
            style={{
              marginLeft: "7vw",
              marginRight: "7vw",
              marginBottom: "3vw",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {skillListState.map((elem, index) => {
              return (
                <div
                  style={{
                    paddingTop: "0.5vw",
                    paddingBottom: "0.5vw",
                    paddingLeft: "1vw",
                    backgroundColor: "#cceaed",
                    fontSize: "1.6vw",
                    margin: "1vw",
                    borderRadius: "0.7vw",
                  }}
                >
                  {elem}
                  <Button
                    onClick={() => removeButton(index)}
                    style={{ marginLeft: "1.5vw" }}
                  >
                    <RxCross2 />
                  </Button>{" "}
                </div>
              );
            })}
          </div>

          <div
            style={{ width: "25vw", marginLeft: "auto", marginBottom: "1.7vw" }}
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
              onClick={previewButton}
            >
              Preview
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
