import React from 'react'
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { AiOutlineDown } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { BiLogInCircle } from "react-icons/bi";

import '../assets/css/Whtsnew.css';
export default function Whatsnew() {
    return (
        <div className='bg-#E5E5E5'>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4"><h1>What's New</h1></div>

                    <div className="col-md-4 ">
                    </div>

                    <div className="col-md-4 text-right">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-8 text-center mt-3">
                                <h3>  <b><VscChevronLeft />  March 2021 <VscChevronRight /> </b></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* left side */}
            <div className="container mt-5">

                <div className="row">

                    <div className="col-md-4">
                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <div className="card shadow ">
                                    <div className="card-body hover-primary">
                                        <div className="row">
                                            <div className="col-md-3 bg-#20C28761">
                                                <h5 className="border  p-1 m-1 rounded-circle text-center border border-success text-success"><h1><ImLocation /></h1></h5>
                                            </div>

                                            <div className="col-md-5 mt-3">
                                                <h5 className=" ">Local District</h5>

                                            </div>

                                            <div className="col-md-4 text-center mt-2">
                                                <p className="card-text"><h2><AiOutlineDown /></h2></p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <div className="card shadow ">
                                    <div className="card-body hover-primary">
                                        <div className="row">
                                            <div className="col-md-3 bg-#20C28761">
                                                <h5 className="border  p-1 m-1 rounded-circle text-center border border-success text-success"><h1><FaSchool /></h1></h5>
                                            </div>

                                            <div className="col-md-5 mt-3">
                                                <h5 className=" ">School Type</h5>

                                            </div>

                                            <div className="col-md-4 text-center mt-2">
                                                <p className="card-text"><h2><AiOutlineDown /></h2></p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="card shadow ">
                                    <div className="card-body hover-primary">
                                        <div className="row">
                                            <div className="col-md-3 bg-#20C28761">
                                                <h5 className="border  p-1 m-1 rounded-circle text-center border border-success text-success"><h1><CgMenuGridO /></h1></h5>
                                            </div>

                                            <div className="col-md-5 mt-3">
                                                <h5 > Catagory</h5>

                                            </div>

                                            <div className="col-md-4 text-center mt-2">
                                                <p className="card-text"><h2><AiOutlineDown /></h2></p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row mt-5 mb-2">
                            <div className="col-lg-12 mt-4">
                                <button className='btn btn-success border'> <h6 className='p-1 m-1'> View More  &nbsp; <BiLogInCircle /> </h6></button>
                            </div>
                        </div>


                    </div>


            {/* right side */}

                    <div className="col-md-8 ">
                        <div className="row mb-3">

                            <div className="col-md-6">
                                <div className="card w-100" >
                                    <div className="card-body">
                                        <h5 className="card-title">Data And Accountability</h5>
                                        <p className="card-text">Fall 2021 School Experience Survey</p>
                                        <div className="col-md-6">
                                            <div className='mt-2 p-2  text-center text-success border border-success rounded-pill w-75 '> <h6 className=''>  <AiTwotoneCalendar />  10-10-2021</h6>  </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card w-100 " >
                                    <div className="card-body">
                                        <h5 className="card-title">Data And Accountability</h5>
                                        <p className="card-text">Fall 2021 School Experience Survey</p>
                                        <div className="col-md-6">
                                            <div className='mt-2 p-2  text-center text-success border border-success rounded-pill w-75 '> <h6 className=''>  <AiTwotoneCalendar />  10-10-2021</h6>  </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-1"></div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="card w-100" >
                                    <div className="card-body">
                                        <h5 className="card-title">Data And Accountability</h5>
                                        <p className="card-text">Fall 2021 School Experience Survey</p>
                                        <div className="col-md-6">
                                            <div className='mt-2 p-2  text-center text-success border border-success rounded-pill w-75 '> <h6 className=''>  <AiTwotoneCalendar />  10-10-2021</h6>  </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card w-100 " >
                                    <div className="card-body">
                                        <h5 className="card-title">Data And Accountability</h5>
                                        <p className="card-text">Fall 2021 School Experience Survey</p>
                                        <div className="col-md-6">
                                            <div className='mt-2 p-2  text-center text-success border border-success rounded-pill w-75 '> <h6 className=''>  <AiTwotoneCalendar />  10-10-2021</h6>  </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-1"></div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="card w-100" >
                                    <div className="card-body">
                                        <h5 className="card-title">Data And Accountability</h5>
                                        <p className="card-text">Fall 2021 School Experience Survey</p>
                                        <div className="col-md-6">
                                            <div className='mt-2 p-2  text-center text-success border border-success rounded-pill w-75 '> <h6 className=''>  <AiTwotoneCalendar />  10-10-2021</h6>  </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card w-100 " >
                                    <div className="card-body">
                                        <h5 className="card-title">Data And Accountability</h5>
                                        <p className="card-text">Fall 2021 School Experience Survey</p>
                                        <div className="col-md-6">
                                            <div className='mt-2 p-2  text-center text-success border border-success rounded-pill w-75 '> <h6 className=''>  <AiTwotoneCalendar />  10-10-2021</h6>  </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-1"></div>
                        </div>




                    </div>

                </div>




            </div>


        </div>
    )
}
