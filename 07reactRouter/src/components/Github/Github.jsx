import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/divyansh-2005')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return ( 
        <>
        {/* <div className="text-center m-4 bg-gray-600 text-white p-4 text-2xl">
            
            <h1 className="bg-orange-600 p-4 border rounded-lg">Name: {data.name}</h1>
            Github Followers: {data.followers}
            <p className="bg-sky-500/20 p-4 border rounded-lg">{data.bio}</p>
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div> */}
<div className=" flex justify-center">
        <div class=" bg-orange-200 relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
    <img src={data.avatar_url} alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {data.name}
    </h4>
    <p
      class="text-gray block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      Followers: {data.followers} | Following: {data.following}
    </p>
  </div>
  
</div>
</div>
        </>
     );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/divyansh-2005')
    return response.json()
}