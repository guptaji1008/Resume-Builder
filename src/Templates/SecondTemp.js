import React, { useState } from "react";
import "./SecondTemp.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SecondTemp() {
  const navigate = useNavigate();

  const introduction = useSelector((state) => state.resumeFirstPageInfoGiver);

  const mySkill = useSelector((state) => state.resumeSkillList);

  const education = useSelector((state) => state.resumeEducationPage);

  const jobExp = useSelector((state) => state.resumeJobExpList);

  const image = useSelector((state) => state.profilePictureUpdate);

  const [value, setValue] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSaveButton = async () => {
    const resume2 = document.querySelector(".resume-2");
    setLoader(true);
    const canvas = await html2canvas(resume2);
    const imgData = canvas.toDataURL("img/png");
    const doc = new jsPDF("p", "mm", "a4");
    const componentWidth = doc.internal.pageSize.getWidth();
    const componentHeight = doc.internal.pageSize.getHeight();
    doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
    setLoader(false);
    doc.save(`${value}.pdf`);
    toast.success("Saved Successfully")
  };

  return (
    <>
      <div className="resume-2">
        <div
          style={{
            backgroundColor: "#8C4B55",
            height: "20vw",
            paddingTop: "3vw",
          }}
        >
          <div
            style={{
              fontSize: "6vw",
              fontWeight: "bolder",
              color: "white",
              translate: "50vw 0vw",
              width: "40vw",
            }}
          >
            {introduction.firstName} {introduction.lastName}
          </div>
          <div
            style={{
              fontSize: "2.5vw",
              color: "white",
              translate: "50vw 0vw",
              width: "40vw",
            }}
          >
            Web Developer Enthusiant
          </div>
          <div
            style={{
              width: "24vw",
              height: "24vw",
              backgroundColor: "aliceBlue",
              position: "absolute",
              left: "10vw",
              top: "14vw",
              borderRadius: "12vw",
            }}
          >
            <img
              src={image}
              style={{ width: "100%", height: "100%", borderRadius: "12vw" }}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "10vw",
            marginRight: "10vw",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "35%", marginBottom: "2vw" }}>
            <div style={{ marginTop: "13vw" }}>
              <u
                className="fontBold"
                style={{
                  color: "#7e2334",
                  fontSize: "2.5vw",
                  fontWeight: "bolder",
                }}
              >
                My Contact
              </u>
              <div
                style={{ marginTop: "2vw", fontSize: "1.5vw", display: "flex" }}
              >
                <AiOutlineMail
                  style={{
                    fontSize: "2.5vw",
                    marginRight: "2vw",
                    marginBottom: "0.5vw",
                  }}
                />{" "}
                <div>{introduction.givenEmail}</div>
              </div>
              <div
                style={{ marginTop: "1vw", fontSize: "1.5vw", display: "flex" }}
              >
                <BsFillTelephoneInboundFill
                  style={{
                    fontSize: "2vw",
                    marginRight: "2vw",
                    marginBottom: "0.5vw",
                  }}
                />{" "}
                <div>{introduction.mobileNo}</div>
              </div>
              <div
                style={{ marginTop: "1vw", fontSize: "1.5vw", display: "flex" }}
              >
                <GoLocation
                  style={{
                    fontSize: "2.5vw",
                    marginRight: "2vw",
                    marginBottom: "0.5vw",
                  }}
                />{" "}
                <div>{introduction.address}</div>
              </div>
            </div>
            <div style={{ marginTop: "5vw" }}>
              <u
                className="fontBold"
                style={{
                  color: "#7e2334",
                  fontSize: "2.5vw",
                  fontWeight: "bolder",
                }}
              >
                My Skills
              </u>
              <ul
                style={{
                  marginLeft: "2vw",
                  marginTop: "1.5vw",
                  fontSize: "1.4vw",
                }}
              >
                {mySkill.map((elem) => {
                  return <li style={{ marginBottom: "0.5vw" }}>{elem}</li>;
                })}
              </ul>
            </div>
            <div style={{ marginTop: "3vw" }}>
              <u
                className="fontBold"
                style={{
                  color: "#7e2334",
                  fontSize: "2.5vw",
                  fontWeight: "bolder",
                }}
              >
                Qualifications
              </u>

              <div
                style={{
                  marginBottom: "2vw",
                  marginTop: "1.5vw",
                  fontSize: "1.3vw",
                }}
              >
                <div>
                  {education.qualification} | {education.collegeStartYear}-
                  {education.collegeEndYear}
                </div>
                <div>{education.university}</div>
              </div>
            </div>
          </div>
          <div style={{ width: "55%", marginBottom: "3vw" }}>
            <div style={{ marginTop: "3vw" }}>
              <u
                className="fontBold"
                style={{
                  color: "#7e2334",
                  fontSize: "2.5vw",
                  fontWeight: "bolder",
                }}
              >
                About Me
              </u>
              <div
                style={{
                  textAlign: "justify",
                  marginTop: "1.5vw",
                  fontSize: "1.3vw",
                }}
              >
                {introduction.aboutMe}
              </div>
            </div>
            <div style={{ marginTop: "5vw" }}>
              <u
                className="fontBold"
                style={{
                  color: "#7e2334",
                  fontSize: "2.5vw",
                  fontWeight: "bolder",
                }}
              >
                Experiences
              </u>
              <div style={{ textAlign: "justify", marginTop: "1.5vw" }}>
                <ul
                  style={{
                    marginLeft: "2vw",
                    marginTop: "2.5vw",
                    fontSize: "1.3vw",
                  }}
                >
                  {jobExp.map((elem) => {
                    return (
                      <li style={{ marginBottom: "3vw" }}>
                        <div style={{ fontWeight: "bold" }}>
                          {elem.companyName} | {elem.jobPosition}
                        </div>
                        <div>
                          {elem.startingYear}-{elem.endingYear}
                        </div>
                        <div>{elem.jobDescription}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
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
            onClick={() => navigate(-1)}
            style={{ marginRight: "2vw" }}
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
