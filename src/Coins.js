import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";

const Coins = () => {

    const [data , setData] = useState([])
    const [searchInp , setSearchInp] = useState('')
    axios.get('https://api.coincap.io/v2/assets')
        .then(response =>  setData(response.data.data) )

    const [coinValue , setCoinValue] = useState(0)
    const [usdInp , setUsdInp] = useState(1)
    
    return (
        <div className="coinsApp">
            <header>
                <p className="title" >Track the Cryptocurrency <p style={{color :'white'}}>Market with Real-Time Data</p></p>
                <p className="paragraph">Explore the top cryptocurrencies by market cap and stay informed with real-time price charts, historical data, and market analysis.</p>
                <button className="startedBtn" onClick={() => window.scrollTo({ top: 550, behavior: "smooth" })}>Get Started</button>
                <img className="illustration" src="./imgs/crypto illustration.svg"></img>
            </header>

            {/* most Populer coins */}

            <div className="mostPopuler">
                <p style={{    textAlign: "center",fontSize : '30px' , color : "white" , fontWeight : '600' , margin : "30px"}}>Most Populer</p>
                <div className="populerCoins">
                {data.length > 0 && (
                    <div className="populerCoin">
                    <div className="populerTitleImg">
                        <img className="populerImg" width="64" height="64" src={`https://img.icons8.com/external-black-fill-lafs/64/external-${data[0].name}-cryptocurrency-black-fill-lafs.png`}/>
                        <p className="populerTitle">{data[0].name}</p>
                        </div>
                        <p className="populerPrice">${Number(data[0].priceUsd).toFixed(4)}</p>
                        <Link className="populerButton" to={`/details/${data[0].id}/${data[0].name}/${data[0].priceUsd}/${data[0].rank}`}>Learn More</Link>
                    </div>
                )}
                {data.length > 1 && (
                    <div className="populerCoin">
                    <div className="populerTitleImg">
                        <img className="populerImg" width="64" height="64" src={`https://img.icons8.com/external-black-fill-lafs/64/external-${data[1].name}-cryptocurrency-black-fill-lafs.png`}/>
                        <p className="populerTitle">{data[1].name}</p>
                        </div>
                        <p className="populerPrice">${Number(data[1].priceUsd).toFixed(4)}</p>
                        <Link className="populerButton" to={`/details/${data[1].id}/${data[1].name}/${data[1].priceUsd}/${data[1].rank}`}>Learn More</Link>
                    </div>
                )}
                {data.length > 2 && (
                    <div className="populerCoin">
                    <div className="populerTitleImg">
                        <img className="populerImg" width="64" height="64" src={`https://img.icons8.com/external-black-fill-lafs/64/external-${data[2].name}-cryptocurrency-black-fill-lafs.png`}/>
                        <p className="populerTitle">{data[2].name}</p>
                        </div>
                        <p className="populerPrice">${Number(data[2].priceUsd).toFixed(4)}</p>
                        <Link className="populerButton" to={`/details/${data[2].id}/${data[2].name}/${data[2].priceUsd}/${data[2].rank}`}>Learn More</Link>
                    </div>
                    )}
                    </div>
            </div>

             {/* buy section */}

             <div className="buySection">
                <img src="./imgs/buy.png" className="buyImg"></img>
                    <div className="buyCard">
                        <p className="buyTitle">Buy cryptocurrency</p>
                        <p className="buySectionTitle">You pay</p>
                        <div className="coinchoosing">
                            <select className="paySection">
                                    <option className="buyOption">USD</option>
                            </select>
                            <input style={{color : "black"}} type="text" className="payInp" value={usdInp} onChange={(e) => setUsdInp(e.target.value)}></input>
                        </div>
                        <p className="buySectionTitle">You get</p>
                    <div className="coinchoosing">
                            <select className="paySection" onChange={(e) => setCoinValue(e.target.value)}>
                                {data.map((coin , index) =>
                                    <option className="buyOption" key={index} value={coin.priceUsd}>{coin.name}</option>
                                )}
                            </select>
                            <input style={{color : "black"}} className="payInp" value={usdInp /coinValue}></input>
                        </div>
                        <button className="buyButton">Buy and Instantly</button>
                    </div>
             </div>
             <div className="allCoins">
                <div className="coinSearchDiv">
                    <input className="coinSearch" onChange={(e) => setSearchInp(e.target.value)} placeholder="Search"/>
                </div>
                <div className="news" >
                    {data.filter(coin => {return searchInp.toLowerCase() === ''? coin : coin.name.toLowerCase().includes(searchInp.toLowerCase());
                    }).map((coin , index) =>
                        <div key={index}  className="new">
                            <div className="newTitleImg">
                            <img className="newImg" width="64" height="64" src={`https://img.icons8.com/external-black-fill-lafs/64/external-${coin.name}-cryptocurrency-black-fill-lafs.png`}/>
                            <p className="newTitle" key={index}>{coin.name}</p>
                            </div>
                            <p className="newPrice">${Number(coin.priceUsd).toFixed(4)}</p>
                            <Link className="newButton" to={`/details/${coin.id}/${coin.name}/${coin.priceUsd}/${coin.rank}`}>Learn More</Link>
                        </div>
                    )}
            <p></p>
            </div>
        </div>
    </div>
    )
}
export default Coins;