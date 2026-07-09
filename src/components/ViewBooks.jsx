import React from 'react'
import NvBar from './NvBar';


const ViewBooks = () => {
  return (
        <div>
             <NvBar />
    <div className="container mt-4">
      <h1><b><i>BOOKS TO EXPLORE</i></b></h1>
      <br></br>
      <div className="row g-4">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img
              src="https://i.pinimg.com/originals/e8/2f/cc/e82fcc725b3bd2120dd4622370882507.jpg"
              className="card-img-top"
              alt="Dove Bar"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">Once Upon A Time</h5>
              <p className="card-text fw-bold">Martina Smith</p>
              <p className="card-text fw-bold">250</p>
              <button className="btn btn-success w-100">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img
              src="https://marketplace.canva.com/EAFKA0RgDtw/1/0/1003w/canva-brown-and-orange-elegant-simple-young-adult-fantasy-book-cover-Qb8uSVdJDzw.jpg"
              className="card-img-top"
              alt="Fiama Body Wash"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">Abandoned Kingdom</h5>
              <p className="card-text fw-bold">Claudia Wilson</p>
              <p className="card-text fw-bold">300</p>
              <button className="btn btn-success w-100">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img
              src="https://i5.walmartimages.com/seo/J-K-Rowling-Harry-Potter-and-the-Deathly-Hallows-Harry-Potter-Book-7-Paperback-9781338878981_c8124196-52b3-4877-8611-0382ad622c91.7961243954884342da43223c964482ad.jpeg"
              className="card-img-top"
              alt="Marie Gold"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">Harry Potter</h5>
              <p className="card-text fw-bold">J K Rowling</p>
              <p className="card-text fw-bold">400</p>
              <button className="btn btn-success w-100">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.SK-d2AaUQZRXAuj3mLwuJwHaLW?r=0&pid=Api&P=0&h=180"
              className="card-img-top"
              alt="Tang"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">Goosebumps</h5>
              <p className="card-text fw-bold">R L Stine</p>
              <p className="card-text fw-bold">400</p>
              <button className="btn btn-success w-100">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ViewBooks;