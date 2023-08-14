//import { Card, CardHeader, CardBody, CardFooter,Text, Stack,Heading,Divider,Button,ButtonGroup } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import {InputTag} from "./InputTag";
function Signup() {
    
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
