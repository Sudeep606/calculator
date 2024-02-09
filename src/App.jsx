import { TextField } from '@mui/material';
import { Stack } from '@mui/material';

import './App.css'
import { useState } from 'react';


function App() {
   
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [principleAmountValid,setPrincipleAmountValid] = useState(0)
  const [rateAmountValid,setRateAmountValid] = useState(0)
  const [yearValid,setYearValid] = useState(0)

  const handleCalculate = ()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    
    }else{
      alert("please fill the form completely")
    }
   }

  
  const handleReset = ()=>{
    console.log("inside handle reset");
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearValid(true)
  }

  const handleValidation = (tag)=>{
   console.log("inside handleValidation ");
   const {value,name} = tag
   console.log(value,name);
   console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

   if(!!value.match(/^[0-9]*.?[0-9]+$/)){
    if(name=="principle"){
      setPrinciple(value)
      setPrincipleAmountValid(true)
    }else if(name=="rate"){
      setRate(value)
      setRateAmountValid(true)
    }else{
      setYear(value)
      setYearValid(true)
    }
   }else{
    if(name=="principle"){
      setPrinciple(value)
      setPrincipleAmountValid(false)
    }else if(name=="rate"){
      setRate(value)
      setRateAmountValid(false)
    }else{
      setYear(value)
      setYearValid(false)
    }
   }
  
  }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light p-5 rounded'><h3>Simple Interest App</h3>
      <p>Calculate your simple interest Easily</p>
      <div className="d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light">
        <h1>₹ {interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          {/* principle*/}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="Principle Amount" variant="filled" value={principle || ""}  name='principle' onChange={e=>handleValidation(e.target)} />
            </div>
            { !principleAmountValid && <div className="text-danger m-3">invalid principle Amount</div> }
            {}
            <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-rate" label="Interest Rate" variant="filled" value={rate || ""} name='rate' onChange={e=>handleValidation(e.target)} />
            </div>
            { !rateAmountValid && <div className="text-danger m-3">invalid interest Rate</div>}
            {}
            <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-time" label="Time Period" variant="filled" value={year || ""} name='year' onChange={e=>handleValidation(e.target)} />
            </div>
            { !yearValid && <div className="text-danger m-3">invalid Time Period</div>}
            {}
            <Stack direction="row" spacing={2}>
              <button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearValid} style={{width:'50%',height:'70px'}}className='bg-dark' variant="contained">Calculate</button>
              <button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">RESET</button>
            </Stack>
        </form>

      </div>
    </div>
  )
}

export default App
