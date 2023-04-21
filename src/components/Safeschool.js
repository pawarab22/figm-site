import React from 'react'

export default function Safeschool() {
    return (
        <div>
            <div className="container mt-5 mb-5 border bg-light ">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <h1 className='p-3'>Safe Steps To Safe Schools</h1>
                    </div>

                    <div className="col-lg-3"></div>

                    <div className="col-lg-4 mt-5">
                        <div className="container w-20 mb-5" >
                            <h6 className='m-2'>Search</h6>
                            <input type="text" className="form-control" style={{ borderRadius: '100px', width: '70%' }} placeholder="What are you looking for" width="50%" />
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <div class="card m-4 p-3" >
                            <img className="card-img-top" src={require('../assets/images/book women.png')} alt="" />
                            <h5 class=" text-center "><button className='btn btn-success text-white rounded-pill '>New</button></h5>
                            <div class="card-body">
                                <h6 className="card-text  p-2">Back To School Family <br /> GuideHelp icon</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div class="card m-4 p-3" >
                            <img className="card-img-top" src={require('../assets/images/education.png')} alt="" />
                            <div class="card-body mt-5">
                                <h6 className="card-text  p-2"> COVID Emergency <br /> PreparednessHelp icon</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div class="card m-4 p-3" >
                            <img className="card-img-top" src={require('../assets/images/frds.png')} alt="" />
                            <h5 class=" text-center "><button className='btn btn-success text-white rounded-pill '>New</button></h5>
                            <div class="card-body">
                                <h6 className="card-text  p-2">COVID-19  <br /> ResourcesHelp icon</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div class="card m-4 p-3" >
                            <img className="card-img-top" src={require('../assets/images/educated.png')} alt="" />
                            <div class="card-body mt-5">
                                <h6 className="card-text  p-2">Early Education  <br /> ProgramsHelp icon</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
