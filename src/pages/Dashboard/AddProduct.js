import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const intro = {ClaimedPeakPower:data.ClaimedPeakPower, EstimatedDryWeight:data.EstimatedDryWeight, PowerPerWeight:data.PowerPerWeight}
    const newData = {...data, intro}
    console.log(newData)

    fetch("https://young-chamber-96832.herokuapp.com/bikes", {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.insertedId){
        alert("Product added successfully!!")
      }
    })
  };

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="form-label">Product Name</label>
      <input id="name" className="p-2 form-control col w-75" {...register("name")} />
      
      <label htmlFor="description" className="form-label">Description</label>
      <textarea id="description" className="p-2 form-control col w-75" {...register("description", { required: true })} />

      <label htmlFor="image" className="form-label">Img url</label>
      <input id="image" className="p-2 form-control col w-75" {...register("img", { required: true })} />

      <label htmlFor="price" className="form-label">Price</label>
      <input id="price" className="p-2 form-control col w-75" {...register("price", { required: true })} />

      <label htmlFor="power" className="form-label">Peak Power (bhp)</label>
      <input id="power" className="p-2 form-control col w-75" {...register("ClaimedPeakPower", { required: true })} />

      <label htmlFor="weight" className="form-label">Dry Weight (kg)</label>
      <input id="weight" className="p-2 form-control col w-75" {...register("EstimatedDryWeight", { required: true })} />

      <label htmlFor="ppw" className="form-label">Power per Weight (bhp/kg)</label>
      <input id="ppw" className="p-2 form-control col w-75" {...register("PowerPerWeight", { required: true })} />
     
      
      <input value="Post product" className="form-control bg-success text-white my-3 me-auto p-2 w-25" type="submit" />
    </form>
    </div>
  );
};

export default AddProduct;

