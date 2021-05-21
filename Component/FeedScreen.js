import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image,Dimensions} from 'react-native'
import Feed_Item from './Feed_Item'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <Feed_Item/>
        </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: WIDTH*0.09,
    }
})
