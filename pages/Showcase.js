import ShowCase from '../components/ShowCase'
import useSWR from "swr"
import { useState, useEffect } from 'react'
import axios from "axios"

const fetching = (url) => {
    return axios.get(`http://localhost:3000/${url}`)
}
const Showcase = () => {
    const [getShowCase, setShowCase] = useState([]);
    const { data, error } = useSWR("api/showcase", fetching)
    console.log(data);

    useEffect(() => {
        axios.get("http://localhost:3000/api/showcase").then((result) => {
            setShowCase(result.data)
        })
    },[])

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    console.log("get profile => ", getShowCase);
    return(
        <div>
            <ShowCase showcase={data.data} profile={getShowCase}/>
        </div>
    )
}

export default Showcase;