import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Template from "./components/Template";
const App = () => {
const [formData,setFormData] =useState({
  name:"",
  fname:"",
  Serial:"",
  started:"",
  ended:"",
  date:"",
})

const [submittedData, setSubmittedData] = useState(null);
const [allData, setAllData]=useState([]);

const handleSubmit =  async (e)=>{
  e.preventDefault();
  try{
    await axios.post("http://localhost:5000/submit",formData);
    alert("from submitted successfully!");
     setFormData({name:"",fname:"",Serial:"",started:"",ended:"",date:""});
  }catch(error){
    alert("Error in Submitting form!");
  }
 
};
const handleInputChange = (e)=>{
  const {name,emai,phone}= e.target;
  setFormData((preData)=>({
    ...preData,
    [name]: e.target.value,
  }));
};


const generateIDCard = async () => {
  try {
    const response = await axios.get("http://localhost:5000/fetch");
    setAllData(response.data); // Store fetched data in state
  } catch (error) {
    alert("Error fetching data!");
  }
};
const handleGenerateCertificate = () => {
  navigate("/certificate", { state: formData }); // Pass data to the new route
};

  return (
    <>
    
    <div className='form' style={{border: "10px solid black"}}>
      <img src='./logo.png' className='logo' style={{textAlign:"left" , height:"100px",width:"100px" , marginLeft:"60px"}}></img>
     <span style={{textAlign:"center",fontSize:"100px" , marginLeft:"200px"}}>Student Form</span>
     <div className="formdesgin">
     <form onSubmit={handleSubmit} style={{textAlign:"center"}} >
      <label> Name :</label>
      <input type='text'
       name='name'
        value={formData.name}
        onChange={handleInputChange}  
        placeholder='Enter your name'/><br/>

<label> Father name :</label>
      <input type='text'
       name='fname'
        value={formData.fname}
        onChange={handleInputChange}  
        placeholder='Enter father name'/><br/>
      
        <label> Serial no. :</label>
              <input type='text'
              name='Serial'
                value={formData.Serial}
                onChange={handleInputChange}  
                placeholder='Enter Serial no. '/><br/>

         

      <label>Batch started :</label>
      <input 
      type='date' 
      name='started'
      value={formData.started}
      onChange={handleInputChange}
      required 
      placeholder='' /><br/>


      <label>Batch ended :</label> 
      <input 
      type='date' 
      name='ended'
      value={formData.ended}
      onChange={handleInputChange}
      required 
      placeholder='' /><br/>

<label> Date of birth :</label>
      <input type='date'
       name='date'
        value={formData.date}
        onChange={handleInputChange}  
        placeholder=''/><br/>

    

      <button type='submit' name='submit' >Submit</button>
     </form>

     <button onClick={generateIDCard} style={{ padding: "5px 10px", marginBottom: "20px" }}>
        Generate ID Cards
      </button>
      </div>
      {allData.map((data, index) => (
        <Template key={index} data={data} />
      ))}

     </div>
    </>
  )
}




export default App
