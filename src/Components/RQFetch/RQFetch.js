import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const RQFetch = () => {
    const dataFetching = () => {
        return axios.get('http://localhost:4000/allPosts')
     }
    const {data, isLoading, isError, error} = useQuery(["allPosts"],dataFetching)

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    if(isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <div>
            <h2>RQ data Fetching</h2>
            {
                data?.data.map(post => 
                    <div key={post.id}>
                        <h2>{post.author}</h2>
                        <p>{post.post}</p>
                    </div>
                )
            }
        </div>
    );
};

export default RQFetch;