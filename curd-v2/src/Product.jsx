import { useEffect, useState } from 'react'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [product, setProduct] = useState({ id: "", title: "", price: "" })
  const [products, setProducts] = useState([])
  const [flag, setFlag] = useState(false)

  const setData = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value }) 
  }

  const addRecord = () => {
    setProducts([...products, { ...product }])
    setProduct({ id: "", title: "", price: "" });
  }

  const deleteBtn = (data) => {
    const fildata = products.filter((ele) => {
      return ele.id != data.id;
    })
    setProducts([...fildata])
  }

  const editBtn = (data) => {
    setProduct({ ...data })
    setFlag(true)
  }

  const updateRecord = () => {
    const copydata = products.filter((ele) => {
      return ele.id != product.id;
    })



    setProducts([{ ...product },...copydata])
    setProduct({ id: "", title: "", price: "" })
    setFlag(false);

  }

  useEffect( () => {
    const fetchData=async()=>{
    const resServer = await fetch("https://dummyjson.com/products");
    const data = await resServer.json();
    setProducts(data.products);
    }
    fetchData()
  },[])
 

  return (
     <> <div className="container mt-5"> <h2 className="text-center mb-4">Employee Management</h2>


    <div className="card shadow p-4 mb-4">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="fw-bold">No</td>
            <td>
              <input
                type="text"
                name="id"
                value={product.id}
                onChange={setData}
                className="form-control"
              />
            </td>
          </tr>

          <tr>
            <td className="fw-bold">Name</td>
            <td>
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={setData}
                className="form-control"
              />
            </td>
          </tr>

          <tr>
            <td className="fw-bold">Address</td>
            <td>
              <input
                type="text"
                name="price"
                value={product.price}
                onChange={setData}
                className="form-control"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="text-center">
        <button onClick={addRecord} className="btn btn-primary me-2">
          Add Record
        </button>

        {flag && (
          <button onClick={updateRecord} className="btn btn-success">
            Update
          </button>
        )}
      </div>
    </div>

    <h3 className="text-center mb-3">Product Details</h3>

    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {products.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.price}$</td>

                <td>
                  <button
                    onClick={() => { editBtn(ele) }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => { deleteBtn(ele) }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
</> 
  )
}

export default App
