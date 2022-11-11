import { Form, Formik } from 'formik';
import * as yup from 'yup';
import axios from '../axios';
import React from 'react';
import Sidebar1 from '../../AdminDashboard/Sidebar/Sidebar1';
import Logo from './../../Assets/Klogo.png';
import { Avatar, StyledTitle, StyledSubTitle } from '../../Components/Style';
import { Container, InputContainer, InputField, InputLabel, InputSelect, UploadButton, Wrapper } from './DeleteStyled';


const Delete = () => {

    return(

        <Container>

            <Sidebar1/>

            <Wrapper>


                <Formik>

                {({isSubmitting})=>(
                    <Form>

                        <div className='Logo' >
                            <Avatar image={Logo} />

                            <StyledTitle color='Light black' size={40}>
                            <span style={{font: "normal 36px 'Poppins', cursive", margin: 0}}>Virtual</span><span style={{color:'#e0ac1c', font: "normal 36px 'Poppins', cursive"}}>Library</span>
                          </StyledTitle>

                       </div>

                        <InputContainer>
                                      <InputLabel>CourseName</InputLabel>

                                     
                                            <InputField  className="input-text"
                                                name="courseName"
                                                placeholder="Enter the Course Name"
                                                type="text" 
                                            />
                        </InputContainer>

                        <InputContainer>
        
                                
                                <InputLabel>Programme </InputLabel>
                                    <InputSelect className="input-text2" name='programmeName'>
                                        <option>-- Select Programme --</option>
                                        <option>Agricultural Engineering</option>
                                        <option>Chemical Engineering</option>
                                        <option>Civil Engineering</option>
                                        <option>Geomatic Engineering</option>
                                        <option>Materials Engineering</option>
                                        <option>Mechanical Engineering</option>
                                        <option>Electrical Engineering</option>
                                        <option>Computer Engineering</option>
                                        <option>Aerospace Engineering</option>
                                        <option>Petroleum Engineering</option>
                                        <option>Telecom Engineering</option>
                                        <option>Geological Engineering</option>
                                        <option>Biomedical Engineering</option>
                                        <option>Petrochemical Engineering</option>
                                        <option>Metallurgical Engineering</option>
                                </InputSelect>
                        </InputContainer>

                        <InputContainer>
                                
                                <InputLabel>Level</InputLabel>
                                
                                            <InputSelect className="input-text4" name='level'>
                                            <option>--Select Year--</option>
                                            <option>First Year</option>
                                            <option>Second Year</option>
                                            <option>Third Year</option>
                                            <option>Fourth Year</option>                    
                                 </InputSelect>               
                        </InputContainer> 

                        <InputContainer>
                            
                            <InputLabel>Semester</InputLabel>
                            
                            <InputSelect className="input-text3" name='semester'>
                                <option>--Select Semester--</option>
                                <option>First Semester</option>
                                <option>Second Semester</option>
                            </InputSelect>
                                
                        </InputContainer> 


                   <InputContainer>
                        
                        <InputLabel>File</InputLabel>
                        <div className="input-dropdown">
                            
                            <input  id="filetoUpload" name="filetoUpload" type="file" />
                            
                        </div>  
                        
                  </InputContainer> 

                  {!isSubmitting && (
                    <div style={{textAlign:'center'}}>
                        <UploadButton type="submit" className="action">Upload </UploadButton>
                    </div>
                  )}


                    </Form>
                )}



                </Formik>
            </Wrapper>



        </Container>
    )


}
export default Delete