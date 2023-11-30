import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";

const Coins = () => {

    const [data , setData] = useState([])

    axios.get('https://api.coincap.io/v2/assets')
        .then(response =>  setData(response.data.data) )

    const [searchInp , setSearchInp] = useState('')


    return (
        <div className="coinsApp">
            <p className="title" style={{
                fontSize: "30px",
                color : "white",
                margin : "40px",
                textAlign : "center",
                fontWeight : "700"
                }}>
                    Cryptocurrency Prices by Market Cap
                </p>
                <div className="coinSearchDiv">
                    <input className="coinSearch" onChange={(e) => setSearchInp(e.target.value)} placeholder="Search"/>
                </div>
            <div className="news" 
            style={{
                justifyContent : "center",
                display : "flex",
                flexWrap : "wrap"
            }}>
                {data.filter(coin => {
                    return searchInp.toLowerCase() === ''
                    ? coin 
                    : coin.name.toLowerCase().includes(searchInp.toLowerCase());
                }).map((coin , index) =>
                    <div key={index}  className="new">
                        <img className="newImg" width="64" height="64" src={`https://img.icons8.com/external-black-fill-lafs/64/external-${coin.name}-cryptocurrency-black-fill-lafs.png`}/>
                        <p className="newTitle" key={index}>{coin.name}</p>
                        <p className="newPrice">${coin.priceUsd}</p>
                        <Link style={{
                            marginLeft : "auto",
                            marginRight : "10px",
                            padding : "10px 30px",
                            textDecoration : "none",
                            borderRadius : "50px",
                            color : "#ddbdd5",
                            background: "linear-gradient(103deg, rgba(40, 0, 89, 1), rgba(159, 32, 66, 1))",
                            fontsize : "15px",
                            transition : "0.5s" 
                        }} to={`/details/${coin.id}/${coin.name}/${coin.priceUsd}/${coin.rank}`}className="newButton">Learn More</Link>
                    </div>
                )}
        <p></p>
        </div>
        </div>
    )
}
export default Coins;