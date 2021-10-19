import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [ProductDetails, SetProductDetails] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
            const allData = response.data;
            SetProductDetails(allData)
            console.log(ProductDetails);
        }
        );
    
  }, []);

  const deleteProduct = () => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
    .then(res => {
      console.log(res.data);
      console.log('gg')
     })
    .catch((err) => {
      console.log(err);
    }
    );
  }

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{width: '400px', height:'500px'}} src={ProductDetails.image} />
    <Card.Body>
      <Card.Title style={{
        fontWeight: 'bold'
      }}>{ProductDetails.title}</Card.Title>
      <Card.Text>
        {ProductDetails.description}
      </Card.Text>
      <button style={{ 
          color: 'white', 
          backgroundColor: 'black',
          borderRadius: '4px' 
        }} onClick={() => push("/")}>Go back</button>
      <button style={{ 
          color: 'white', 
          backgroundColor: 'red',
          borderRadius: '4px',
          marginLeft: '5px',   
        }} onClick={() => deleteProduct()}>Delete</button>
      <Link to={`/product/edit/${id}`} style={{ 
          color: 'white', 
          backgroundColor: 'grey',
          borderRadius: '4px',
          padding: '2px',
          marginLeft: '5px',  
          textDecoration: 'none' 
        }} >Edit</Link>
    </Card.Body>
    
  </Card>
  
  );
};

export default ProductDetails;