import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/reducer/Login";
import shop from "../../image/shop-icon.png";
import Swal from "sweetalert2";
import bars from "../../image/bars.png";

const Buttons = () => {
  let infoUser = JSON.parse(localStorage.getItem("userCredentials"));
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const out = () => {
    dispatch(logOut());
    Swal.fire({
      icon: "success",
      text: "Log out successfully",
    }).then((result) => {
      navigate("/");
    });
  };
  return (
    <div className="content-header">
      <div className="title-page d-flex align-items-center justify-content-center">
        <img src={shop} alt="shop" width={50} height={50} />
        <h2 className="ml-3">ProductsForYou</h2>
      </div>
      <div className="links align-items-center justify-content-center">
        <Link to="/">Home</Link>
      </div>
      <div
        className="profile d-flex justify-content-center align-items-center"
        id="holding"
      >
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <img src={bars} width={30} height={20} />
        </label>
        <div className="tabs d-flex">
          {infoUser !== null ? (
            <button
              type="submit"
              onClick={out}
              className="btn btn-danger text-light"
            >
              Log out
            </button>
          ) : (
            <button
              className="btn btn-success text-light"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              Log in
            </button>
          )}
          {infoUser !== null ? (
            infoUser.role === "admin" ? (
              <Link to="/admin">
                <button className="ml-2 btn btn-warning text-light">
                  Admin view
                </button>
              </Link>
            ) : (
              <h3 className="ml-2">{infoUser.name}</h3>
            )
          ) : (
            <h3 className="ml-2">Guest</h3>
          )}
        </div>
        <ModalLogin />
      </div>
    </div>
  );
};

export default Buttons;
