import { BrowserRouter, Link, useParams } from "react-router-dom";
import './Details.css'
import { useState } from "react";

const Details = () => {
    
    const {name} = useParams()
    const {rank} = useParams()
    const {priceUsd} = useParams()

    const [coinValue , setCoinValue] = useState(0)
    const [usdInp , setUsdInp] = useState(1)
    return(
    <div>
        <a style={{
                    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;",
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100px",
                    justifyContent : "center",
                    padding: "15px 80px",
                    margin : "10px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    transition : "0.5s",
                    color : "white",
                    background: "#ea698b",
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
                <p className="coinPrice">${Number(priceUsd).toFixed(4)}</p>
            </p>
        </div>

        <div className="Singlebuy">
                    <div className="SinglebuyCard">
                        <p className="SinglebuyTitle">Buy {name}</p>
                        <p className="SinglebuySectionTitle">You pay</p>
                            <input style={{color : "black"}} type="text" className="SinglepayInp" value={usdInp} onChange={(e) => setUsdInp(e.target.value)}></input>
                        <p className="SinglebuySectionTitle">You get</p>
                            <input style={{color : "black"}} className="SinglepayInp" value={usdInp / priceUsd}></input>
                        <button className="SinglebuyButton">Buy and Instantly</button>
                    </div>
             </div>
    </div>
    )
}
export default Details;