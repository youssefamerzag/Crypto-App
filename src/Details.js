import { BrowserRouter, Link, useParams } from "react-router-dom";
import './Details.css'

const Details = () => {
    const {name} = useParams()
    const {rank} = useParams()
    const {priceUsd} = useParams()
    return(
    <div>
        <a style={{
                    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;",
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100px",
                    justifyContent : "center",
                    padding: "20px 50px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    transition : "0.5s",
                    color : "#ddbdd5",
                    background: "linear-gradient(103deg, rgba(40, 0, 89, 1), rgba(159, 32, 66, 1))",
                    fontSize : "15px",
                    transition : "0.5s",
                    fontWeight : "500"
            }} className="backButton" href='/'>Back</a>
        <div style={{
                fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                display: "flex",
                flexWrap : "wrap",
                alignItems : "center",
                borderRadius : "10px",
                margin : "13px",
                padding : "10px",
                transition : "0.2s",
                justifyContent : "center",
                marginTop : "50px"
        }} className="coinDetails">
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