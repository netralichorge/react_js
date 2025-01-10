import React, { useEffect, useState } from 'react'

function GitHubCard() {

    let [gitHubData, setGitHubData] = useState({}); // It return an object
    let [repositories, setRepositories] = useState([]) // It return an array 
    useEffect(() => {

        fetch("https://api.github.com/users/netralichorge") // github link
            .then(data => data.json())
            .then(data => {
                // console.log(data["followers"]);

                setGitHubData(data);
                // console.log(gitHubData)


                // Repositories
                fetch(data.repos_url)
                    .then(repos => repos.json())
                    .then(repos => {

                        // console.log("Repos"+repos);
                        setRepositories(repos);
                    })

            })

    }, [])
    return (
        <div>
            {/*Profile Start */}
            <h1>GitHub Profile</h1>
            <div className="card github-card" >
                <img src="{gitHubData.avatar_url}" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Name :{gitHubData.name} </p>
                    <p className="card-text">Followers :{gitHubData.followers} </p>
                    <a href={gitHubData.html_url}>Click here to visit github profile </a>

                </div>
            </div>
            {/* Profile end */}

            {/*Repositories : Start */}

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Repository Name</th>
                        <th scope="col">Repository link</th>
                    </tr>
                </thead>
                <tbody>

                    {repositories.map((repoObj)=>{
                        return(<tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                        </tr>)
                    })}
                
                </tbody>
            </table>

            {/*Repositories : End */}
        </div>
    )
}

export default GitHubCard