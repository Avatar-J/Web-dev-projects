// import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar1 from "../Sidebar/Sidebar1";
import UploadFile from "../../Images/upload1.svg";
import Delete from "../../Images/delete.svg"
import React, { useState, useEffect } from "react";
import { Audio } from 'react-loader-spinner'
// import * as FaIcons from 'react-icons/fa';
import axios from "../../utils/axios";
import { Container, NavBar, Wrapper, SectionInfo, BoxInfo, SectionInfo2, BoxInfo2 } from "./DashBoardStyled";
import Charts from "../Charts/Charts"
import Table from "../Table/Table"


function DashBoard() {
    const [allusers, setallusers] = useState("")
    const [isopen, setIsopen] = useState(false);
    const [loading, setloading] = useState(true)

    const showSidebar = () => {
        setIsopen(!isopen)
    }

    useEffect(() => {
        function fetchData() {
            axios.get("/admin/course/users")
                .then(res => {
                    setallusers(res.data.length)
                    setloading(false)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <div className='overlay' >
                
                    <Sidebar1  />
                
                {/* <NavBar>
                    <GiHamburgerMenu className="hamburger" onClick={showSidebar} style={{ paddingLeft: '10px' }} />

                </NavBar> */}

                <Wrapper>

                    <h1 style={{ textAlign: 'center', fontSize: '4rem', color: '#FF652F' }}>
                        Dashboard
                    </h1>

                    <SectionInfo>

                        <BoxInfo>

                            <p>Number of students signed up</p>
                            {loading ? <>
                                <Audio
                                    height="50"
                                    width="50"
                                    color="blue"
                                    ariaLabel="audio-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="wrapper-class"
                                    visible={true}
                                />
                            </> :
                                <p style={{ color: 'blue', fontSize: '2rem', paddingTop: '5px' }}>{allusers}</p>
                            }
                        </BoxInfo>


                        {/* <BoxInfo>
                            <FaIcons.FaChalkboardTeacher className="icon" />
                            Number of tutors
                        </BoxInfo> */}

                        <BoxInfo>
                            <p>Total number of programmes</p>
                            <p style={{ color: 'blue', fontSize: '2rem', paddingTop: '5px' }}>15</p>
                        </BoxInfo>

                    </SectionInfo>
                    <Charts/>

                    <Table/>

                    <SectionInfo2>

                        <BoxInfo2>
                            <img src={UploadFile} alt="upload" />
                            <p>Upload lecture files and pdfs</p>
                        </BoxInfo2>

                        <BoxInfo2>
                            <img src={Delete} alt="upload" />
                            <p>Delete lecture files and pdfs</p>
                        </BoxInfo2>


                    </SectionInfo2>

                    

                </Wrapper>

            </div>

        </Container>
    )
}
export default DashBoard;