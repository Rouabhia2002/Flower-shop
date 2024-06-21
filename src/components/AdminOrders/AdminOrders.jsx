import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user, authToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      const fetchOrders = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/admin/orders', {
            headers: { Authorization: `Bearer ${authToken}` }
          });
          setOrders(response.data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      fetchOrders();
    }
  }, [user, authToken, navigate]);

  return (
    <div className="admin-container">
      <h2 className="admin-heading">All Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Items</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
              <td>
                {order.items.map(item => (
                  <div key={item.title}>
                    {item.title} x {item.quantity}
                  </div>
                ))}
              </td>
              <td>
                ${order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
