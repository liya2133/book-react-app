import React from 'react'
import NvBar from './NvBar'

const SearchBooks = () => {
  return (
    <div>
        <NvBar />
     <div className="container">
        <h1><b>SEARCH BOOK</b></h1>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">enter book id to search :</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <button className="btn btn-success">submit</button>
                    </div>
                </div>
            </div>
        </div>
     </div>

    </div>
  )
}

export default SearchBooks