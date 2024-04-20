import React, { useState, useEffect } from 'react';
import SERVER_URL from '../config';
import './Productcomponent.css'
const ProductComponent = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/product/getproduct`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        console.log(data);
        setProductData(data.productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='product-border'>
      {productData.map(product => (
        <div key={product._id} className="product-card" >
          <img src={product.image} alt={product.productname}  style={{width:'200px',height:'300px',alignItems:'center'}}/><hr></hr>
          <button>View Details</button>
          <h3>Name:{product.productname}</h3>
          <p>Description:{product.productdescription}</p>
          <p>Price: {product.productprice}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductComponent;
