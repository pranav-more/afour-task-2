import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProuct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    const product = { title, description, category, price, image };

    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(() => {
      // history.go(-1);
      history.push('/');
    })
  }
  
 

  return (
    <div className="create">
      <h2>Add a New Product</h2>
      <form onClick={handleSubmit}>
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
       
        <button>Add Product</button>
      </form>
    </div>
  );
}
 
export default AddProuct;