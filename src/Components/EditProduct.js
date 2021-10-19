import axios from "axios";
import { useState } from "react";
import { useParams,useHistory } from "react-router-dom";

const EditProduct = () => {
    const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    const product = { title, description, category, price, image };

    // fetch('https://fakestoreapi.com/products', {
    //   method: 'POST',
    //   body: JSON.stringify(product)
    // })
    // .then((res) => {res=>res.json();
    //   console.log(res.json);
    // })
    // .then(() => {
    //   // history.go(-1);
    //   history.push('/');
    // })
    axios.put(`https://fakestoreapi.com/products/${id}`, {body:product})
    .then(res => {
      console.log(res.data);
      console.log('put')
     })
    .catch((err) => {
      console.log(err);
    }
    );
  }
  
 

  return (
    <div className="create">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Product description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Category:</label>
        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <label>price:</label>
        <input
            type='number'
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label>Image url:</label>
        <input
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
       
        <button type="submit">Edit Product</button>
      </form>
    </div>
  );
}
 
export default EditProduct;