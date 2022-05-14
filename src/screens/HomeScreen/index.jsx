import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native';
import AssetItem from '../../components/AssetItem'
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json'

const HomeScreen = () => {
    return (
        <FlatList 
        data={cryptocurrencies}
        renderItem={({item}) => <AssetItem marketCoin={item} />}
      />
    )
}

export default HomeScreen