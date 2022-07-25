import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAProduct } from "../../../redux/reducer/products";
import Swal from "sweetalert2";

const ModalEdit = ({ brands, id }) => {
  let user = JSON.parse(localStorage.getItem("userCredentials"));

  const [form, setForm] = useState({ userName: user.name, id: id });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const edit = (e) => {
    e.preventDefault();
    dispatch(updateAProduct(form));
    setForm({});
    Swal.fire({
      icon: "success",
      text: "Product edited",
    }).then((result) => {
      window.location.reload(false);
    });
  };
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="edit"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content w-100">
          <div className="modal-header">
            <h5 className="modal-title">New detailes of this product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form className="p-4" onSubmit={edit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
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
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                id="price"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="number"
                className="form-control"
                name="description"
                id="description"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="mr-2 form-label">
                Brand:
              </label>
              <select class="form-select" onChange={onChange} name="brand">
                <option>Select a brand</option>
                {Array.isArray(brands)
                  ? brands.length > 0
                    ? brands.map((br) => (
                        <option value={br.name}>{br.name}</option>
                      ))
                    : ""
                  : ""}
              </select>
            </div>
            <button
              disabled={
                form.name === "" ||
                form.price === 0 ||
                form.description === "" ||
                form.brand === ""
              }
              type="submit"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
