import React from "react";
import "./Card.css";

const Card = ({ name, img, price, description, id, brand, imgbr }) => {
  let style = { width: "18rem" };
  return (
    <>
      <div className="card" key={id} style={style}>
        <img className="card-img-top" src={img[0]} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#modal${id}`}
            className="btn btn-primary"
          >
            View more details
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        tabIndex="-1"
        id={`modal${id}`}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content w-100">
            <div className="modal-header">
              <h5 className="modal-title">Article details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="content-modal-div">
              <div className="phot 2 w-50">
                <img
                  src={img[0]}
                  width={400}
                  height={400}
                  className="photoPr p-2"
                />
              </div>
              <div className="info-pr p-1">
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <p>Description: {description}</p>
                <p>Brand: </p>
                <img src={imgbr} alt={brand} width={100} height={50} />
              </div>
            </div>{" "}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
