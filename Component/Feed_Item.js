import React,{useState} from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,Dimensions } from 'react-native'
import {connect} from 'react-redux'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const data = [
    { id: 1, name: 'Red Wine and Mint Soufflé', image: require('../access/Image.png') },
    { id: 3, name: 'White Wine Toffee', image: require('../access/Image.png') },
    { id: 4, name: 'Vanilla Pud', image: require('../access/Image.png') },
    { id: 5, name: 'Cured Vegetables & Mutton', image: require('../access/Image.png') },
    ]

const Feed_Item = () => {
    const [listItem, setListItem] = useState(data)
    const listView = ({ item }) => {
    return (
        <View style={styles.container}>
   <TouchableOpacity>
      <Image source={item.image} style={styles.image} />
      <View style={styles.profile}>
         <Image style={styles.avatar} source={require('../access/Avatar.png')} />
         <View style={styles.profile_text}>
            <Text style={styles.text_name}>
               Profile Name
            </Text>
            <Text style={styles.time}>
               2h ago
            </Text>
         </View>
      </View>
      <View>
      </View>
   </TouchableOpacity>
   <View style={styles.mid_content}>
      <View style={styles.name_shape}>
         <Text style={styles.name}>
            {item.name}
         </Text>
         <TouchableOpacity >
            <Image style={styles.shape} source={require('../access/Shape.png')} />
         </TouchableOpacity>
      </View>
      <View>
         <Text style={styles.comment}>
            Apparently we had reached a great height in the atmosphere, for the sky was …
         </Text>
      </View>
      <View style={styles.footer}>
         <View style={styles.like}>
            <Text>
               32 likes
            </Text>
            <Image style={styles.dot} source={require('../access/Oval.png')} />
            <Text>
               8 Comments
            </Text>
         </View>
         <TouchableOpacity onPress={() => AddRecipes()}>
            <Text style={styles.button}>
               + Save
            </Text>
         </TouchableOpacity>
      </View>
   </View>
</View>
    )
}
return(
    <View>
        <FlatList 
      data={listItem}
      renderItem={listView}
      showsVerticalScrollIndicator={false}
      />
    </View>
)
}

const mapDispatchToProps = (dispatch) => {
   return{
      // AddRecipes : (item) => {
      //       const RecipesItem = 
      //       {
      //          id: item.id,
      //          name: item.name
      //       }            
      //    }
      //    let action= {
      //       type:'ADD_RECIPES',
      //       RecipesItem
      //    }
      //    disPatch(action);
      // }
   }
}
 
export default connect(null,mapDispatchToProps)(Feed_Item)

const styles = StyleSheet.create({
    container: {
    top: WIDTH*0.03,
    paddingVertical: WIDTH*0.03,
    // paddingHorizontal: 25
    },
    profile: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    opacity: 0.9,
    position: 'absolute',
    width: WIDTH,
    paddingVertical:    HEIGHT*0.02,
    alignItems:'center'
    },
    image: {
    position: 'relative'
    },
    profile_text: {
    paddingLeft: WIDTH*0.02,
    },
    text_name: {
    fontSize: WIDTH*0.025,
    fontWeight: '400',
    color: '#030F09'
    },
    shape:{
    height:HEIGHT*0.025,
    width:WIDTH*0.025
    },
    time: {
    fontSize: WIDTH*0.025,
    fontWeight: '400',
    color: '#767676'
    },
    avatar:{
    width:WIDTH*0.1,
    height:WIDTH*0.1
    },
    mid_content: {
    marginHorizontal: 15
    },
    name_shape: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
    },
    name: {
    fontSize: WIDTH*0.04,
    fontWeight: '600',
    color: '#030F09'
    },
    comment: {
    fontSize: WIDTH*0.03,
    fontWeight: '400',
    color: '#A8A8A8'
    },
    like: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: HEIGHT*0.025,
    fontSize: WIDTH*0.03,
    fontWeight: '400',
    tintColor: '#606060'
    },
    dot: {
    marginHorizontal: WIDTH*0.04,
    top: HEIGHT*0.01
    },
    button: {
    marginTop: HEIGHT*0.02,
    width:  WIDTH*0.15,
    height: HEIGHT*0.04,
    color: '#30BE76',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#30BE76',
    textAlign: 'center',
    lineHeight: HEIGHT*0.04,
    fontSize:HEIGHT*0.02
    },
    footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
    }
    })