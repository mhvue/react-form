//logic to check validation for forms

export default function validateInfo(values){
    let errors ={}

    //Username: if no username, then show msg in code block
    if((!values.username.trim())){
        errors.username = "Username required"
    }

    //Email: checking if email is entered and if email is in correct email format 
    // if no email entered
    if(!values.email){
        errors.email = "Email required"
    }
    // if invalid format for email
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    //Password: check if password is entered and if password has correct characters 
    //if no password entered 
    if(!values.password){
        errors.password= "Password required"
    }
    // if invalid number of characters for password
    else if(values.password.length < 6){
        errors.password = "Password requries 6 characters or more"
    }

    //Confirm password 
    //if no values entered for confirming password 
    if(!values.password2){
        errors.password2 = "Password is required"
    }else if (values.password2 !== values.password){
        errors.password2 = "Passwords do not match"
    }

    return errors;
}

