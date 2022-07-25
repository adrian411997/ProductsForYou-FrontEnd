import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postABrand } from "../../../redux/reducer/brand";
import Swal from "sweetalert2";

const ModalBrandPost = ({ brands }) => {
  const [error, setError] = useState("");
  let user = JSON.parse(localStorage.getItem("userCredentials"));

  const [form, setForm] = useState({ userName: user.name });
  const onChange = (e) => {
    let findIt = brands.filter((br) => br.name === e.target.value);
    if (findIt.length > 0) {
      setError("Brand exists in database already");
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
      setError("");
    }
  };

  const dispatch = useDispatch();

  const postBrand = (e) => {
    e.preventDefault();
    dispatch(postABrand(form));
    setForm({});
    Swal.fire({
      icon: "success",
      text: "Brand created",
    }).then((result) => {
      window.location.reload(false);
    });
  };
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="brands"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content w-100">
          <div className="modal-header">
            <h5 className="modal-title">Describe your brand</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form className="p-4" onSubmit={postBrand}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label mr-2">
                Name
              </label>
              <span className="text-danger">{error}</span>
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
              <label htmlFor="image_url" className="form-label">
                Logo url
              </label>
              <input
                type="text"
                className="form-control"
                name="image_url"
                id="image_url"
                onChange={onChange}
              />
            </div>
            <button
              disabled={!form.name || !form.image_url || error.length > 0}
              type="submit"
              className="btn btn-primary"
            >
              Create Brand
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalBrandPost;
