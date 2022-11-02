import React, { useState } from "react";
import "./Form.css"
import StepProgressBar from "../StepProgressBar/StepProgressBar";
import { Formik, Form, FieldArray } from "formik";




function Form_info(){

    const [index, setIndex] = useState(1);

    const prevButton = ()=> {
        if(index > 1){
            setIndex(prevIndex => prevIndex - 1)
        }
    }

    const nextButton = ()=>{
        if(index <= 2){
            setIndex(prevIndex => prevIndex + 1)
        }
    }


    return(
        
        <div className="P-Container">

            <div className="Progress">
            <StepProgressBar step={index}/>
            </div>


            <div className="Form-det-container">
            <Formik
                initialValues={{
                fname: "",
                lname: "",
                gender: "",
                occupation: "",
                phone: "",
                email: "",
                region:"",
                city: "",
                
                social: [],
                hobbies: [],
                }}
                onSubmit={(values) => {
                console.log(values);
                }}
            >
                {({ values }) => (
                    <Form>

                        <h2 className="section">Personal Information</h2>
                        <p>Enter your personal Information</p>

                        <div className="input-box">
                        <label>First Name:</label>
                        <input name="fname" type="text" />
                        </div>

                        <div className="input-box">
                        <label>Last Name:</label>
                        <input name="lname" type="text" />
                        </div>

                        <div className="input-box">
                        <label>Gender:</label>
                        <input name="gender" type="text" />
                        </div>

                        <div className="input-box">
                        <label>Occupation:</label>
                        <input name="occupation" type="text" />
                        </div>

                        <h2 className="section">Contact Information</h2>
                        <p>Please fill in your current contact information</p>

                        <div className="input-box">
                        <label>Phone Number:</label>
                        <input name="phone" type="text" placeholder="+233 xxxxxxxxx"/>
                        </div>

                        <div className="input-box">
                        <label>Email Address:</label>
                        <input name="email" type="text" />
                        </div>

                        <div className="input-box">
                        <label>Region:</label>
                        <select name="region" type="text">
                                <option value="Greater Accra">Greater Accra</option>
                                <option value="Ashanti Region">Ashanti Region</option>
                                <option value="Eastern Region">Eastern Region</option>
                                <option value="Western Region">Western Region</option>
                                <option value="Central Region">Central Region</option>
                                <option value="Northern Region">Northern Region</option>
                                <option value="Brong Ahafo Region">Brong Ahafo Region</option>
                                <option value="Bono Region">Bono Region</option>
                                <option value="Ahafo Region">Ahafo Region</option>
                                <option value="North East Region">North East Region</option>
                                <option value="Oti Region">Oti Region</option>
                                <option value="Upper East Region">Upper East Region</option>
                                <option value="Upper West Region">Upper West Region</option>
                                <option value="Western North Region">Western North Region</option>
                                <option value="Volta Region">Volta Region</option>
                                <option value="Savannah Region">Savannah Region</option>
                        </select>
                        </div>

                        <div className="input-box">
                        <label>City:</label>
                        <input name="city" type="text" placeholder="eg. Accra, Ashanti"/>
                        </div>

                        <h2 className="section">Courses</h2>
                        <p>Please provide the courses you want to teach</p>

                        

                        <div className="input-box">
                        <FieldArray
                            name="courses"
                            render={(arrayHelpers) => (
                                <div>
                                {values.courses && values.courses.length > 0 ? (
                                    values.courses.map((hobby, index) => (
                                    <div key={index}>
                                        <input name={`courses.${index}`} />
                                        <button
                                        type="button"
                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                        >
                                        -
                                        </button>
                                        <button
                                        type="button"
                                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                        >
                                        +
                                        </button>
                                    </div>
                                    ))
                                ) : (
                                    <button type="button" onClick={() => arrayHelpers.push("")}>
                                    {/* show this when user has removed all hobbies from the list */}
                                    Add courses
                                    </button>
                                )}
                                </div>
                            )}
                            />
                            </div>

                        

                    </Form>
                )}
            </Formik>

            </div>


               

            {/* <div className="Form-det-container">

 
                    <div className="Form-details">

                      
                    </div>                 

                

                    <div className="Form-Footer">
                        <button disabled ={index === 1} onClick={prevButton}>Prev</button>
                        <button onClick={nextButton}>Next</button>
  
                    </div>
            </div> */}




        </div>
        
    )
}
export default Form_info;





