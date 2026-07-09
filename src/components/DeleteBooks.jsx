import React from 'react'
import NvBar from './NvBar'

const DeleteBooks = () => {
  return (
    <div>
        <NvBar />
        <div className="container">
            <h1><b>DELETE BOOK</b></h1>
            <br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">enter product code</label>
                            <input type="" className="label form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br></br>
                            <button className="btn btn-danger">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBooks