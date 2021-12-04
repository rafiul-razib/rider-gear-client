import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="form-label">Bike Name</label>
        <input id="name" type="text" className="form-control col w-50" {...register("name")} />

        <label htmlFor="rating" className="form-label">Specifications</label>
        <input id="rating" type="text" className="form-control col w-50" {...register("ClaimedPeakPower")} />
        <input id="rating" type="text" className="form-control col w-50" {...register("EstimatedDryWeight")} />
        <input id="rating" type="text" className="form-control col w-50" {...register("PowerPerWeight")} />
        
        <label htmlFor="description" className="form-label">Description</label>
        <input id="description" type="text" className="form-control col w-50" {...register("description", { min: 0, max: 5 })} />
        
        <label htmlFor="price" className="form-label">Price</label>
        <input id="price" type="number" className="form-control col w-50" {...register("price", { min: 0, max: 5 })} />
        
        <label htmlFor="image" className="form-label">Image url</label>
        <input id="image" type="text" className="form-control col w-50" {...register("img", { min: 0, max: 5 })} />
        
        <input value="Post product" className="form-control bg-success text-white my-3 ms-auto p-2" type="submit" />

    </form>
    );
};

export default AddProduct;