import React, { useState } from 'react';
import '../CSS/Donar.css';
import axios from "axios";

const Donar = () => {
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    expirydate:"",
    district: "",
    state: "",
    quantity: ""
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
   
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));

    const newErrors = { ...errors };
    if (value === "") {
      if (name === "name") {
        newErrors.name = "Username required";
      
      }
      if (name === "email") {
        newErrors.email = "Email required";
        
      }
      if (name === "phone") {
        newErrors.phone = "Number required";
     
      }
      if (name === "city") {
        newErrors.city = "City required";
      
      }
      if (name === "district") {
        newErrors.district = "District required";
      
      }
      if (name === "state") {
        newErrors.state = "State required";
      
      }
      if (name === "quantity") {
        newErrors.quantity = "Food quantity required";
      }
      if(name === "expirydate"){
        newErrors.quantity = "Date required"
      }
    } else {
      newErrors[name] = "";
    }
    setErrors(newErrors);
    
  };

  const HandleClick=async(e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};

    if (details.name === "") {
      newErrors.name = 'Username required';
      isValid = false;
    }
    if (details.email === "") {
      newErrors.email = 'Email required';
      isValid = false;
    }
    if (details.phone==="" ){
      newErrors.phone="Phone Number required";
      isValid=false;
    }
    if(details.city===""){
      newErrors.city="City required";
      isValid=false;
    }
    if(details.district===""){
      newErrors.district="District required";
      isValid=false;
    }
    if(details.state===""){
      newErrors.state="State required";
      isValid=false;
    }
    if(details.quantity===""){
      newErrors.quantity="quantity required";
      isValid=false;
    }
    if(details.expirydate===""){
      newErrors.expirydate="Date required";
      isValid=false;
    }
    setErrors(newErrors);
    if(isValid){

      axios.post('http://localhost:3001/donars', 
      {name:details.name,
        email:details.email,
        phone:details.phone,
        city:details.city,
        district:details.district,
        state:details.state,
        quantity:details.quantity,
        expirydate:details.expirydate
        
      }).then(result=>{console.log(result)
        alert("Your donation added succesfully")
         setDetails({
          name: "",
          email: "",
          phone: "",
          city: "",
          district: "",
          state: "",
          quantity: "",
          expirydate:""
         });
        

      })
      .catch(err=>console.log(err))
    }
  
  };

  return (
    <div className='donar-container'>
      <div className='main'>
        <div style={{ marginRight: "700px", marginBottom: "70px" }}>
          <h1 className='title' style={{ color: "#fb7185", fontSize: "50px", fontFamily: "sans-serif" }}>
            Got Surplus Food?<br />
            <span style={{ color: "white" }}> Don't throw it away.</span>
          </h1>
          <p className="para" style={{ color: "white" }}>In every surplus of food, there lies an opportunity to fill an empty plate and nourish a hungry soul.<br />
          The true measure of our wealth is not in what we keep, but in what we give to those who need it most, <br />transforming waste into nourishment.
       
          </p>
          <button className='join'>
            Join Us
          </button>
        </div>
        <div className="form">
          <h2 style={{ marginLeft: "12%" }}>Donating Details</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={details.name}
                    placeholder={errors.name ? errors.name : "Enter Name"}
                    onChange={HandleChange}
                    style={errors.name ? { borderColor: 'red' } : {color:"wh"}}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={details.email}
                    placeholder={errors.email ? errors.email : "Email"}
                    onChange={HandleChange}
                    style={errors.email ? { borderColor: 'red' } : {}}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={details.phone}
                    placeholder={errors.phone ? errors.phone : "Enter your Number"}
                    onChange={HandleChange}
                    style={errors.phone ? { borderColor: 'red'  } : {}}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={details.city}
                    placeholder={errors.city ? errors.city : "City"}
                    onChange={HandleChange}
                    style={errors.city ? { borderColor: 'red' } : {}}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={details.district}
                    placeholder={errors.district ? errors.district : "District"}
                    onChange={HandleChange}
                    style={errors.district ? { borderColor: 'red' } : {}}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={details.state}
                    placeholder={errors.state ? errors.state : "State"}
                    onChange={HandleChange}
                    style={errors.state ? { borderColor: 'red'  } : {}}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={details.quantity}
                    placeholder={errors.quantity ? errors.quantity : "Food Quantity in no of plates"}
                    onChange={HandleChange}
                    style={errors.quantity ? { borderColor: 'red' } : {}}
                  />
                </td>
              </tr>
    
              <tr>
                <td>
                  <input  
                    type="Date"
                    id="expirydate"
                    name="expirydate"
                    value={details.expirydate}
                    placeholder={errors.expirydate ? errors.expirydate : "Enter expected expriy date"}
                    onChange={HandleChange}
                    style={errors.quantity ? { borderColor: 'red' } : {}}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn" style={{ marginRight: "14%" }} onClick={HandleClick}>Donate</button>
        </div>
      </div>
    </div>
  );
}

export default Donar;