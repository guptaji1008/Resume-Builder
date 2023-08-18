import React, { useState } from "react";
import "./ThirdTemp.css";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ThirdTemp() {
  const intro = useSelector((state) => state.resumeFirstPageInfoGiver);

  const jobExpList = useSelector((state) => state.resumeJobExpList);

  const education = useSelector((state) => state.resumeEducationPage);

  const skillList = useSelector((state) => state.resumeSkillList);

  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSaveButton = async () => {
    const resume3 = document.querySelector(".resume-3");
    setLoader(true);
    const canvas = await html2canvas(resume3);
    const imgData = canvas.toDataURL("img/png");
    const doc = new jsPDF("p", "mm", "a4");
    const componentWidth = doc.internal.pageSize.getWidth();
    console.log(componentWidth);
    const componentHeight = doc.internal.pageSize.getHeight();
    doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
    setLoader(false);
    doc.save(`${value}.pdf`);
    toast.success("Saved successfully")
  };

  return (
    <>
      <div
        className="resume-3"
        style={{
          marginTop: "7vw",
          marginLeft: "3vw",
          marginRight: "3vw",
          border: "2px solid black",
          marginBottom: "3vw",
        }}
      >
        <div className="first-box">
          <div style={{ fontSize: "5vw", marginLeft: "6vw" }}>
            {" "}
            <span style={{ fontWeight: "bold" }}>{intro.firstName}</span>{" "}
            <span>{intro.lastName}</span>
            <hr style={{ border: "2.5px solid #545454" }} />
            <div style={{ fontSize: "2.5vw", marginTop: "1.3vw" }}>
              {intro.jobTitle}
            </div>
          </div>

          <div
            style={{
              marginRight: "9vw",
              fontSize: "1.7vw",
              textAlign: "right",
              paddingTop: "3vw",
              width: "40vw",
            }}
          >
            <div>
              {intro.mobileNo}
              <BsFillTelephoneInboundFill
                style={{ marginLeft: "1vw", fontSize: "2.4vw" }}
              />{" "}
            </div>
            <div
              style={{
                display: "flex",
                height: "3vw",
                marginTop: "1.5vw",
                marginBottom: "1vw",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginLeft: "auto" }}>{intro.givenEmail}</div>
              <div>
                <MdEmail
                  style={{
                    marginTop: "0.1vw",
                    marginLeft: "1.6vw",
                    fontSize: "2.4vw",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "3vw",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginLeft: "auto" }}>{intro.address}</div>
              <div>
                <AiFillHome
                  style={{
                    marginTop: "0.1vw",
                    marginLeft: "1.6vw",
                    fontSize: "2.4vw",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "7vw", marginRight: "7vw" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "4vw",
            }}
          >
            <div
              style={{
                fontSize: "2.8vw",
                color: "#545454",
                fontWeight: "bold",
              }}
            >
              ABOUT ME
            </div>
          </div>
          <hr
            style={{
              marginRight: "25vw",
              marginLeft: "25vw",
              marginTop: "1.3vw",
              border: "2px solid #949494",
            }}
          />
          <div
            style={{ marginTop: "2vw", textAlign: "center", fontSize: "1.4vw" }}
          >
            {intro.aboutMe}
          </div>
          <div className="second-box">
            <div style={{ width: "30vw" }}>
              <div style={{ marginBottom: "4vw" }}>
                <div style={{ marginBottom: "2vw" }}>
                  <u style={{ fontSize: "2.2vw" }}>EDUCATION</u>
                </div>
                <div
                  style={{
                    marginLeft: "3vw",
                    fontSize: "1.4vw",
                    fontWeight: "bold",
                    marginBottom: "0.5vw",
                  }}
                >
                  {education.university}
                </div>
                <div
                  style={{
                    marginLeft: "3vw",
                    fontSize: "1.4vw",
                    marginBottom: "0.5vw",
                  }}
                >
                  {education.qualification}
                </div>
                <div
                  style={{
                    marginLeft: "3vw",
                    fontSize: "1.4vw",
                    marginBottom: "0.5vw",
                  }}
                >
                  {education.collegeStartYear} - {education.collegeEndYear}
                </div>
              </div>
              <div style={{ marginBottom: "4vw" }}>
                <div style={{ marginBottom: "2vw" }}>
                  <u style={{ fontSize: "2.2vw" }}>KEY SKILLS</u>
                </div>
                <ul style={{ marginLeft: "4vw", fontSize: "1.4vw" }}>
                  {skillList.map((elem, index) => (
                    <li key={index} style={{ marginBottom: "1vw" }}>
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr style={{ marginBottom: "4vw", border: "2px solid #949494" }} />
            <div>
              <div style={{ marginBottom: "4vw", width: "45vw" }}>
                <div style={{ marginBottom: "2vw" }}>
                  <u style={{ fontSize: "2.2vw" }}>EXPERIENCES</u>
                </div>
                <ul style={{ marginLeft: "2vw" }}>
                  {jobExpList.map((elem, index) => {
                    return (
                      <li key={index}>
                        <div style={{ fontSize: "1.7vw", fontWeight: "bold" }}>
                          {elem.companyName}
                        </div>
                        <div
                          style={{ fontSize: "1.7vw", marginBottom: "0.5vw" }}
                        >
                          {elem.jobPosition} | {elem.startingYear}-
                          {elem.endingYear}
                        </div>
                        <div
                          style={{
                            fontSize: "1.3vw",
                            marginBottom: "1.5vw",
                            textAlign: "justify",
                          }}
                        >
                          {elem.jobDescription}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-temp-2">
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
