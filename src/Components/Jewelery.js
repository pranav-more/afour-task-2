import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Jewelery = () => {

    const [ data, setData] = useState([]);

    const url ='https://fakestoreapi.com/products/category/jewelery';

    const getData = () => {
        axios.get(`${url}`)
        .then((response) => {
            const allData = response.data;
            setData(allData)
            console.log(data);
        }
        );
    }
    useEffect(() => getData(), [])

  return (
    <div className="home">
        <Product data={data}/>
    </div>
  );
}
 
export default Jewelery;
