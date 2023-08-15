
function isValidEmail(email){
    // check whether it is a vaild email or not
    return /\S+@\S+\.\S+/.test(email);

    return true; 
}

function isValidPassword(password){
    // check whether enter text can be assigned as password or not 


    /*
                          //approach 1

    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regularExpression.test(password);
    */

                        //approach2
    const special_chars=new Set(["!","#","$","@","%","^","&","*","(",")","+","_",",","<","=",">",'"',".",":",";","'","~","`","{","}","[","]","|","/",' ']);
    special_chars.add('\\');
    errors = [];
    if (password.length < 8) {
        errors.push("Your password must contain at least 8 characters");
    }
    if (password.search(/[a-z]/) < 0) {
        errors.push("Your password must contain at least one letter."); 
    }
    if (password.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (password.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    let flag=0;
    let len=password.length
    for(let i=0;i<len;i++)
    {
        if(special_chars.has(password[i]))
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        errors.push("Your password must contain at least one special charecter");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
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