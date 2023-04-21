import React from 'react'
import { BiCalendar } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";
import { GoBook } from "react-icons/go";
import { AiFillCar } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";



export default function Schooltool() {
    return (
        <div className=''>
            <div className=" bg-dark container border-top text-white border-bottom  mt-5 mb-5">
                <div className="row m-5">
                    <div className="col-lg-4 ">
                        <h1>School Tools</h1>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">

                        <div className="container w-20 mb-5" >
                            <h6 className='m-2'>Search</h6>
                            <input type="text" className="form-control" style={{ borderRadius: '100px', width: '70%' }} placeholder="What are you looking for" width="50%" />
                        </div>
                    </div>
                </div>


                <div className="row mb-5 ">
                    <div className="col-lg-3  ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border  border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < BiCalendar className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6  ">
                                <h5 className='mt-4 text-center'>Bell Schedule</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3    ">
                        <div className="row mb-2 ">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4  border border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < IoDocumentTextOutline className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>Annual GATE Report</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3   ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < BiCalendar className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>Bell Schedule</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < IoDocumentTextOutline className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>Annual GATE Report</h5>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mb-5 ">
                    <div className="col-lg-3  ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border  border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < GoBook className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6  ">
                                <h5 className='mt-4 text-center'>E-Library Help icon</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3    ">
                        <div className="row mb-2 ">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4  border border-success border-2 p-3 text-center rounded-circle">
                                <h1>  < AiFillCar className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>E-CAR K-12Help icon </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3   ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < GoBook className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>E-Library Help icon</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3  ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < AiFillCar className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>E-CAR K-12 Help icon</h5>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mb-5 ">
                    <div className="col-lg-3  ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border  border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < IoIosPeople className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6  ">
                                <h5 className='mt-4 text-center'>My TeamHelp icon</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3    ">
                        <div className="row mb-2 ">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4  border border-success border-2 p-2 text-center rounded-circle">
                                <h1>  < SlEnergy className='text-success' /></h1>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>E-CAR K-12 Help icon </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3   ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border border-success border-2 p-2 text-center rounded-circle">
                                <h2>  < IoIosPeople className='text-success' /></h2>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>My TeamHelp icon</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3  ">
                        <div className="row mb-2">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 border border-success border-2 p-2 text-center rounded-circle">
                                <h2>  < SlEnergy className='text-success' /></h2>
                            </div>

                            <div className="col-lg-6 ">
                                <h5 className='mt-4 text-center'>E-CAR K-12 Help icon</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 mb-5 text-center">
                    <div className="col-lg-12 mt-4">
                        <button className='btn btn-success border'> <h6 className='p-1 m-1'> View More  &nbsp; <BiLogInCircle /> </h6></button>
                    </div>
                </div>



            </div>
        </div>
    )
}
