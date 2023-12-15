import { BrowserRouter, Link, useParams } from "react-router-dom";
import axios from "axios";
import './Details.css'
import { useState } from "react";

const Details = () => {
    
    const {name} = useParams()
    const {rank} = useParams()
    const {priceUsd} = useParams()
    const {changePercent24Hr} = useParams()

    const [usdInp , setUsdInp] = useState(1)
    const [data , setData] = useState([])

    axios.get('https://api.coincap.io/v2/assets')
        .then(Response => setData(Response.data.data))
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
                    background: "rgb(189, 83, 83)",
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
            <p className="coin1" >
                <p className="coinTitle">Name</p>
                <p className="coinInfo">{name}</p>
            </p>
            <p className="coin2" >
            <p className="coinTitle">Rank</p>
                <p className="coinInfo">{rank}</p>
                </p>
            <p className="coin3" >
            <p className="coinTitle">Price</p>
                <div className="coinInfo">
                    <p className="coinPrice">${Number(priceUsd).toFixed(6)}</p>
                    <p className={`-m-5 text-xl ${changePercent24Hr >= 0.01 ? 'text-green-400' : 'text-red-400'} `}>{Number(changePercent24Hr).toFixed(2)}%</p>
                </div>
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
        <p style={{    textAlign: "center",fontSize : '30px' , color : "white" , fontWeight : '600' , margin : "30px"}}>Most Populer</p>
        <div className="TopCoins">
        {data.length > 0 &&
            <div className="TopCoincard1">
                <p className="TopTitle">{data[0].name}</p>
                <p className="TopRank">#{data[0].rank}</p>
                <p className="TopPrice">${Number(data[0].priceUsd).toFixed(3)}</p>
                <p className={`m-1 ${Number(data[0].changePercent24Hr).toFixed(2) >= 0.01 ? 'text-green-400' : 'text-red-400'  } `}>{Number(data[0].changePercent24Hr).toFixed(2)}%</p>
            </div>
            }
            {data.length > 0 &&
            <div className="TopCoincard2">
                <p className="TopTitle">{data[1].name}</p>
                <p className="TopRank">#{data[1].rank}</p>
                <p className="TopPrice">${Number(data[1].priceUsd).toFixed(3)}</p>
                <p className={`m-1 ${Number(data[1].changePercent24Hr).toFixed(2) >= 0.01 ? 'text-green-400' : 'text-red-900' }`}>{Number(data[1].changePercent24Hr).toFixed(2)}%</p>
            </div>
            }
            {data.length > 0 &&
            <div className="TopCoincard3">
                <p className="TopTitle">{data[2].name}</p>
                <p className="TopRank">#{data[2].rank}</p>
                <p className="TopPrice">${Number(data[2].priceUsd).toFixed(3)}</p>
                <p className={`m-1 ${Number(data[2].changePercent24Hr).toFixed(2) >= 0.01 ? 'text-green-300' : 'text-red-400' }`}>{Number(data[2].changePercent24Hr).toFixed(2)}%</p>
            </div>
            }
        </div>
    </div>
    )
}
export default Details;