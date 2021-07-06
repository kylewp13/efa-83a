import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Github = (props) => {

    const [APIData, setAPIData] = useState([]);
    

    useEffect(() => {

        const url = "https://api.github.com/repos/kylewp13/efa-83a/commits"

        axios
            .get(url)
            .then(res => setAPIData(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(APIData)
    
    return (
        <div className='Github-display'>
            <h1>hello</h1>
            {APIData.map((commits) => ( 
                <APICard commits={commits} />
            ))}
        </div>
    )
};

const APICard = (props) => {
    return (
        <div className='Github-cards'>
            <p>Name: {props.commits.commit.author.name}</p>
            <p>Date: {props.commits.commit.author.date}</p>
            <p>message: {props.commits.commit.message}</p>
        </div>
    )
}

export default Github;