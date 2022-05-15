import React from "react";
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import {View, Text, Image} from 'react-native'


const CoinHeader = (props) => {
    const {image, name, symbol, marketCapRank } = props
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:"center"}}>
            <Ionicons name="chevron-back-sharp" size={30} color="black" />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: image}} style={{width: 25, height: 25}} />
                <Text style={{color: 'black', fontWeight: 'bold', marginHorizontal: 5, fontSize: 17}}>{symbol.toUpperCase()}</Text>
                <View style={{backgroundColor: '#000000', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>#{marketCapRank}</Text>
                </View>
            </View>
            <EvilIcons name="user" size={30} color="black" />
        </View>
    )
}

export default CoinHeader