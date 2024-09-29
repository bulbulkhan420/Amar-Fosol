import { useState } from 'react';
//import './Registration.css'; // Import your CSS file\
import axios from 'axios';
import styles from './Registration.module.css'

const RegistrationPage = () => {

  const regi_info={
           name:'',
            email:'',
            Phone_num:'',
            password:''        
        }
  const [registration,setRegistration]=useState(regi_info);
  const {name,email,Phone_num,password}=registration;
  const [error, setError] = useState("");
  const [confirmedPassword,setConfirmedPassword]=useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registration);
    alert("Registration successful");
    // try {
    //   const response = await axios.post("http://64.23.146.210:8080/api/v1/auth/register", registration);
    //   console.log(response); // handle success response
    // } catch (error) {
    //   console.error('Registration failed:', error.response); // handle error response
    // }
  };


  const handleChange=(e)=>{
    setRegistration({...registration,[e.target.name]:e.target.value})
  }
  //I used it match password and confirmed password
  const matchPassword =(e)=>{
    setConfirmedPassword(e.target.value);
    if(password !== e.target.value){
        setError("Passwords do not match!");
    }
    else{
        setError("");
    }
  }
  return (
    <div className={styles.login_container}>
      <h2>Registration form</h2>

      <form id="registration_form" onSubmit={handleSubmit}>

        <div className={styles.regi_form}>
          <label htmlFor="name">Full Name</label>
          <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" id="name" name="name" value={name} onChange={handleChange} required />
        </div>


        {/* <div className="regi-form">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" name="id" value={id} onChange={handleChange} required />
        </div> */}

        <div className={styles.regi_form}>
          <label htmlFor="email">Email</label>
          <input  style={{fontWeight: 600,textAlign: 'center'}} type="email" id="email" name="email" value={email} onChange={handleChange} required />
        </div>

        <div className={styles.regi_form}>
          <label htmlFor="Phone_num">Phone number</label>
          <input  style={{fontWeight: 600,textAlign: 'center'}} type="text" id="Phone_num" name="Phone_num" value={Phone_num} onChange={handleChange} required />
        </div>

        <div className={styles.regi_form}>
          <label htmlFor="password">Password</label>
          <input minLength={6} style={{fontWeight: 600,textAlign: 'center'}} type="password" id="password" name="password" value={password} onChange={handleChange} required />
        </div>
        
        <div className={styles.regi_form}>
          <label htmlFor="password">Confirme Password</label>
          <input  style={{fontWeight: 600,textAlign: 'center'}} type="password" id="password" name="password" value={confirmedPassword} onChange={matchPassword} required />
        </div>
    
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* {success && <p style={{ color: "black" }}>{success}</p>} */}

        {/* <div className="regi-form">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleChange} required />
        </div>  */}

        <button type="submit" style={{width:"100%"}}>Register</button>
        {/* <button
  type="submit"
  style={{
    width: "100%",            // Full width button
          // Padding for better spacing
           // Text color
           // Font size
         // Rounded corners
    cursor: "pointer",         // Cursor pointer on hover
    transition: "background-color 0.3s ease", // Smooth transition for hover effect
  }}
  onMouseOver="this.style.color='black'"
  onMouseOut="this.style.color='white'"
>
  Register
</button> */}
      </form>
    </div>
  );
};

export default RegistrationPage;
