function isValidEmail(email){
    // check whether it is a vaild email or not
    return true; 
}

function isValidPassword(password){
    // check whether enter text can be assigned as password or not 
    return true;
}

function isUserFound(enteredUserId){
    // check whether there is an account register under the given userId(i.e email or rollNo)
    return true;
}

function isPasswordMatches(userId,EnteredPassword){
   // check whether password matches with database password
   return true;
}


function validation(parent,userData){
    const errorObj={
        "tag":"",
        "label":""
    }
    if(parent=="login"){
        if(!isValidEmail(userData.InputEmail)){
            errorObj.tag="Email";
            errorObj.label="Not a Vaild Email Address";
        }
        if(!isValidEmail(userData.InputPassword)){
            errorObj.tag="Password";
            errorObj.label="Not a valid password Must contain 8-15 characters length and atleast 1 special charecter";
        }
    }
    if(parent=="signup"){
        if(!isUserFound(userData.InputRollNumber)){
            errorObj.tag="Email";
            errorObj.label="User Not Found";
        }
        if(!isPasswordMatches(userData.InputPassword)){
            errorObj.tag="Password";
            errorObj.label="Wrong passwword .Re-Enter the password or try forgot password";
        }

    }

    return errorObj;
}