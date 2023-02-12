import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const {id }= useParams()
    const {data, error, isError, isLoading} = useQuery(["allPosts", id], () => {
        return axios.get(`http://localhost:4000/allPosts/${id}`)
    })

    console.log(data);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <div>
            <h2>Single Post by Id</h2>
            <h3>{data?.data.author}</h3>
            <p>{data?.data.post}</p>
        </div>
    );
};

export default SinglePost;