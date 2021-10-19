import Button from "react-bootstrap/Button"; 
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ( { data } ) => {
    return(
        
<div className='row'>
  {data.map((product) => (
      
      <div className='col-3' key={product.id}>
        
        <Card key={product.id} style={{ width: '18rem', marginTop: '10px' }}>
  <Card.Img variant="top" style={{width: '100px', height: '150px'}} src={product.image} />
  <Card.Body>
    <Card.Title className='cardTitle'>{product.title}</Card.Title>
    {/* <Card.Text>
     {product.description}
    </Card.Text> */}
    <Card.Text>Price:
     {product.price}
    </Card.Text>
    <Link to={`/product/${product.id}`}>
    <Button style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px',
          marginBottom: '5px'
        }}>Details</Button>
        </Link>
  </Card.Body>
</Card>
<hr/><br/>
      </div>
    )
  )};
  </div>

            
       
    );
}

export default Product; 