import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CoinItem = ({ marketCoin }) => {
    const {name, current_price, market_cap_rank, price_change_percentage_24h, symbol, market_cap, image} = marketCoin
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

    const caretColor = price_change_percentage_24h < 0 ? '#EA3943' : '#16C784'

    return (
        <View style={styles.coinContainer}>
        <Image source={{uri: image}} style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}} />
        <View>
          <Text style={styles.coin_title}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.rank_container}>
              <Text style={styles.rank}>{market_cap_rank}</Text>
            </View>
            <Text style={{color: 'black', marginRight: 5, fontWeight: '500'}}>{symbol.toUpperCase()}</Text>
            <AntDesign name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} size={12} color={caretColor} style={{alignSelf: 'center', marginRight: 5}} />
            <Text style={{color: caretColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
          </View>
        </View>
        <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
          <Text style={styles.coin_title}>${current_price >= 1e3 ? current_price.toLocaleString() : current_price}</Text>
          <Text style={{color: 'grey'}}>MC: {normalize(market_cap)}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    coin_title: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 3
    },
    text: {
      color: 'black',
      marginRight: 5,
    },
    coinContainer: {
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'grey',
      padding: 15, 
    },
    rank: {
      fontWeight: 'bold',
      color: 'white',
      
    },
    rank_container: {
      backgroundColor: 'grey',
      paddingHorizontal: 5,
      borderRadius: 5,
      marginRight: 5,
    }
  });

export default CoinItem;