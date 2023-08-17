import React, { useState } from "react";
import "./FirstTemp.css";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FirstTemp() {
  const navigate = useNavigate();

  const image = useSelector((state) => state.profilePictureUpdate);

  const introduction = useSelector((state) => state.resumeFirstPageInfoGiver);

  const mySkill = useSelector((state) => state.resumeSkillList);

  const education = useSelector((state) => state.resumeEducationPage);

  const jobExp = useSelector((state) => state.resumeJobExpList);

  const [value, setValue] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSaveButton = async () => {
    const resume1 = document.querySelector(".first-temp-1");
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
      <div className="first-temp-1">
        <div className="box1">
          <div
            style={{
              backgroundColor: "white",
              width: "17vw",
              height: "17vw",
              margin: "auto",
              marginTop: "6vw",
              borderRadius: "8vw",
              border: "3px solid black",
            }}
          >
            <img
              src={image}
              style={{ width: "100%", height: "100%", borderRadius: "7.8vw" }}
              alt=""
            />
          </div>
          <div className="innerBox1">
            <div className="innerBox11">
              <div style={{ fontSize: "2.5vw" }}>Contact</div>
              <hr style={{ marginTop: "0.5vw" }} />
              <div className="marginAbove">
                <div style={{ fontSize: "1.3vw", fontWeight: "bold" }}>
                  Phone:
                </div>
                <p style={{ fontSize: "1.2vw" }}>{introduction.mobileNo}</p>
              </div>
              <div className="marginAbove">
                <div style={{ fontSize: "1.3vw", fontWeight: "bold" }}>
                  Email:
                </div>
                <p style={{ fontSize: "1.2vw" }}>{introduction.givenEmail}</p>
              </div>
              <div className="marginAbove">
                <div style={{ fontSize: "1.3vw", fontWeight: "bold" }}>
                  Address:
                </div>
                <p style={{ fontSize: "1.2vw" }}>{introduction.address}</p>
              </div>
            </div>
            <div className="innerBox11">
              <div style={{ fontSize: "2.5vw" }}>Education</div>
              <hr style={{ marginTop: "0.5vw" }} />
              <div className="marginAbove">
                <p style={{ fontSize: "1.2vw" }}>{education.qualification}</p>
                <p style={{ fontSize: "1.2vw" }}>
                  {education.collegeStartYear}-{education.collegeEndYear}
                </p>
                <p style={{ fontSize: "1.2vw" }}>{education.university}</p>
              </div>
            </div>
            <div className="innerBox11">
              <div style={{ fontSize: "2.5vw" }}>Expertize</div>
              <hr style={{ marginTop: "0.5vw" }} />
              <ul style={{ marginLeft: "1.4vw", marginTop: "2vw" }}>
                {mySkill.map((elem) => {
                  return (
                    <li style={{ marginBottom: "1vw", fontSize: "1.2vw" }}>
                      {elem}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="innerBox21">
            <p style={{ fontSize: "4vw" }}>
              <span style={{ color: "#323b4c", fontWeight: "bold" }}>
                {introduction.firstName}
              </span>{" "}
              <span style={{ color: "#3f495a" }}>{introduction.lastName}</span>
            </p>
            <p style={{ fontSize: "2vw" }}>Certified Web Developer</p>
            <p
              style={{
                textAlign: "justify",
                marginTop: "1.5vw",
                fontSize: "1.3vw",
              }}
            >
              {introduction.aboutMe}
            </p>
          </div>
          <div className="innerBox22">
            <div
              style={{
                color: "#323b4c",
                fontSize: "2.5vw",
                fontWeight: "bold",
              }}
            >
              Experience
            </div>
            <hr style={{ marginTop: "0.5vw" }} />
            <ul style={{ marginLeft: "4vw", marginTop: "2.5vw" }}>
              {jobExp.map((elem) => {
                return (
                  <li style={{ marginBottom: "2vw" }}>
                    <div
                      style={{
                        fontSize: "1.7vw",
                        color: "#737373",
                        fontWeight: "bold",
                      }}
                    >
                      {elem.startingYear}-{elem.endingYear}
                    </div>
                    <div style={{ fontSize: "1.6vw", color: "#737373" }}>
                      {elem.companyName}
                    </div>
                    <div
                      style={{
                        fontSize: "1.6vw",
                        color: "#737373",
                        fontWeight: "bold",
                        marginTop: "0.7vw",
                        marginBottom: "0.7vw",
                      }}
                    >
                      {elem.jobPosition}
                    </div>
                    <p
                      style={{
                        fontSize: "1.3vw",
                        color: "#737373",
                        textAlign: "justify",
                      }}
                    >
                      {elem.jobDescription}
                    </p>
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
