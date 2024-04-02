import React,{useState,useContext} from 'react';
import { userContext } from '../Utils/UserContext';
import '../Components/CartCard.css';


function CardCart() {
    let {product} = useContext(userContext)
    return (
        <>
          <div className="container">
            {product.map((e, i) => {
              const [quantity, setQuantity] = useState(1);
    
              const addQuantity = () => {
                setQuantity(quantity + 1);
              };
    
              const removeQuantity = () => {
                setQuantity(quantity - 1);
              };
            
  return (
    <>
     <div className="card mb-5 border border-secondary" key={i} >
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={e.images}
                      className="img-fluid rounded-start cardImage"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body px-3">
                      <div className="top">
                        <div className="top-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{e.title}</h5>
                          <h4 className="card-title">${e.price}</h4>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text"><b>Brand : </b>{e.brand}</p>
                          <p className="card-text text-success">
                               <b>Discount Offer :</b> <b>{e.discountPercentage}%</b>
                           </p>
                        </div>


                        <div>
                            <p className="card-text">
                            <b>Category : </b>
                             {e.category}
                           </p>
                        </div>
                        <br></br>

                        <div>
                        <p className="card-text">{e.description}</p>
                        </div>
                        <br></br>
                              
                        <div>
                            <p className="card-text text-success">
                            In Stock : {e.stock}
                            </p>
                        </div>
                       <br></br>

                        <p className="card-text">Rating : {e.rating}</p>

                       
                        <div className="d-flex justify-content-between align-items-center">
                         <p className="card-text">
                          <small className="text-muted">
                          Last updated 10 mins ago
                          </small>
                         </p>
                         </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              style={{ marginRight: "10px" }}
                              onClick={() => {
                                removeQuantity();
                              }}
                            >
                              {" "}
                              -{" "}
                            </button>
                            <div className="py-1 quantityText">{quantity}</div>
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              style={{ marginLeft: "10px" }}
                              onClick={() => {
                                addQuantity();
                              }}
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="bottom">

                        
                        <div className="d-flex justify-content-between align-items-center">
                          Total Amount of ({quantity} Items ) :
                          <h5 className="card-text">${e.price * quantity}</h5>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary float-end my-3"
                      >
                        Proceed to Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>          
          );
        })}
        
      </div>
    </>
    )
    }
            
export default CardCart;