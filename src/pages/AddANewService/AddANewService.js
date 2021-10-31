import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import './AddANewService.css';

const AddANewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://howling-catacombs-95930.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service container mx-auto">
            <h2 className='text-center my-4'>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("SpotName", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("Country")} placeholder="Country" />
                <input {...register("FamousFor")} placeholder="Famous For" />
                <input type="number" {...register("Price")} placeholder="price" />
                <input {...register("Image")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddANewService;