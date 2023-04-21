import React from 'react'
import { SlBadge } from "react-icons/sl";
import { BiLogInCircle } from "react-icons/bi";


export default function Certifications() {
    return (
        <div className='m-5'>
            <div className="container border bg-#F3F4F8 mt-5 mb-5 5" style={{ backgroundColor: '#F3F4F8' }}>
                <div className="row ">
                    <div className="col-md-6 mt-5" >
                        <div className="row">
                        <div className='col-lg-4'>
                        </div>
                        <div className='col-lg-4'>

                            <img src={require('../assets/images/cert.png')} alt="" width='500px' height='500px' />

                        </div>
                        <div className='col-lg-4'>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-md-5 mt-5 ml-5">
                        <div className="container mt-5">

                            <h1>Certifications</h1>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-12">
                                <div class="card shadow border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="card text-center" style={{ backgroundColor: 'orange' }}>
                                                    <div className="card-body">
                                                        <h1> < SlBadge className='text-white' /></h1>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-8 text-center mt-4">
                                                <h4>Administrator Certification</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-12">
                                <div class="card shadow border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="card text-center" style={{ backgroundColor: 'orange' }}>
                                                    <div className="card-body">
                                                        <h1> < SlBadge className='text-white' /></h1>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-8 text-center mt-4">
                                                <h4>Administrator Certification</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 mb-5">
                            <div className="col-lg-12">
                                <div class="card shadow border">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="card text-center" style={{ backgroundColor: 'orange' }}>
                                                    <div className="card-body">
                                                        <h1> < SlBadge className='text-white' /></h1>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-8 text-center mt-4">
                                                <h4>Administrator Certification</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 mb-5">
                            <div className="col-lg-12 mt-4 ">
                                <button className='btn btn-warning text-white border p-3'> <h5 className='p-1 m-1'> See More  &nbsp; <BiLogInCircle /> </h5></button>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}
