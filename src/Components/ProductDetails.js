import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProduct,getAllProducts } from "../api/api";

const ProductDetails = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [ProductDetails, SetProductDetails] = useState({});


    const getData = async () => {
      try {
          const res = await getAllProducts(id);
          SetProductDetails(res.data)
      }
      catch (e) {
          console.log(e)
      }
      getData();
    }
    
    useEffect(() => getData(), [id])


  //delete product
  const delProduct = async (id) => {
    try {
        const res = await deleteProduct(id)
        console.log(res.data)
    }
    catch (e) {
        console.log(e)
    }
}


  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{width: '200px', height:'300px'}} src={ProductDetails.image} />
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
        }} onClick={() => { if(window.confirm('Confirm delete?')) {
          delProduct(ProductDetails.id) }}}>Delete</button>
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