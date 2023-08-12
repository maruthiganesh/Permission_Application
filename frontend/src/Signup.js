//import { Card, CardHeader, CardBody, CardFooter,Text, Stack,Heading,Divider,Button,ButtonGroup } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
function Signup() {
    const placestyle={
        opacity:"0.4",
        backgroundColor:'#faf0d2'
        };
        const css = 
        `
    .my-element {
        background-color: #f00;
    }`
    
  return (
    <>
      <div class="container min-vh-100 d-flex align-items-center">
        <div
          class="card mx-auto"
          style={{ width: "22rem", boxShadow: "5px 5px 3px 2px #888888" }}
        >
          <div class="card-body">
            <h5 class="card-title">SignUp</h5>
            <form>
              <div class="form-group">
                <label for="Inputname" style={{ padding: "8px" }}>
                  Enter your full Name:
                </label>
                <input style={placestyle}
                  type="text"
                  class="form-control"
                  id="Inputname"
                  placeholder="Enter your name"
                />
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <br />
              <div class="form-group">
                <label for="Inputrollnumber" style={{ padding: "8px" }}>
                  Enter your Roll number:
                </label>
                <input style={placestyle}
                  type="text"
                  class="form-control"
                  id="Inputrollnumber"
                  placeholder="Enter your Roll number"
                  
                />
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" style={{ padding: "8px" }}>
                  Password
                </label>
                <input style={placestyle}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
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
