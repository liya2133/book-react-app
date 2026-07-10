import React, { useState } from 'react'
import NvBar from './NvBar';


const ViewBooks = () => {

 const [data,changeData]=useState(
      [

        { "name": "Once Upon A Time", "avatar": "https://i.pinimg.com/originals/e8/2f/cc/e82fcc725b3bd2120dd4622370882507.jpg","author":"Martina Smith","price":"250" },
   { "name": "Scatter of light", "avatar": "https://tse3.mm.bing.net/th/id/OIP.xADWtSeOXFOEoAdCq6iMhQHaLM?r=0&pid=Api&P=0&h=180","author":"Malindo LO","price":"400" },
   { "name": "Summer of all things", "avatar": "https://tse2.mm.bing.net/th/id/OIP.QaqDrHSrWeTxrJVVkIYl4QHaL2?r=0&pid=Api&P=0&h=180","author":"Nicole","price":"350" },
   { "name": "Harry Potter", "avatar": "https://tse3.mm.bing.net/th/id/OIP.nz68ox5kAYlhxy8S0ArIwwHaLH?r=0&pid=Api&P=0&h=180","author":"JK Rowling","price":"550" },
    { "name": "Last four things", "avatar": "https://tse1.mm.bing.net/th/id/OIP.0qxWWiv5uAS-T2OK11jpawHaLZ?r=0&pid=Api&P=0&h=180","author":"Paul Hoffman","price":"250" }
      ]
    )


  return (


   
        <div>
             <NvBar />
    <div className="container mt-4">
       <h1><b><i>VIEW ALL BOOKS</i></b></h1>
        <br />
      <div className="row g-4">
        {data.map(
          (value,index) => {
            return(
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img
              src={value.avatar}
              className="card-img-top"
              alt="Dove Bar"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{value.name}</h5>
              <p className="card-text fw-bold">{value.author}</p>
              <p className="card-text fw-bold">{value.price}</p>
              <button className="btn btn-success w-100">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
            )
          }
        )}
        
        
        
        

      </div>
    </div>
    </div>
  )
}

export default ViewBooks;