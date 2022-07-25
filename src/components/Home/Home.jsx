import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, allProducts } from "../../redux/reducer/products";
import Card from "../cards/Card";
import Header from "../Header/Header";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  let products = useSelector(allProducts);

  return (
    <>
      <Header />
      <div className="container content-cards py-4 col-12">
        {Array.isArray(products) ? (
          products.length > 0 ? (
            products.map((pr, index) => (
              <Card
                name={pr.name}
                img={pr.image_url}
                price={pr.price}
                description={pr.description}
                id={pr.id}
                brand={pr.brand.name}
                imgbr={pr.brand.image_url}
              />
            ))
          ) : (
            <h4>No hay productos que mostrar</h4>
          )
        ) : (
          <h4>No hay productos que mostrar</h4>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
