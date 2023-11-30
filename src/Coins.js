import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";

const Coins = () => {

    const [data , setData] = useState([])

    axios.get('https://api.coincap.io/v2/assets')
        .then(response =>  setData(response.data.data) )


    return (
        <div className="coinsApp">
            <p className="title" style={{
                fontSize: "30px",
                color : "white",
                margin : "40px",
                textAlign : "center",
                fontWeight : "700"
                }}
                >Cryptocurrency Prices by Market Cap</p>
            <div className="news" style={{
                justifyContent : "center",
                display : "flex",
                flexWrap : "wrap"
            }}>
                {data.map((news , index) =>
                    <div key={index} style={{
                        backgroundColor : "#564364",
                        display : "flex",
                        alignItems : "center",
                        borderRadius : "50px",
                        margin : "13px",
                        padding : "10px",
                        transition : "0.2s",
                        width : "90%"
                    }} className="new">
                        <img className="newImg" width="64" height="64" src={`https://img.icons8.com/external-black-fill-lafs/64/external-${news.name}-cryptocurrency-black-fill-lafs.png`}/>
                        <p style={{
                            backgroundColor: "#a393bf",
                            marginLeft: "10px",
                            width: "200px",
                            textAlign: "center",
                            borderRadius: "50px",
                            padding : "5px"
                        }} className="newTitle" key={index}>{news.name}</p>
                        <p className="newPrice">${news.priceUsd}</p>
                        <Link style={{
                            marginLeft : "auto",
                            marginRight : "20px",
                            padding : "10px 30px",
                            textDecoration : "none",
                            borderRadius : "50px",
                            color : "#ddbdd5",
                            background: "linear-gradient(103deg, rgba(40, 0, 89, 1), rgba(159, 32, 66, 1))",
                            fontsize : "15px",
                            transition : "0.5s" 
                        }} to={`/details/${news.id}/${news.name}/${news.priceUsd}/${news.rank}`} className="newButton">Learn More</Link>
                    </div>
                )}
        <p></p>
        </div>
        </div>
    )
}
export default Coins;