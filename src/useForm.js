import{useState,useEffect} from "react";

const useForm = () => {
    const [values,sectValues] = useState({
        username: "",
        email: "",
        password:"",
        password2: ""
    });

    const [errors,setErrors] = useState({});

    const handleChange = e => {
        const {name,value} = e.target
        sectValues({
            ...values,
            [name]: value
        })
    };

    return {handleChange, values};

}

export default useForm;