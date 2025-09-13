import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // };
    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // };

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newVal = event.target.value;
        
        setFormData((currData) => {
            // currData[fieldName] = newVal;
            return{...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>  &nbsp; &nbsp; &nbsp;
            <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/> &nbsp; &nbsp;
            <br /><br /><br /><br />
            <label htmlFor="username">Username</label>  &nbsp; &nbsp; &nbsp;
            <input placeholder="enter username" type="text" value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>  &nbsp; &nbsp;
            <br /><br /><br /><br />
            <label htmlFor="password">Password</label>  &nbsp; &nbsp; &nbsp;
            <input placeholder="enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>  &nbsp; &nbsp;
            <button>Submit</button>
        </form>
    );
}