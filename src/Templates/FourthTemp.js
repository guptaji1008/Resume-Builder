import React, { useState } from "react";
import "./FourthTemp.css";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FourthTemp() {
  const intro = useSelector((state) => state.resumeFirstPageInfoGiver);

  const jobExpList = useSelector((state) => state.resumeJobExpList);

  const education = useSelector((state) => state.resumeEducationPage);

  const skillList = useSelector((state) => state.resumeSkillList);

  const [value, setValue] = useState("");

  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleSaveButton = async () => {
    const resume1 = document.querySelector(".first-box1");
    setLoader(true);
    const canvas = await html2canvas(resume1);
    const imgData = canvas.toDataURL("img/png");
    const doc = new jsPDF("p", "mm", "a4");
    const componentWidth = doc.internal.pageSize.getWidth();
    const componentHeight = doc.internal.pageSize.getHeight();
    doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
    setLoader(false);
    doc.save(`${value}.pdf`);
    toast.success("Saved successfully")
  };

  return (
    <>
      <div className="first-box1">
        <div>
          <div style={{ fontSize: "4.5vw", marginBottom: "1vw" }}>
            <span style={{ fontWeight: "bold" }}>{intro.firstName}</span>
            {intro.lastName}
          </div>
          <div style={{ fontSize: "2.5vw", marginBottom: "1.5vw" }}>
            {intro.jobTitle}
          </div>
          <div style={{ fontSize: "1.4vw", marginBottom: "5vw" }}>
            {intro.aboutMe}
          </div>
          <hr style={{ border: "1.2px solid", marginBottom: "4vw" }} />
        </div>
        <div style={{ display: "flex", marginBottom: "4vw" }}>
          <div
            style={{
              fontSize: "2vw",
              fontWeight: "bold",
              marginTop: "1vw",
              marginLeft: "5vw",
            }}
          >
            SKILLS:
          </div>
          <div
            style={{
              marginLeft: "28vw",
              display: "flex",
              flexWrap: "wrap",
              width: "40vw",
            }}
          >
            {skillList.map((elem, index) => (
              <div key={index} className="skillElem">
                {elem}
              </div>
            ))}
          </div>
        </div>
        <hr style={{ border: "1.2px solid", marginBottom: "4vw" }} />
        <div style={{ display: "flex", marginBottom: "4vw" }}>
          <div
            style={{ fontSize: "2vw", fontWeight: "bold", marginLeft: "5vw" }}
          >
            QUALIFICATIONS:
          </div>
          <div style={{ marginLeft: "20vw", width: "40vw" }}>
            <div
              style={{
                fontSize: "1.7vw",
                fontWeight: "bold",
                marginBottom: "1vw",
              }}
            >
              {education.qualification}
            </div>
            <div style={{ fontSize: "1.7vw" }}>
              <div style={{ marginBottom: "1vw" }}>{education.university}</div>
              <div>
                {education.collegeStartYear}-{education.collegeEndYear}
              </div>
            </div>
          </div>
        </div>
        <hr style={{ border: "1.2px solid", marginBottom: "4vw" }} />
        <div style={{ display: "flex" }}>
          <div
            style={{ fontSize: "2vw", fontWeight: "bold", marginLeft: "5vw" }}
          >
            EXPERIENCES:
          </div>
          <div style={{ marginLeft: "20vw" }}>
            <ul>
              {jobExpList.map((elem, index) => {
                return (
                  <li key={index}>
                    <div style={{ marginBottom: "3vw" }}>
                      <div
                        style={{
                          fontSize: "1.9vw",
                          fontWeight: "bold",
                          marginBottom: "1vw",
                        }}
                      >
                        {elem.jobPosition}
                      </div>
                      <div style={{ fontSize: "1.7vw", marginBottom: "1vw" }}>
                        {elem.companyName} | {elem.startingYear}-
                        {elem.endingYear}
                      </div>
                      <div style={{ fontSize: "1.3vw", marginBottom: "1vw" }}>
                        {elem.jobDescription}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="first-temp-2">
        <TextField
          sx={{ width: "30vw" }}
          label="Create file name"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div style={{ paddingLeft: "8vw", paddingTop: "1.5vw" }}>
          <Button
            style={{ marginRight: "2vw" }}
            onClick={() => navigate(-1)}
            variant="outlined"
          >
            Back
          </Button>
          <Button
            style={{ marginLeft: "2vw" }}
            variant="contained"
            disabled={loader}
            onClick={handleSaveButton}
          >
            {loader ? "Saving" : "Save"}
          </Button>
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
