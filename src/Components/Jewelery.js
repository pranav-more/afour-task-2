import { useState, useEffect } from "react";
import { getCategory } from "../api/api";
import { Container } from 'react-bootstrap'
import Product from "./Product";

const Jewelery = () => {

    const [ data, setData] = useState([]);

  //get all products
  const getData = async () => {
    try {
        const res = await getCategory();
        console.log(res.data.json)
        setData(res.data)
    }
    catch (e) {
        console.log(e)
    }
}
useEffect(() => getData(), [])


  return (
    <Container className="">
    <div className="mt-1">
            <div >

                {
                    data.map((product, id) => (
                        <Product product={product} key={id} />
                    ))
                }
            </div>
        </div> 
</Container>
  );
}
 
export default Jewelery;
