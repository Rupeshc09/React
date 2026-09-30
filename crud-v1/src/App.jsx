import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
const [emp, setEmp] = useState({ no: "", name: "", address: "" })
const [emps, setEmps] = useState([])
const [flag, setFlag] = useState(false)

const setData = (e) => {
setEmp({ ...emp, [e.target.name]: e.target.value })
}

const addRecord = () => {
setEmps([...emps, { ...emp }])
setEmp({ no: "", name: "", address: "" });
}

const deleteBtn = (data) => {
const fildata = emps.filter((ele) => {
return ele.no != data.no;
})
setEmps([...fildata])
}

const editBtn = (data) => {
setEmp({ ...data })
setFlag(true)
}

const updateRecord = () => {
const copydata = emps.filter((ele) => {
return ele.no != emp.no;
})

```
console.log(copydata);
console.log("emp data : ", emp);

setEmps([...copydata, { ...emp }])
setEmp({ no: "", name: "", address: "" })
setFlag(false)
```

}

return (
<> <div className="container mt-5"> <h2 className="text-center mb-4">Employee Management</h2>

```
    <div className="card shadow p-4 mb-4">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="fw-bold">No</td>
            <td>
              <input
                type="text"
                name="no"
                value={emp.no}
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
                name="name"
                value={emp.name}
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
                name="address"
                value={emp.address}
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

    <h3 className="text-center mb-3">Employee Records</h3>

    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {emps.map((ele) => {
            return (
              <tr key={ele.no}>
                <td>{ele.no}</td>
                <td>{ele.name}</td>
                <td>{ele.address}</td>

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
