import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div style={{ padding: '20px' }}>
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: '#4caf50',
          color: 'white',
          padding: '15px',
          borderRadius: '5px',
          zIndex: 1000
        }}>
          Added to cart successfully! &nbsp;
          <button
            onClick={() => navigate('/checkout')}
            style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
          >
            View Checkout
          </button>
        </div>
      )}

      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            padding: '15px',
            margin: '10px',
            width: '200px',
            textAlign: 'center'
          }}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)} style={{ padding: '5px 10px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
