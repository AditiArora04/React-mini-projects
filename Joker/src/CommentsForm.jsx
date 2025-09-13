import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    };

    return(
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label> &nbsp;&nbsp;&nbsp;
                <input type="text" placeholder="usename" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br /><br /> 

                <label htmlFor="remarks">Remarks</label> &nbsp;&nbsp;&nbsp;
                <textarea value={formData.remarks} placeholder="add feew remarks" onChange={handleInputChange} id="remarks" name="remarks"></textarea>
                <br /><br /> 

                <label htmlFor="rating">Rating</label>&nbsp;&nbsp;&nbsp;
                <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    );
}