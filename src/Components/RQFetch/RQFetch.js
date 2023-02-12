import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

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

  const { data, isLoading,isFetching, isError, error } = useQuery(
    ["allPosts"],
    dataFetching,
    {
        cacheTime: 5000,
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
        <div key={post.id}>
          <h2>{post.author}</h2>
          <p>{post.post}</p>
        </div>
      ))}
    </div>
  );
};

export default RQFetch;
