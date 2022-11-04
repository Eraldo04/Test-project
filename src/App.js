import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import CreatableSelect from "react-select/creatable";

export const hobbiesOptions = [
  { value: "soccer", label: "Soccer", color: "#00B8D9", isFixed: true },
  { value: "read", label: "Read", color: "#0052CC", isFixed: true },
  { value: "Swim", label: "Swim", color: "#5243AA" },
  { value: "drive", label: "Drive", color: "#FF5630", isFixed: true },
  { value: "eat", label: "Eat", color: "#FF8B00" },
  { value: "shop", label: "Shop", color: "#FFC400" },
  { value: "code", label: "Code", color: "#36B37E" },
  { value: "cook", label: "Cook", color: "#00875A" },
  { value: "clean", label: "Clean", color: "#253858" },
  { value: "sing", label: "Sing", color: "#666666" },
];

const App = () => {
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [hobbies, setHobbies] = useState([])
  console.log(hobbies);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    hobbies: []
  })

  const updateUser = (e) => {
    e.preventDefault()
    setUser(() => {
      return {
        firstname: firstName,
        lastname: lastName,
        email: email,
        hobbies: hobbies
      }
    })
  }

  return (
    <div className="container  mx-auto my-5 bg-light p-3">
      <div className="row gap-3s">
        <div className="col d-flex flex-column gap-3">
          <form>
            <div className="form-group my-1">
              <label forname="firstName">First Name</label>
              <input name="firstName" onChange={e => setFirstname(e.target.value)} type="text" className="form-control" id="firstName" pattern="[A-Za-z]" placeholder="First Name" />
            </div>
            <div className="form-group my-1">
              <label forname="lastName">Last Name</label>
              <input name="lastName" onChange={e => setLastname(e.target.value)} type="text" className="form-control" id="lastName" pattern="[A-Za-z]" placeholder="Last Name" />
            </div>
            <div className="form-group my-1 rounded">
              <label forname="email">Email</label>
              <input name="email" onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group my-1">
              <label forname="hobbies">Hobbies</label>
              <CreatableSelect
                name="hobbies"
                onChange={(data) => { setHobbies(data) }}
                isMulti
                isClearable options={hobbiesOptions} />
            </div>
            <button onClick={updateUser} type="submit" className="btn btn-primary my-2">Submit</button>
          </form>
        </div>
        <div className="col text-left my-5 py-3">
          <p><span className="fw-bold">First Name is:</span> {user.firstname}</p>
          <p><span className="fw-bold">Last Name is:</span> {user.lastname}</p>
          <p><span className="fw-bold">Email:</span> {user.email}</p>
          <p><span className="fw-bold">Hobbies:</span></p>
          <ol>
            {user.hobbies.map((item, index) => <li key={index}>{item.label}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
