import React, { useState } from "react";
import "./Form.css"
import StepProgressBar from "../StepProgressBar/StepProgressBar";
import { FormInputs } from "../FormInputs";
import { FormItems } from "../FormItems/FormItems";


function Form(){

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
        <div className="Container">
        <div className="P-Container">
               <StepProgressBar step={index}/>

            <div className="Form">

 
                    <div className="Form-details">

                      <h2 className="Form-Section">{FormInputs[index-1].section}</h2>
                        
                        {
                            FormInputs[index-1].items.map(item => {
                                    return(
                                        <FormItems key={item.label} item={item}/>
                                    )
                            })
                        }     
                    </div>                 

                

                    <div className="Form-Footer">
                        <button disabled ={index === 1} onClick={prevButton}>Prev</button>
                        <button onClick={nextButton}>Next</button>
  
                    </div>
            </div>




        </div>
        </div>
    )
}
export default Form;





