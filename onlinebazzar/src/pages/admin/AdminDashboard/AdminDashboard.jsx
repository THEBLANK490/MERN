import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { addproductApi } from "../../../apis/Api";

const AdminDashboard = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [pimage, setPimage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (e) => {
    // const file = e.target.files[0];
    // const reader = new FileReader();
    // reader.onload = () => {
    //   setPimage(reader.result);
    // };
    // if (file) {
    //   reader.readAsDataURL(file);
    // }
    setPimage(e.target.files[0]);
    const reader = new FileReader()
    reader.onload=()=>{
    setPreviewImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
  };

  const handleSubmit=() => {
    
    const formData = new FormData()
    formData.append("productName",productName)  
    formData.append("productPrice",productPrice)  
    formData.append("productCategory",productCategory)  
    formData.append("productDescription",productDescription)
    formData.append("productImage",pimage)   
    
    //Calling the Api
    addproductApi(formData).then(res =>{
      toast.success("Product added Successfully")
    }).catch(err =>{
      console.log(err);
      toast.error("Product add Failed!")
    })
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
                      <input
                        onChange={(e) => setProductName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                      />

                      <label className="mt-2" htmlFor="">
                        Product Price
                      </label>
                      <input
                        onChange={(e) => setProductPrice(e.target.value)}
                        type="text"
                        className="form-control "
                        placeholder="Enter Product Price"
                      />

                      <label className="mt-2" htmlFor="">
                        Product Category
                      </label>
                      <input
                        onChange={(e) => setProductCategory(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Category"
                      />

                      <label className="mt-2" htmlFor="">
                        Product Description
                      </label>
                      <textarea
                        onChange={(e) => setProductDescription(e.target.value)}
                        name=""
                        id=""
                        cols="4"
                        rows="4"
                        className="form-control"
                      ></textarea>

                      <input
                        onChange={handleImageUpload}
                        type="file"
                        className="form-control mt-3"
                        placeholder="Input Image"
                      />
                      {
                        previewImage && (
                          <img
                            src={previewImage}
                            className="object-cover rounded-3 mt-2"
                            height={"300px"}
                            width={"100%"}
                            alt=""
                          />
                        )
                        // previewImage && <img src={setpreviewImage} className="object-cover rounded-3 mt-2" height={'300px'} width={'100%'} alt=""/>
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
                  <button type="button" class="btn btn-primary" onClick={handleSubmit}>
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
