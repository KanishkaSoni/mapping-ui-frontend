import './AddItems.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddItems(){
    let navigate=useNavigate();

    const [model,setModel] = useState('');
    const [modelColor,setModelColor]=useState('');

    function handleAlert(){
        console.log(model);
        console.log(modelColor);
        alert("Vehicle Added Successfully!!");
        navigate('/additem');
        // return <Alert variant="filled" severity="success">This is a success alert — check it out!</Alert>
    }
  
    const handleChangeModel = (event) => {
        setModel(event.target.value);
    }
    const handleChangeModelColor=(event)=>{
        setModelColor(event.target.value);
    }

    return(
        <div className='addItemsContainer'>
            <h2 className='vehicleHead'>Add Vehicles</h2>
            <div className='vehicleInfo'>
                <div className='vehicleType'>
                    <InputLabel id="demo-simple-select-label">Vehicle Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="model"
                            value = {model}
                            onChange={handleChangeModel}
                            >
                            <MenuItem value="Ola S1 Pro">Ola S1 Pro</MenuItem>
                            <MenuItem value="Ola S1">Ola S1</MenuItem>
                        </Select>
                </div>
                <div className='vehicleColor'>
                    <InputLabel id="demo-simple-select-label">Colour</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={modelColor}
                        label="modelColor"
                        onChange={handleChangeModelColor}
                        >
                        <MenuItem value="Yellow">Yellow</MenuItem>
                        <MenuItem value="Matte Black">Matte Black</MenuItem>
                        <MenuItem value="Red">Red</MenuItem>
                    </Select>
                </div>
                <div>
                    {/* <button className='vehicleAddBtn'>Add</button> */}
                    <a href='/additem'><Button variant="contained" className='vehicleAddBtn' 
                    // onClick={<Alert variant="filled" severity="success">This is a success alert — check it out!</Alert>}
                    onClick={handleAlert}
                    >Add vehicle</Button></a>
                    </div>
            </div>
        </div>
    )
} 