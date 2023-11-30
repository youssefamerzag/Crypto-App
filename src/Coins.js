import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";

const Coins = () => {

    const [data , setData] = useState([])

    axios.get('https://api.coincap.io/v2/assets')
        .then(response =>  setData(response.data.data) )


    return (
        <div className="coinsApp">
            <p className="title">Cryptocurrency Prices by Market Cap</p>
            <div className="news">
                {data.map((news , index) =>
                    <div key={index} className="new">
                        <img className="newImg" width="64" height="64" src={`https://img.icons8.com/external-black-fill-lafs/64/external-${news.name}-cryptocurrency-black-fill-lafs.png`}/>
                        <p className="newTitle" key={index}>{news.name}</p>
                        <p className="newPrice">${news.priceUsd}</p>
                        <Link to={`/details/${news.id}/${news.name}/${news.priceUsd}/${news.rank}`} className="newButton">Learn More</Link>
                    </div>
                )}
        <p></p>
        </div>
        </div>
    )
}
export default Coins;