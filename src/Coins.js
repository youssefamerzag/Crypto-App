import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import LoadingScreen from "./LoadingScreen";

const Coins = () => {

    const [data, setData] = useState([])
    const [searchInp, setSearchInp] = useState('')
    axios.get('https://api.coincap.io/v2/assets')
        .then(response => setData(response.data.data))

    const [coinValue, setCoinValue] = useState(0)
    const [usdInp, setUsdInp] = useState(1)
    const [coinName, setCoinName] = useState('')
    const percentecoin = useRef();
    const [loading , setLoading] = useState(true)
    const [showMore , setShowMore] = useState(6)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    } , [])

    return (
        <div className="coinsApp">
            {loading && <LoadingScreen></LoadingScreen>}
            {
                <>
            <navbar>
                <h1><Link to='/'>Cryptocurrency</Link></h1>
                <ul>
                    <li onClick={ () => window.scroll({top : 900 , behavior : "smooth"})}>Buy crypto</li>
                    <li onClick={() => window.scroll({top : 1500 , behavior : 'smooth'})}>Coins</li>
                    <li>Log In</li>
                    <li><button>Sign In</button></li>
                </ul>
            </navbar>
            <header>
                <p className="title" >Track the Cryptocurrency <p style={{ color: 'white' }}>Market with Real-Time Data</p></p>
                <p className="paragraph">Explore the top cryptocurrencies by market cap and stay informed with real-time price charts, historical data, and market analysis.</p>
                <button className="startedBtn" onClick={() => window.scrollTo({ top: 420, behavior: "smooth" })}>Get Started</button>
                <img className="illustration" src="./imgs/crypto illustration v2.svg"></img>
            </header>
            <div className="mostPopuler">
                <p style={{ textAlign: "center", fontSize: '30px', color: "white", fontWeight: '600', margin: "30px" }}>Most Populer</p>
                <div className="TopCoins">
                    {data.length > 0 &&
                        <div className="TopCoincard1">
                            <p className="TopTitle">{data[0].name}</p>
                            <p className="TopRank">#{data[0].rank}</p>
                            <p className="TopPrice">${Number(data[0].priceUsd).toFixed(3)}</p>
                            <p className={`${Number(data[0].changePercent24Hr).toFixed(2) >= 0.01} ? text-green-700  : text-red-500`} ref={percentecoin} >{Number(data[0].changePercent24Hr).toFixed(2)}%</p>
                        </div>
                    }
                    {data.length > 0 &&
                        <div className="TopCoincard2">
                            <p className="TopTitle">{data[1].name}</p>
                            <p className="TopRank">#{data[1].rank}</p>
                            <p className="TopPrice">${Number(data[1].priceUsd).toFixed(3)}</p>
                            <p className={`${Number(data[1].changePercent24Hr) >= 0.01} ? text-green-700 : text-red-500`}>{Number(data[1].changePercent24Hr).toFixed(2)}%</p>
                        </div>
                    }
                    {data.length > 0 &&
                        <div className="TopCoincard3">
                            <p className="TopTitle">{data[2].name}</p>
                            <p className="TopRank">#{data[2].rank}</p>
                            <p className="TopPrice">${Number(data[2].priceUsd).toFixed(3)}</p>
                            <p className={`${Number(data[0].changePercent24Hr).toFixed(2) >= 0.01} ? text-green-700  : text-red-500`}>{Number(data[2].changePercent24Hr).toFixed(2)}%</p>
                        </div>
                    }
                </div>
            </div>
            <div className="buySection">
                <img src="./imgs/wallet.png" className="buyImg"></img>
                    <div className="buyCard">
                        <p className="buyTitle">Buy cryptocurrency</p>
                        <p className="buySectionTitle">You pay</p>
                        <div className="coinchoosing">
                            <select className="paySection">
                                    <option className="buyOption">USD</option>
                            </select>
                            <input style={{color : "black"}} type="number" className="payInp" value={usdInp} onChange={(e) => setUsdInp(e.target.value)}></input>
                        </div>
                        <p className="buySectionTitle">You get</p>
                    <div className="coinchoosing">
                        <select className="paySection" onClick={(e) => setCoinValue(e.target.value)}>
                            {data.map((coin, index) =>
                                <option className="buyOption" key={index} value={coin.priceUsd}>{coin.name}</option>
                            )}
                        </select>
                        <input type="number" style={{ color: "black" }} placeholder="Choose" className="payInp" value={usdInp / coinValue}></input>
                    </div>
                    <a className="buyButton" href="https://www.binance.com/en/price/">
                        <button className='w-full'  >Buy and Instantly</button>
                    </a>
                </div>
            </div>
            <div className="allCoins">
                <div className="coinSearchDiv">
                    <input className="coinSearch" onChange={(e) => setSearchInp(e.target.value)} placeholder="Search" />
                </div>
                <div className="news" >
                    {data.slice(0 ,100).filter(coin => {
                        return searchInp.toLowerCase() === '' ? coin : coin.name.toLowerCase().includes(searchInp.toLowerCase());
                    }).slice(0 ,showMore).map((coin, index) =>
                        <div key={index} className="new">
                            <div className="newTitleImg">
                                <img className="newImg" width="64" height="64" src={`https://img.icons8.com/external-black-fill-lafs/64/external-${coin.name}-cryptocurrency-black-fill-lafs.png`} />
                                <p className="newTitle" key={index}>{coin.name}</p>
                            </div>
                            <p className="newPrice">${Number(coin.priceUsd).toFixed(4)}</p>
                            <p className={`text-center m-1 ${Number(coin.changePercent24Hr).toFixed(2) >= 0.00 ? 'text-green-400' : 'text-red-500'} `} ref={percentecoin}>{Number(coin.changePercent24Hr).toFixed(2)}%</p>
                            <Link className="newButton" to={`/details/${coin.id}/${coin.name}/${coin.priceUsd}/${coin.rank}/${coin.changePercent24Hr}`}>Learn More</Link>
                        </div>
                    )}
                </div>
                <div style={{display : 'flex' , justifyContent : 'center' , marginTop : "40px" }}><button style={{textAlign : 'center' , padding : "2px 20px 0px 20px", borderRadius : "5px", background : "rgb(189, 83, 83)" , marginTop : "-40px", color : "white"}} onClick={() => setShowMore(showMore + 6)}>Load More</button></div>
            </div>
            </>}
        </div>
    )
}
export default Coins;