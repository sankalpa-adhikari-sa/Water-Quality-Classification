import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {MdDelete} from 'react-icons/md'
import './Prediction.css'
import Loader from '../../UI components/Loader';
import axios from 'axios'
function Prediction() {
  const form= useForm();
  const {register, handleSubmit,formState:{errors},reset, clearErrors}= form
  const onSubmit= (data) =>{
    setIsLoading(true);
    axios.post('http://127.0.0.1:8000/predict/', data)
    .then(response =>{
      setData(response.data);
      setIsLoading(false);
      setIsPredicted(true);
    })
    .catch(error => {
      setIsLoading(false);
      setIsPredicted(false);
      console.log(error);
    });
  }
  const handleReset = () => {
    reset();
    clearErrors();
    setIsLoading(false);
    setIsPredicted(false);
  }
  const handleCancel = () => {
    setIsLoading(false);
    setIsPredicted(false);
  }
  const [isLoading, setIsLoading]= useState(false);
  
  const [isPredicted, setIsPredicted]= useState(false)
  const [Data, setData]= useState()
  return (
    <>
      { isLoading ? 
      <Loader/>
      : null}

      {isPredicted ? 
      <div className='PredictionCardWrapper'>
        <div className="PredictionCard">
            <div className='Prediction_Data'>
              {Data.predicted_class=="Potable"?
              "Yay, Water source is Potable"
              :
              "Oh No! Water source is not Potable" }
            </div>
            <div className="ButtonsWrapper">
              <button className='ResetButton Button' type='button' onClick={handleReset}><MdDelete fontSize={20} color='orangered'/></button>
              <button className='Button' type='button' onClick={handleCancel}>Edit</button>
            </div>
        </div>
      </div>
      :null}

    <div className= {`PredictionWrapper${isLoading|isPredicted ? ' blur' : ''}`}>
      <div className='PredictionHeader'>Fill the form to check if water source is Potable or not</div>
      <form className="PredictionForm" noValidate onSubmit={handleSubmit(onSubmit)}>
        
        <div className="FormControl">
          <label htmlFor="ph">pH</label>
          <input type="text" id='ph' {...register('ph',{
            required: {
              value: true,
              message: "pH is required"}
            })} />
          {errors.ph ? <p className='ErrorClass'>{errors.ph?.message}</p>: null}
          
        </div>
        <div className="FormControl">
          <label htmlFor="hardness">Hardness</label>
          <input type="text" id='hardness' {...register('hardness',{
            required: {
              value: true,
              message: "Hardness is required"}
          })} />
          {errors.hardness? <p className='ErrorClass'>{errors.hardness?.message}</p>:null}
        </div>
        <div className="FormControl">
          <label htmlFor="solids">Solids (TDS)</label>
          <input type="text" id='solids' {...register('solids',{
            required: {
              value: true,
              message: "solids is required"}
            })} />
          {errors.solids?<p className='ErrorClass'>{errors.solids?.message}</p> :null}
        </div>
        <div className="FormControl">
          <label htmlFor="chloramines">Chloramines</label>
          <input type="text" id='chloramines' {...register('chloramines',{
            required: {
              value: true,
              message: "Chloramines is required"}
            })} />
          {errors.chloramines? <p className='ErrorClass'>{errors.chloramines?.message}</p>:null}
        </div>
        <div className="FormControl">
          <label htmlFor="sulfate">Sulfate</label>
          <input type="text" id='sulfate' {...register('sulfate',{
            required: {
              value: true,
              message: "Sulfate is required"}
          })} />
          {errors.sulfate?<p className='ErrorClass'>{errors.sulfate?.message}</p>: null}
        </div>
        <div className="FormControl">
          <label htmlFor="conductivity">Conductivity</label>
          <input type="text" id='conductivity' {...register('conductivity',{
              required: {
                value: true,
                message: "Conductivity is required"}
              })} />
          {errors.conductivity?<p className='ErrorClass'>{errors.conductivity?.message}</p>: null}
        </div>
        <div className="FormControl">
          <label htmlFor="organic_carbon">Organic carbon</label>
          <input type="text" id='organic_carbon' {...register('organic_carbon',{
            required: {
              value: true,
              message: "Organic carbon is required"}
            })} />
          {errors.organic_carbon? <p className='ErrorClass'>{errors.organic_carbon?.message}</p>:null}
        </div>
        <div className="FormControl">
          <label htmlFor="trihalomethanes">Trihalomethanes</label>
          <input type="text" id='trihalomethanes' {...register('trihalomethanes',{
            required: {
              value: true,
              message: "Trihalomethanes is required"}
            })} />
          {errors.trihalomethanes?<p className='ErrorClass'>{errors.trihalomethanes?.message}</p>: null}
        </div>
        <div className="FormControl">
          <label htmlFor="turbidity">Turbidity</label>
          <input type="text" id='turbidity' {...register('turbidity',{
            required: {
              value: true,
              message: "Turbidity is required"}
            })} />
          {errors.turbidity?<p className='ErrorClass'>{errors.turbidity?.message}</p>: null}
        </div>
        <div className="ButtonsWrapper">
          <button className='SubmitButton Button' type='submit'>submit</button>
          <button className='ResetButton Button' type='button' onClick={handleReset}><MdDelete fontSize={20} color='orangered'/></button>
        </div>
      </form>
      
    </div>
    </>

  )
}

export default Prediction