import { updateProduct } from "../api/api";
import { useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import ProductModal from "./ProductModal";

const AddProduct = () => {
    const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setnewProduct] = useState({});
  const history = useHistory();

  const closeModal = () => {
    setShowModal(false)
    history.push('/');
}


const handleSubmit = async(e) => {
    e.preventDefault();
    const product = { title, description, category, price, image };


      try {
          const res = await updateProduct(id, product)
          setnewProduct(res.data)
          console.log(res.data)
          setShowModal(true)
          // history.push('/')
      }
      catch (err) {
          console.log(err)
      }

  }
  
 

  return (
    <div className="create">
      <h2>Add Product</h2>
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
       
        <button type="submit">Add Product</button>
      </form>

      <ProductModal data={newProduct} showModal={showModal} closeModal={closeModal} title={"Product added"}/>
    </div>
  );
}
 
export default AddProduct;