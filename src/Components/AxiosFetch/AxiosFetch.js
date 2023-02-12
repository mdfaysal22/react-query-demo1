import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/allPosts")
        .then(res => {
            setPosts(res.data);
            setIsLoading(false);
        })
    }, [])
    if(isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h2>Axios Data Fetching</h2>
            {
                posts.map(post => <div key={post.id}>
                    <h2>{post.author}</h2>
                    <p>{post.post}</p>
                </div>)
            }
        </div>
    );
};

export default AxiosFetch;