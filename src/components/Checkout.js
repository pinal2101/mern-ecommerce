import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
    
      <button 
        onClick={() => navigate('/')} 
        style={{
          marginBottom: '20px',
          padding: '5px 10px',
          cursor: 'pointer',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        ⬅ Back to Home
      </button>

      <h2>Checkout</h2>
      
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        items.map(item => (
          <div 
            className="checkout-item" 
            key={item.id} 
            style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ccc' }}
          >
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
        ))
      )}
      
      <h3 style={{ marginTop: '20px' }}>Total: ${total}</h3>
    </div>
  );
}

export default Checkout;
