import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/reducer/Login";

const ModalLogin = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const Login = (e) => {
    e.preventDefault();
    dispatch(apiLogin(form));
  };

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="login"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content w-100">
          <div className="modal-header">
            <h5 className="modal-title">Log in from</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form className="p-4" onSubmit={Login}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                aria-describedby="emailHelp"
                onChange={onChange}
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onChange}
              />
            </div>

            <button
              disabled={form.name === "" || form.password === ""}
              type="submit"
              className="btn btn-primary"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
