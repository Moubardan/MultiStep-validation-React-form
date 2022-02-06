import React, { useState } from "react";
import Congrats from "./Congrats";
import Footer from "./Footer";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [passError, setPassError] = useState("");
  const [confPassError, setConfPassError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [nasError, setNasError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
    nationality: "",
    other: "",
  });
  const FormTitres = ["Sign up", "Personnal Info", "Other", "congrats"];
  const pageDisplay = () => {
    return (
      <form onSubmit={onSubmit}>
        {page === 0 ? (
          <SignUpInfo
            formData={formData}
            setFormData={setFormData}
            passError={passError}
            confPassError={confPassError}
            emailError={emailError}
          />
        ) : page === 1 ? (
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            firstError={firstError}
            lastError={lastError}
          />
        ) : page === 2 ? (
          <OtherInfo
            formData={formData}
            setFormData={setFormData}
            nasError={nasError}
          />
        ) : (
          <Congrats />
        )}
        {page === 2 && (
          <button
            className="submit"
            style={{ display: "inline", marginLeft: "40%" }}
          >
            Submit
          </button>
        )}
      </form>
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    emailError && setPage(0);
    passError && setPage(0);
    confPassError && setPage(0);
    lastError && setPage(1);
    firstError && setPage(1);
    !emailError &&
      !passError &&
      !lastError &&
      !firstError &&
      !confPassError &&
      setPage(3);
  };

  const handlerSubmit = (formData) => {
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      nationality,
    } = formData;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("invalid email format");
    } else {
      setEmailError("");
    }
    if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
      setPassError(
        "Password should contain atleast one number and one special character"
      );
    } else {
      setPassError("");
    }
    if (confirmPassword !== password) {
      setConfPassError("Password not matched");
    } else {
      setConfPassError("");
    }
    if (firstName === "" || firstName === undefined) {
      setFirstError("Firstname is required");
    } else {
      setFirstError("");
    }
    if (lastName === "" || lastName === undefined) {
      setLastError("Lastname is required");
    } else {
      setLastError("");
    }
    if (!nationality) {
      setNasError("Nationality is required");
    } else {
      setNasError("");
    }
  };
  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitres[page]}</h1>
        </div>
        <div className="body">
          {pageDisplay()}
          {page < FormTitres.length - 2 && (
            <Footer
              page={page}
              setPage={setPage}
              handlerSubmit={handlerSubmit}
              formData={formData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
