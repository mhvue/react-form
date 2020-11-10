import{useState,useEffect} from "react";

const useForm = (callback,validate) => {
    const [values,setValues] = useState({
        username: "",
        email: "",
        password:"",
        password2: ""
    });

    const [errors,setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        //display errors info 
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    //useEffect will allow to display errors if any. 
    //useEffect will also allow form to submit if no errors
    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    });

    return {handleChange, values, handleSubmit, errors};

}

export default useForm;