import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAproduct } from "../../../redux/reducer/products";
import { getAllBrands, allBrands } from "../../../redux/reducer/brand";
import Swal from "sweetalert2";

const ModalProduct = () => {
  let user = JSON.parse(localStorage.getItem("userCredentials"));
  const [form, setForm] = useState({
    userName: user.name,
    name: "",
    price: 0,
    description: "",
    b: "",
    image_url: [],
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onChangeImage = (e) => {
    setForm({ ...form, image_url: [e.target.value] });
  };

  const dispatch = useDispatch();
  let brands = useSelector(allBrands);

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  const post = (e) => {
    e.preventDefault();
    dispatch(postAproduct(form));
    setForm({
      userName: "",
      name: "",
      price: 0,
      description: "",
      b: "",
      image_url: [],
    });
    Swal.fire({
      icon: "success",
      text: "Product created",
    }).then((result) => {
      window.location.reload(false);
    });
  };
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="post"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content w-100">
          <div className="modal-header">
            <h5 className="modal-title">Describe your product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form className="p-4" onSubmit={post}>
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
            </div>{" "}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image url
              </label>
              <input
                type="text"
                className="form-control"
                name="image_url"
                id="image"
                onChange={onChangeImage}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label mr-3">
                Brand:{" "}
                <span>
                  * If the brand of you product is not here, first create it in
                  "Add a Brand" button
                </span>
              </label>
              <select
                className="form-select"
                id="brand"
                onChange={onChange}
                name="b"
              >
                <option value="null">Select a brand</option>
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
                form.b === "null" ||
                form.image_url[0] === ""
              }
              type="submit"
              className="btn btn-primary"
            >
              Create product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
