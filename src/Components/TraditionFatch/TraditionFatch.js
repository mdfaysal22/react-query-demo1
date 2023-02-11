import React, { useEffect, useState } from 'react';

const TraditionFatch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(' ');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/allPosts')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
        .catch(err => {
            setError(err);
            setIsError(true);
        })
    }, [])
    if(isError) {
        return <h2>{error}</h2>
    }
    if(isLoading) { 
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h2>All Posts Data</h2>
            {
                data.map( post => {
                    return <div key={post.id}>
                    <h2>{post.author}</h2>
                    <p>{post.post}</p>
                </div>
                })
            }
        </div>
    );
};

export default TraditionFatch;