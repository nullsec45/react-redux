import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveProduct } from '../features/productSlice.js';

const AddProduct = () => {
  const [title, setTitle]=useState("");
  const [price, setPrice]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const createProduct=async (e) =>{
	e.preventDefault();
	await dispatch(saveProduct({title, price}));
	navigate("/");
  }
  return (
    <div>
       <form onSubmit={createProduct} className="box mt-5">
       		<div className="field">
				<label className="label">Title</label>
				<input type="text" className="input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
			</div>
			<div className="field">
				<label className="label">Price</label>
				<input type="text"  className="input" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
			</div>
			<div className="field">
				<button className="button is-success">Submit</button>
			</div>
       </form>
    </div>
  )
}

export default AddProduct