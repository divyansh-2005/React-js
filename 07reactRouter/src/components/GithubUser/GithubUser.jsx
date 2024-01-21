import React, { useState, useEffect } from "react";
import { useParams,useLoaderData } from "react-router-dom";

function GithubUser() {
    const {username} = useParams()
    const userdata = useLoaderData()

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
        <div className=" flex justify-center">
        <div class=" bg-orange-200 relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
    <img src={userdata.avatar_url} alt="profile-picture" />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {userdata.name}
    </h4>
    <p
      class="text-gray block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      Followers: {userdata.followers} | Following: {userdata.following}
    </p>
  </div>
  
</div>
</div>
        
        </>
     );
}

export default GithubUser;

export const githubUserLoader = async ({params}) => {
    const {username} = params
    const response = await fetch(`https://api.github.com/users/${username}`)
    return response.json()
}