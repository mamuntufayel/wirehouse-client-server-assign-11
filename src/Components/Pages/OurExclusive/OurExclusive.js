import React from "react";
import { Button, Card } from "react-bootstrap";
import Useproducts from "../../../Hook/Useproducts";

const OurExclusive = () => {
  const [products] = Useproducts([]);
  return (
    <div className="container">
      <h2 className="text-success text-center my-5">Exclusive</h2>
      <div className="row g-4">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="col-lg-4">
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price:{product.price}</Card.Text>
                  <Card.Text>Description:{product.description}</Card.Text>
                  <Card.Text>Supplier: {product.supplier}</Card.Text>
                  <Button variant="primary">Update</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExclusive;