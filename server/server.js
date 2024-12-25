const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
const port=3000;

mongoose.connect("mongodb://localhost:27017/aryan");

const formDataSchema = new mongoose.Schema({
    name: {
     type:String 
    },
    fname:{
        type: String
    },
  Serial:{
    type:Number
  },

  started:{
    type: Date
    },

  ended:{
    type: Date
    },
  date:{
    type: Date
    },
});

const FormData = mongoose.model("FormData",formDataSchema);

app.post("/submit",async(req,res)=>{
    const {name,fname,Serial,started,ended,date}=req.body;
    console.log(req.body);
    try {
        const newData = new FormData({name,fname,Serial,started,ended,date});
        await newData.save();
        res.status(201).send("Data saved successfully");
    }catch(error){
        res.status(500).send("Error saving data!")
    }
});

app.get("/fetch",async(req,res)=>{
    try{
        const data =await FormData.find();
        res.status(200).json(data);
    }catch(error){
        res.status(500).send("Error fetching data!");
    }
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
