import React from "react";

const FormSignUp = () => {
    return(
        <div className= ".form-content-right">
            <form className = "form">
                <h1>Get started with us today!</h1>
                <div className= "form-inputs">
                    <label htmlFor="username"
                        className="form-label">
                        Username
                    </label>
                    <input 
                        id= "username"
                        type="text"
                        name ="username"
                        className="form-input"
                        placeholder= "Enter your username"
                        value = {values.username}
                        onChange={hangleChange}
                    />
                </div>
                <div className= "form-inputs">
                    <label htmlFor="email"
                        className="form-label">
                        Email
                    </label>
                    <input  
                        id = "email"
                        type="text"
                        name ="email"
                        className="form-input"
                        placeholder= "Enter your email"
                    />
                </div>
                <div className= "form-inputs">
                    <label htmlFor="password"
                        className="form-label">
                        Password
                    </label>
                    <input  
                        id = "password"
                        type="text"
                        name ="password"
                        className="form-input"
                        placeholder= "Enter your password"
                    />
                </div>
                <div className= "form-inputs">
                    <label htmlFor="password2"
                        className="form-label">
                        Confirm Password
                    </label>
                    <input  
                        id = "password2"
                        type="text"
                        name ="password2"
                        className="form-input"
                        placeholder= "Enter your password again"
                    />
                </div>
                <button className="form-input-btn"
                    type= "button-submit">Sign me up!
                </button>
                <span className="form-input-login">
                    Already have an Account? Login <a href="#">here</a>
                </span>
            </form>
        </div>

    )
}

export default FormSignUp;