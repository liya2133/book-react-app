import React from 'react'
import NvBar from './NvBar'

const AddBooks = () => {
  return (
    <div>
        <NvBar />
        
        <div className="container">
            <div className="row">
                <h1><b>ADD BOOKS</b></h1>
                <br></br>
                <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">book code</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">author</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">publisher</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">category</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">edition</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                            <label htmlFor="" className="form-label">no. of copies</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                           <label htmlFor="" className="form-label">price</label>
                            <input type="text" className="form-control" /> 
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                           <label htmlFor="" className="form-label">publication year</label>
                            <input type="text" className="form-control" /> 
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4-col-xxl-4">
                             <label htmlFor="" className="form-label">shelf location</label>
                              <input type="text" className="form-control" /> 
                                     
                        </div>
                        <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBooks