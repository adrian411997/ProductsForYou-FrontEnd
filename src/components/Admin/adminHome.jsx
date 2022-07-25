import React, { useEffect } from "react";
import Buttons from "../Header/buttons";
import { useSelector, useDispatch } from "react-redux";
import {
  allProducts,
  getAllProducts,
  deleteAProduct,
} from "../../redux/reducer/products";
import ModalProduct from "./ModalsForm/ModalProduct";
import ModalEdit from "./ModalsForm/ModalEdit";
import ModalBrandPost from "./ModalsForm/ModalBrandPost";
import { getAllBrands, allBrands } from "../../redux/reducer/brand";
import Footer from "../Home/Footer";
import Swal from "sweetalert2";

const AdminHome = () => {
  let userInfo = JSON.parse(localStorage.getItem("userCredentials"));
  const dispatch = useDispatch();
  let brands = useSelector(allBrands);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBrands());
  }, [dispatch]);
  let allpr = useSelector(allProducts);
  const deleteProduct = (name) => {
    let obToD = { userName: userInfo.name, name: name };
    Swal.fire({
      title: "Do you really want to erase this product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAProduct(obToD)).then((result) => {
          Swal.fire({
            icon: "success",
            text: "Product deleted",
          }).then((result) => {
            window.location.reload(false);
          });
        });
      } else if (result.isDenied) {
        Swal.fire("Product not deleted", "", "info");
      }
    });
  };
  return (
    <>
      <Buttons />
      <div className="container">
        <h3 className="text-center py-3">List of products in Database</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Brand</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(allpr)
              ? allpr.length !== 0
                ? allpr.map((pr, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{pr.name}</td>
                      <td>${pr.price}</td>
                      <td>{pr.description}</td>
                      <td>{pr.brand.name}</td>
                      <td>
                        <button
                          className="btn btn-warning mb-2"
                          title="Edit"
                          data-bs-toggle="modal"
                          data-bs-target="#edit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.0"
                            width={20}
                            height={20}
                            viewBox="0 0 1280.000000 1280.000000"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <g
                              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                              fill="#000000"
                              stroke="none"
                            >
                              <path d="M8325 12790 c-27 -4 -70 -9 -95 -9 -25 -1 -66 -11 -93 -24 -50 -24 -25 1 -1457 -1422 -410 -408 -1422 -1413 -2250 -2235 -2242 -2225 -2759 -2742 -2781 -2777 -11 -18 -38 -97 -59 -175 -21 -79 -93 -345 -160 -593 -67 -247 -175 -648 -240 -890 -119 -442 -337 -1244 -370 -1365 -17 -63 -128 -473 -155 -575 -12 -43 -67 -248 -135 -500 -34 -126 -121 -448 -141 -525 -11 -41 -38 -140 -60 -220 -21 -80 -48 -179 -59 -220 -11 -41 -42 -156 -69 -255 -27 -99 -72 -268 -101 -375 -28 -107 -60 -225 -71 -263 -45 -152 -35 -224 40 -298 74 -75 145 -84 298 -41 38 11 106 30 153 42 47 12 117 31 155 41 39 11 257 69 485 129 427 113 528 140 640 170 108 29 874 233 1183 314 137 37 281 75 357 96 118 32 2611 697 2795 745 99 26 194 54 210 62 45 22 153 129 2305 2268 404 402 1410 1401 2235 2220 2090 2074 1879 1860 1900 1924 12 37 15 67 11 100 -4 25 -8 84 -10 131 -3 66 -17 134 -65 305 -34 121 -98 351 -142 510 -44 160 -91 309 -105 332 -25 44 -89 83 -135 83 -70 -1 -105 -32 -674 -599 -308 -306 -1572 -1562 -2810 -2791 -2911 -2889 -2694 -2670 -2733 -2752 -18 -37 -42 -104 -54 -150 -35 -138 -26 -191 100 -643 l110 -390 -72 -73 -72 -73 -900 -240 c-494 -132 -1112 -296 -1373 -365 l-474 -126 -421 419 c-1271 1263 -1656 1649 -1656 1662 0 8 40 163 89 345 49 182 128 473 175 646 46 173 155 576 241 895 86 319 172 636 190 704 l34 124 73 74 c44 44 78 71 87 68 7 -3 193 -53 413 -111 448 -118 491 -124 639 -85 158 41 172 52 544 420 489 484 3206 3182 4095 4066 415 412 975 968 1243 1235 269 267 497 502 508 522 43 84 13 173 -72 216 -25 12 -272 83 -550 157 -518 139 -590 153 -694 135z" />
                              <path d="M10089 11986 c-32 -12 -70 -33 -85 -45 -16 -12 -234 -226 -484 -475 -250 -249 -1485 -1475 -2745 -2725 -3090 -3068 -2946 -2923 -2980 -2996 -34 -72 -40 -179 -13 -231 27 -50 1734 -1742 1776 -1760 57 -24 164 -15 235 22 68 35 -68 -98 1792 1748 4192 4163 4441 4412 4473 4476 37 75 43 180 14 237 -24 47 -1715 1728 -1765 1755 -48 26 -149 23 -218 -6z" />
                            </g>
                          </svg>
                        </button>
                        <ModalEdit id={pr.id} brands={brands} />
                        <button
                          onClick={() => deleteProduct(pr.name)}
                          className="btn btn-danger text-light"
                          title="Delete"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            viewBox="0 0 24 24"
                            width={20}
                            height={20}
                          >
                            {" "}
                            <path d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                : "No products yet"
              : "No product yet"}
          </tbody>
        </table>
        <div className="py-3">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#post"
            className="btn btn-success text-light mr-3"
          >
            Add a product
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#brands"
            className="btn btn-primary text-light"
          >
            Add a Brand
          </button>
          <ModalProduct />
          <ModalBrandPost brands={brands} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminHome;
