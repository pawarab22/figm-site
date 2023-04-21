import React from 'react'
import {  Nav } from 'react-bootstrap'

import { FaSchool } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { TbCertificate } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";


export default function Homepage() {
    return (
        <div className='bg-#C4C4C4 border'>
            <div className='container '>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4  ">
                        <Nav className="justify-content-right">
                            <Nav.Item className='m-3'>
                                <Nav.Link className='text-success hover '><h5>Home <hr className='weight-bold' style={{ width: '60px' }} /></h5></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='m-3'>
                                <Nav.Link className='text-success hover ' ><h5>Job Aids</h5></Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='m-3'>
                                <button className=' btn btn-success text-white btn-badge' style={{ borderRadius: '28px' }}>Login</button>
                            </Nav.Item>

                        </Nav>
                    </div>
                </div>


            </div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img src={require('../assets/images/Captu.png')} alt="logo" width='300px' height='250px' />
                            <br />
                            <br />
                            <h1><b> Principal Portal</b></h1>
                            <br />

                            <div className="container w-20 mb-5" >
                                {/* <span className="fa fa-search form-control-feedback"></span> */}
                                <input type="text" className="form-control" style={{ borderRadius: '100px', width: '70%' }} placeholder="What are you looking for" width="50%" />
                            </div>
                        </div>
                        <div className="col-lg-7">

                            <div className="container">
                                <div className="row text-white ">
                                    <div className='col-lg-4   pr-2' style={{background:'#AD4BFF'}}>

                                        <div className='text-center rounded-5 '  >
                                            <div className='border mt-4 rounded-circle m-5 bg-light' > <h1> < FaSchool  style={{color:'#AD4BFF'}} /> </h1></div>
                                            <h3 className='mb-2 p-2'>School Tools</h3>

                                        </div>

                                    </div>
                                    <div className='col-lg-4 ' style={{background:'#4B83FF'}}>
                                    <div className='text-center '  >
                                            <div className='border mt-4 rounded-circle m-5 bg-light' > <h1> < ImLocation  style={{color:'#4B83FF'}} /> </h1></div>
                                            <h3 className='mb-2 p-2'>District OPS</h3>

                                        </div>


                                    </div>
                                    <div className='col-lg-4 bg-warning'  >

                                    <div className='text-center '  >
                                            <div className='border mt-4 rounded-circle m-5 bg-light' > <h1> < TbCertificate  style={{color:'orange'}} /> </h1></div>
                                            <h3 className='mb-2 p-2'>Certifications</h3>

                                        </div>
                                    </div>

                                </div>

                            </div>
                            <br />
                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className='col-lg-4  text-white pr-2' style={{background:'#FF651B'}}>


                                    <div className='text-center '  >
                                            <div className='border mt-4 rounded-circle m-5 bg-light' > <h1> < BsFillRocketTakeoffFill  style={{color:'#FF651B'}} /> </h1></div>
                                            <h3 className='mb-2 p-2'>Actions</h3>

                                        </div>

                                    </div>
                                    <div className='col-lg-4 text-white' style={{background:'#FF6B6B'}}>
                                    <div className='text-center '  >
                                            <div className='border mt-4 rounded-circle m-5 bg-light' > <h1> < FaUserGraduate  style={{color:'#FF6B6B'}} /> </h1></div>
                                            <h3 className='mb-2 p-2'>Student Info</h3>

                                        </div>
                                    </div>
                                    <div className='col-lg-4  text-white'  style={{background:'#6BD462'}}>
                                    <div className='text-center '  >
                                            <div className='border mt-4 rounded-circle m-5 bg-light' > <h1> < BiCalendar  style={{color:'#6BD462'}} /> </h1></div>
                                            <h3 className='mb-2 p-2'>What’s New</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#20C287" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" />
                                        </svg>
                                        &nbsp;
                                        &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#C9C9C9" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" />
                                        </svg>
                                        &nbsp;
                                        &nbsp;

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#C9C9C9" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" />
                                        </svg>
                                        &nbsp;
                                        &nbsp;  

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#C9C9C9" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
