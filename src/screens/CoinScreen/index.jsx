import React from 'react'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import {View, Text, Image, Dimensions, TextInput} from 'react-native'
import Coin from '../../../assets/data/crypto.json'
import CoinHeader from './CoinHeader'
import { AntDesign } from '@expo/vector-icons'
import { ChartDot, ChartPath, ChartPathProvider, ChartYLabel, monotoneCubicInterpolation } from '@rainbow-me/animated-charts'
const CoinScreen = () => {
    const {image: {small}, name, prices, market_data: {market_cap_rank, market_cap, current_price, price_change_percentage_24h}, symbol} = Coin;

    const caretColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'

    const SIZE = Dimensions.get('window').width;

    const formatCurrency = (value) => {
        "worklet";
        if (value === "") {
            return `$${current_price.usd.toFixed(2)}`
        }
        return `$${parseFloat(value).toFixed(2)}`
    }

    const normalize = (marketCap) => {
        if (marketCap > 1e12) {
          return `${Math.floor(marketCap / 1e12)} T`
        } else if (marketCap > 1e9) {
          return `${Math.floor(marketCap / 1e9)} B`
        } else if (marketCap > 1e6) {
          return `${Math.floor(marketCap / 1e6)} M`
        } else if (marketCap > 1e3) {
          return `${Math.floor(marketCap / 1e3)} K`
        }
        return marketCap
      }

    const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943"

    return (
        <View style={{paddingHorizontal: 10}}>
            <ChartPathProvider data={{ points: prices.map(([x, y]) => ({ x, y })), smoothingStrategy: 'bezier'}}>
            <CoinHeader image={small} name={name} symbol={symbol} marketCapRank={market_cap_rank} />
            <View style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={{color: 'black', fontSize: 40, fontFamily: 'PingFangSC-Semibold'}}>{name}</Text>
                    <ChartYLabel 
                        format={formatCurrency}
                        style={{color: 'black', fontSize: 40, fontWeight: '300', letterSpacing: 1}}
                    />
                </View>
                <View>
                    <View style={{backgroundColor: caretColor, paddingHorizontal: 5, paddingVertical: 10, borderRadius: 5, flexDirection: 'row'}}>
                    <AntDesign name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} size={12} color={'white'} style={{alignSelf: 'center', marginRight: 5}} />
                        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>{price_change_percentage_24h.toFixed(2)}%</Text>
                    </View>
                    <Text style={{marginLeft: 'auto', paddingVertical: 10, fontSize: 25,fontWeight: '700', color:'black'}}>{normalize(market_cap.usd)}</Text>
                </View>
            </View>
                <View>
                    <ChartPath strokeWidth={2} height={SIZE / 1.5} stroke="blue" width={SIZE} />
                    <ChartDot style={{ backgroundColor: chartColor}}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Text style={{alignSelf: 'center', color: 'black', paddingTop: 12}}>{symbol.toUpperCase()}</Text>
                        <TextInput style={{flex: 1, height: 40, width: 130, margin: 12, marginBottom: 1, borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, fontSize: 16, color: 'white'}}/>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Text style={{alignSelf: 'center', color: 'black', paddingTop: 12}}>USD</Text>
                        <TextInput style={{flex: 1, height: 40, width: 130, margin: 12, marginBottom: 1, borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, fontSize: 16, color: 'white'}}/>
                    </View>
                </View>
            </ChartPathProvider>
        </View>
    )
}

export default CoinScreen