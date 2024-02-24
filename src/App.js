import React, {useState, useEffect} from "react";
import axios from "axios";
import BitCoinDisplay from "./Componenets/BitCoinDisplay";
import "./curency.css"


const Data = [
  {
     "id":"bitcoin",
     "symbol":"btc",
     "name":"Bitcoin",
     "image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
     "current_price":51091,
     "market_cap":1003314991323,
     "market_cap_rank":1,
     "fully_diluted_valuation":1072987000771,
     "total_volume":17950652788,
     "high_24h":51175,
     "low_24h":50598,
     "price_change_24h":-82.29902642731031,
     "price_change_percentage_24h":-0.16082,
     "market_cap_change_24h":767395838,
     "market_cap_change_percentage_24h":0.07654,
     "circulating_supply":19636412.0,
     "total_supply":21000000.0,
     "max_supply":21000000.0,
     "ath":69045,
     "ath_change_percentage":-25.99785,
     "ath_date":"2021-11-10T14:24:11.849Z",
     "atl":67.81,
     "atl_change_percentage":75250.78703,
     "atl_date":"2013-07-06T00:00:00.000Z",
     "roi":null,
     "last_updated":"2024-02-24T14:29:51.477Z"
  },
  {
     "id":"ethereum",
     "symbol":"eth",
     "name":"Ethereum",
     "image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
     "current_price":2958.61,
     "market_cap":355679539763,
     "market_cap_rank":2,
     "fully_diluted_valuation":355679539763,
     "total_volume":12816270145,
     "high_24h":2964.35,
     "low_24h":2906.7,
     "price_change_24h":5.1,
     "price_change_percentage_24h":0.17255,
     "market_cap_change_24h":1950504614,
     "market_cap_change_percentage_24h":0.55141,
     "circulating_supply":120156541.646231,
     "total_supply":120156541.646231,
     "max_supply":null,
     "ath":4878.26,
     "ath_change_percentage":-39.31763,
     "ath_date":"2021-11-10T14:24:19.604Z",
     "atl":0.432979,
     "atl_change_percentage":683592.5416,
     "atl_date":"2015-10-20T00:00:00.000Z",
     "roi":{
        "times":76.42632444720665,
        "currency":"btc",
        "percentage":7642.632444720664
     },
     "last_updated":"2024-02-24T14:29:52.893Z"
  },
  {
     "id":"tether",
     "symbol":"usdt",
     "name":"Tether",
     "image":"https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
     "current_price":0.999807,
     "market_cap":97880361673,
     "market_cap_rank":3,
     "fully_diluted_valuation":97880361673,
     "total_volume":34558603929,
     "high_24h":1.001,
     "low_24h":0.99805,
     "price_change_24h":0.00023636,
     "price_change_percentage_24h":0.02365,
     "market_cap_change_24h":-86608849.72488403,
     "market_cap_change_percentage_24h":-0.08841,
     "circulating_supply":97910734641.7273,
     "total_supply":97910734641.7273,
     "max_supply":null,
     "ath":1.32,
     "ath_change_percentage":-24.4431,
     "ath_date":"2018-07-24T00:00:00.000Z",
     "atl":0.572521,
     "atl_change_percentage":74.6119,
     "atl_date":"2015-03-02T00:00:00.000Z",
     "roi":null,
     "last_updated":"2024-02-24T14:25:00.771Z"
  },
  {
     "id":"binancecoin",
     "symbol":"bnb",
     "name":"BNB",
     "image":"https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
     "current_price":380.34,
     "market_cap":58499763874,
     "market_cap_rank":4,
     "fully_diluted_valuation":58499763874,
     "total_volume":1351620936,
     "high_24h":381.63,
     "low_24h":369.55,
     "price_change_24h":4.98,
     "price_change_percentage_24h":1.32571,
     "market_cap_change_24h":869348541,
     "market_cap_change_percentage_24h":1.50849,
     "circulating_supply":153856150.0,
     "total_supply":153856150.0,
     "max_supply":200000000.0,
     "ath":686.31,
     "ath_change_percentage":-44.59847,
     "ath_date":"2021-05-10T07:24:17.097Z",
     "atl":0.0398177,
     "atl_change_percentage":954813.0155,
     "atl_date":"2017-10-19T00:00:00.000Z",
     "roi":null,
     "last_updated":"2024-02-24T14:29:49.235Z"
  },
  {
     "id":"solana",
     "symbol":"sol",
     "name":"Solana",
     "image":"https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
     "current_price":102.09,
     "market_cap":45020445382,
     "market_cap_rank":5,
     "fully_diluted_valuation":58217155879,
     "total_volume":1968369048,
     "high_24h":102.74,
     "low_24h":98.57,
     "price_change_24h":-0.5498949489242335,
     "price_change_percentage_24h":-0.53573,
     "market_cap_change_24h":-168643035.41051483,
     "market_cap_change_percentage_24h":-0.37319,
     "circulating_supply":441083282.920303,
     "total_supply":570376725.937554,
     "max_supply":null,
     "ath":259.96,
     "ath_change_percentage":-60.73698,
     "ath_date":"2021-11-06T21:54:35.825Z",
     "atl":0.500801,
     "atl_change_percentage":20280.91139,
     "atl_date":"2020-05-11T19:35:23.449Z",
     "roi":null,
     "last_updated":"2024-02-24T14:29:51.468Z"
  },
  {
     "id":"ripple",
     "symbol":"xrp",
     "name":"XRP",
     "image":"https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
     "current_price":0.544269,
     "market_cap":29715330408,
     "market_cap_rank":6,
     "fully_diluted_valuation":54422816594,
     "total_volume":924725130,
     "high_24h":0.546345,
     "low_24h":0.527318,
     "price_change_24h":0.00786415,
     "price_change_percentage_24h":1.46608,
     "market_cap_change_24h":489778473,
     "market_cap_change_percentage_24h":1.67586,
     "circulating_supply":54594247369.0,
     "total_supply":99987873963.0,
     "max_supply":100000000000.0,
     "ath":3.4,
     "ath_change_percentage":-83.98675,
     "ath_date":"2018-01-07T00:00:00.000Z",
     "atl":0.00268621,
     "atl_change_percentage":20159.13487,
     "atl_date":"2014-05-22T00:00:00.000Z",
     "roi":null,
     "last_updated":"2024-02-24T14:29:53.951Z"
  },
  {
     "id":"staked-ether",
     "symbol":"steth",
     "name":"Lido Staked Ether",
     "image":"https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
     "current_price":2957.1,
     "market_cap":28988283420,
     "market_cap_rank":7,
     "fully_diluted_valuation":28988283420,
     "total_volume":30971277,
     "high_24h":2962.24,
     "low_24h":2905.19,
     "price_change_24h":5.03,
     "price_change_percentage_24h":0.17031,
     "market_cap_change_24h":144218901,
     "market_cap_change_percentage_24h":0.5,
     "circulating_supply":9799430.05497847,
     "total_supply":9799430.05497847,
     "max_supply":null,
     "ath":4829.57,
     "ath_change_percentage":-38.74898,
     "ath_date":"2021-11-10T14:40:47.256Z",
     "atl":482.9,
     "atl_change_percentage":512.58736,
     "atl_date":"2020-12-22T04:08:21.854Z",
     "roi":null,
     "last_updated":"2024-02-24T14:29:17.215Z"
  },
  {
     "id":"usd-coin",
     "symbol":"usdc",
     "name":"USDC",
     "image":"https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
     "current_price":0.999707,
     "market_cap":28130332299,
     "market_cap_rank":8,
     "fully_diluted_valuation":28130382804,
     "total_volume":4311866432,
     "high_24h":1.002,
     "low_24h":0.997017,
     "price_change_24h":-0.001551320095568798,
     "price_change_percentage_24h":-0.15494,
     "market_cap_change_24h":33268298,
     "market_cap_change_percentage_24h":0.1184,
     "circulating_supply":28141865048.2685,
     "total_supply":28141915573.9869,
     "max_supply":null,
     "ath":1.17,
     "ath_change_percentage":-14.76203,
     "ath_date":"2019-05-08T00:40:28.300Z",
     "atl":0.877647,
     "atl_change_percentage":13.89446,
     "atl_date":"2023-03-11T08:02:13.981Z",
     "roi":null,
     "last_updated":"2024-02-24T14:29:53.014Z"
  },
  {
     "id":"cardano",
     "symbol":"ada",
     "name":"Cardano",
     "image":"https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
     "current_price":0.591092,
     "market_cap":20773783603,
     "market_cap_rank":9,
     "fully_diluted_valuation":26597401153,
     "total_volume":459688618,
     "high_24h":0.592866,
     "low_24h":0.570744,
     "price_change_24h":0.00647301,
     "price_change_percentage_24h":1.10722,
     "market_cap_change_24h":326786204,
     "market_cap_change_percentage_24h":1.59821,
     "circulating_supply":35147052780.6972,
     "total_supply":45000000000.0,
     "max_supply":45000000000.0,
     "ath":3.09,
     "ath_change_percentage":-80.85301,
     "ath_date":"2021-09-02T06:00:10.474Z",
     "atl":0.01925275,
     "atl_change_percentage":2969.9538,
     "atl_date":"2020-03-13T02:22:55.044Z",
     "roi":null,
     "last_updated":"2024-02-24T14:29:52.432Z"
  },
  {
     "id":"avalanche-2",
     "symbol":"avax",
     "name":"Avalanche",
     "image":"https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
     "current_price":36.49,
     "market_cap":13761212493,
     "market_cap_rank":10,
     "fully_diluted_valuation":15902483882,
     "total_volume":496770392,
     "high_24h":36.7,
     "low_24h":35.27,
     "price_change_24h":0.0171715,
     "price_change_percentage_24h":0.04708,
     "market_cap_change_24h":41629539,
     "market_cap_change_percentage_24h":0.30343,
     "circulating_supply":377179280.074313,
     "total_supply":435869108.556587,
     "max_supply":720000000.0,
     "ath":144.96,
     "ath_change_percentage":-74.82447,
     "ath_date":"2021-11-21T14:18:56.538Z",
     "atl":2.8,
     "atl_change_percentage":1202.88875,
     "atl_date":"2020-12-31T13:15:21.540Z",
     "roi":null,
     "last_updated":"2024-02-24T14:29:46.120Z"
  }
]

const App = () =>{

   const [currencyData, setCurrencyData] = useState([]);

      async function fetchData(){

          try{
              const responseData= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
              console.log(responseData.data);
              setCurrencyData(responseData.data)
           
          }
          catch(err){
              console.log(err);
          }
          

        }


        useEffect(()=>{
          fetchData()
         },[])
      
    
      return(
        <div>
            <table>
                <tbody>
                    {
                        currencyData.map((currency)=>(
                          <BitCoinDisplay 
                           key={currency.id}
                          currency={currency}
                          />
                        ))
                    }
                </tbody>

        </table>
        </div>
    )
}

export default App