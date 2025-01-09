import React, { useEffect, useState } from 'react'

function GitHubCard() {

    let [gitHubData,setGitHubData] = useState({});
    useEffect(()=>{

        fetch("https://api.github.com/users/netralichorge") // github link
        .then(data=>data.json())
        .then(data=>{
           // console.log(data["followers"]);
           console.log(gitHubData)
           setGitHubData(data);
           
            
        })

    },[])
    return (
        <div>
            <h1>GitHub Profile</h1>
            <div className="card github-card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text"> </p>
                </div>
            </div>
        </div>
    )
}

export default GitHubCard