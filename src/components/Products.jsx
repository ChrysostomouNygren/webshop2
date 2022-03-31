import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get(`https://k4backend.osuka.dev/products`);
    setProducts(response.data);
  }

  useEffect(() => {
    // användarlistan
    getProducts();
  }, []);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ProduktID</th>
            <th>Katergori</th>
            <th>Produkt titel</th>
            <th>Pris</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody>
            <tr>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.title}</td>
              <td>€{product.price}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Products;
