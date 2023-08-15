import { InputTag, userData } from "./InputTag";
// import InputTag from "./InputTag";
import { useState } from "react";
import { validation } from "./validateFunc";

function Login() {
 
  const [errorMsg, setErrorMsg] = useState("");
  const [isEmailtValid, setMailValidity] = useState(true);
  const [isPasswordValid, setPasswordValidity] = useState(true);


  const submissionHandler = (event) => {
    event.preventDefault();
    console.log("Submission handler in working state");
    console.log(userData);
    const errorObj=validation("login",userData);
    if(errorObj.tag === ""){
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
            <h5 class="card-title">Login</h5>
            <form onSubmit={submissionHandler}>
              <InputTag
                id="InputEmail"
                description="Enter email or Roll number"
              />
              {`!isEmailValid && <p>{errorMsg}</p>`}
              <br />
              <InputTag id="InputPassword" description="Password" />
              {`!isPasswordValid && <p>{errorMsg}</p>`}
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
              <div>
                <button
                  type="submit"
                  class="btn btn-danger btn-block"
                  style={{ fontWeight: "bold", width: "100%" }}
                >
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
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "orange",
              }}
            >
              SignUP{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
