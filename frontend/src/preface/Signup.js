import { InputTag, userData } from "./InputTag";
// import InputTag from "./InputTag";
import { useState } from "react";
import { validation } from "./validateFunc";

function Signup() {
  const [errorMsg, setErrorMsg] = useState("");
  const [isEmailtValid, setMailValidity] = useState(true);
  const [isPasswordValid, setPasswordValidity] = useState(true);

  
  const submissionHandler = (event) => {
    event.preventDefault();
    console.log("Submission handler in working state");
    console.log(userData);
    const errorObj=validation("signup",userData);
    if(errorObj==={}){
      // redirect to home page of website
    }
    else{
      setErrorMsg(errorObj.label);
      if(errorObj.tag=="Email"){
         setMailValidity(false);
      }
      if(errorObj.tag==="Password"){
        setPasswordValidity(false);
      }
    }

  };
    
  return (
    <>
      <div class="container min-vh-100 d-flex align-items-center">
        <div
          class="card mx-auto"
          style={{ width: "22rem", boxShadow: "5px 5px 3px 2px #888888" }}
        >
          <div class="card-body">
            <h5 class="card-title">SignUp</h5>
            <form onSubmit={submissionHandler}>
              
            <InputTag  id="InputName" description="Enter your Name"></InputTag>
              <br />
            <InputTag id="InputRollNumber" description="Enter your Roll number"></InputTag>
            <InputTag  id="InputPassword" description="Enter Password"></InputTag>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  padding: "12px",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                Forgot Password?
              </a>
              <div >
                <button type="submit" class="btn btn-danger btn-block" style={{fontWeight:'bold',width:'100%'}}>
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <small>Don't have an account? &nbsp;</small>
            <a href="#" style={{ textDecoration: "none",fontWeight:'bold', color: "orange" }}>
              SignUP{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
