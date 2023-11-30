import { BrowserRouter, Link, useParams } from "react-router-dom";
import './Details.css'

const Details = () => {
    const {name} = useParams()
    const {rank} = useParams()
    const {priceUsd} = useParams()
    return(
    <div>
        <a className="backButton" href='/'>Back</a>
        <div className="coinDetails">
            <p className="coin" >
                <p className="coinTitle">Name</p>
                <p className="coinName">{name}</p>
            </p>
            <p className="coin" >
            <p className="coinTitle">Rank</p>
                <p className="coinRank">{rank}</p>
                </p>
            <p className="coin" >
            <p className="coinTitle">Price</p>
                <p className="coinPrice">${priceUsd}</p>
            </p>
        </div>
    </div>
    )
}
export default Details;