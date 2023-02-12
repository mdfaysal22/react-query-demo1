import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const RQFetch = () => {
  const dataFetching = () => {
    return axios.get("http://localhost:4000/allPosts");
  };

  /**
   * React Query accept 3 argument
   * 01. Unique Key , accept array
   * 02. a array function to fetching data -> () => {}
   * 03. Accept a Object -> this object accept some property like cacheTime : 5000 (ms),
   */
  const onSuccess = () => {
    console.log('Successfully Fetching Data')
  }

  const onError = () => {
    console.log("Failing Data Fetching.")
  }
  const { data, isLoading, isError, error } = useQuery(
    ["allPosts"],
    dataFetching,
    {
        // cacheTime: 5000,
        // staleTime: 0, //Default 
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        onError,
        onSuccess,
        
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>RQ data Fetching</h2>
      {data?.data.map((post) => (
        <Link className="mx-2" key={post.id} to={`/single-post/${post.id}`}>{post.author}</Link>
      ))}
    </div>
  );
};

export default RQFetch;
