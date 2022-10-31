import React from "react";
import "./FormItems.css"



export const FormItems = ({item}) =>{

    switch (item.type) {
        case 'text':
          return (

            <div className="step-form-input" >
            
                        <label className="form-label">{item.label}</label>
                        <input
                            className=" form-input"
                            type="text"
                            id={item.label}
                            name = {item.name}
                            
                        />

               
                
              
                
            
            </div>
          )
          break;

          case 'number':
          return (

            <div className="step-form-input" >
            
                        <label className="form-label">{item.label}</label>
                        <input
                           className=" form-input"
                            type="text"
                            id={item.label}
                            name = {item.name}
                            
                        />

               
            </div>
          )
          break;

          case 'password':
          return (

            <div className="step-form-input" >
            
                        <label className="form-label">{item.label}</label>
                        <input
                           className=" form-input"
                            type="text"
                            id={item.label}
                            name = {item.name}
                            
                        />

               
            </div>
          )
          break;

          case 'select':
          return (
          <div className="step-form-input">


            <label className="form-label">{item.label}</label>
            <select className=" form-input selector" aria-label={item.label} >
              <option className="option">{item.label}</option>

              {
                item.options.map((opt, index) => {
                  return (
                    <option className="option" value={opt}>{opt}</option>
                  )
                })
              }
            </select>
          </div>
        )

        case 'radio':
          return (

            <div className="step-form-input" >
            
                        <label className="form-label">{item.label}</label>
                        <div className="Radio-Button">
     
                        {
                            item.gender.map(gender => {
                                return(
                                    <>
                                        <label className="form-label">{gender.label}</label>
                                        <input type="radio" name={item.name}/>
                                    </>
                                )
                            })
                        }
                        </div>
                        

               
            </div>
          )

          return (
            <></>
          )
    }

}