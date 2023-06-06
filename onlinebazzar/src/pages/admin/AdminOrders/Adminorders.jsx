import React, { useEffect, useState } from "react";
import { getAllOrdersApi } from "../../../apis/Api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllOrdersApi()
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container mt-3">
      <h3>Admin Orders</h3>
      {orders.map((order) => (
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <h6>ORDER - {order.orderNumber}</h6>
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                {order.status}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    Pending
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                     In Progress
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                      Delivered
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {order.cart.map((item) => (
                  <tr>
                    <th scope="row">
                      <img src={item.image} alt="" width="50" />
                    </th>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <div>
              <h6>Order Date : 12/12/2021</h6>
            </div>
            <div>
              <h6>Shipping info :{order.shippingAddress} </h6>
            </div>
            <div>
              <h6>Total Price : {order.totalAmount}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
