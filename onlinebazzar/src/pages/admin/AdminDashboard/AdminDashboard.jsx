import React from "react";
import { useState,  } from 'react';

const AdminDashboard = () => {
    const [pname,setPname]=useState('');
    const [pprice,setPprice]=useState('');
    const [pcategory,setPcategory]=useState('');
    const [pdescription,setPdescription]=useState('');
    const [pimage,setPimage]=useState(null);

    const handleImageUpload =(e)=>{
      const file = e.target.files[0];
      const reader =new FileReader()
      reader.onload = () =>{
        setPimage(reader.result)
      }
      if(file){
        reader.readAsDataURL(file)
      }
    }
    
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h3>Admin Dashboard</h3>

          <button
            type="button"
            class="btn btn-danger"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
          >
            Add Product
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add Product
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="">Product Name</label>
                            <input onChange={(e)=> setPname(e.target.value)} type="text" className="form-control" placeholder="Enter Product Name" />

                            <label className="mt-2" htmlFor="">Product Price</label>
                            <input onChange={(e)=> setPprice(e.target.value)} type="text" className="form-control " placeholder="Enter Product Price" />

                            <label className="mt-2" htmlFor="">Product Category</label>
                            <input onChange={(e)=> setPcategory(e.target.value)} type="text" className="form-control" placeholder="Enter Product Category" />

                            <label className="mt-2" htmlFor="">Product Description</label>
                            <textarea onChange={(e)=> setPdescription(e.target.value)} name="" id="" cols="4" rows="4" className="form-control"></textarea>

                            <input onChange={handleImageUpload} type="file" className="form-control mt-3" placeholder="Input Image" />
                            {
                              pimage && <img src={pimage} className="object-cover rounded-3 mt-2" height={'300px'} width={'100%'} alt=""/>
                            }
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table mt-3">
          <thead class="table-info">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* first row */}
            <tr>
              <td>
                <img
                  src="https://picsum.photos/200"
                  className=""
                  alt=""
                  height={50}
                />
              </td>
              <td>Rose</td>
              <td>500</td>
              <td>Flower</td>
              <td>This is special valentines rose.</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-success">
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>

            {/* second row */}
            <tr>
              <td>
                <img
                  src="https://picsum.photos/200"
                  className=""
                  alt=""
                  height={50}
                />
              </td>
              <td>Rose</td>
              <td>500</td>
              <td>Flower</td>
              <td>This is special valentines rose.</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-success">
                    Edit
                  </button>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
