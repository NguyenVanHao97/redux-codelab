import React, { Component } from 'react'
import { View, Text ,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export class MyKitchen extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <View style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.kitchen}>
            My Kitchen
         </Text>
         {/* <View >
            <Image style={styles.header_img} source={require('../access/Settings1.png')} />
         </View> */}
      </View>
      <View style={styles.avatar_container}>
         <View>
            <Image source={require('../access/Avatar.png')} style={styles.avatar_img} />
         </View>
         <View style={styles.infor_container}>
            <Text style={styles.name}>
               <Text> {this.props.user.User.name} </Text>
            </Text>
            <Text style={styles.bio}>
               <Text> {this.props.user.User.bio} </Text>
            </Text>
            <View style={styles.like}>
               <Text>
                  584 followers
               </Text>
               <Image style={styles.dot} source={require('../access/Oval.png')}/>
               <Text>
                  23k likes
               </Text>
            </View>
         </View>
         <TouchableOpacity >
            <Image style={styles.edit} source={require('../access/Edit1.png')} />
         </TouchableOpacity>
      </View>
   </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyKitchen)

const styles = StyleSheet.create({
container:{
top:HEIGHT*0.01,
paddingHorizontal:WIDTH*0.1,
height:'100%'
},
kitchen:{
fontSize:WIDTH*0.045,
fontWeight:'700',
color:'#030F09'
},
header:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
},
header_img:{
width:WIDTH*0.26,
height:WIDTH*0.05
},
avatar_container:{
top:HEIGHT*0.035,
display:'flex',
flexDirection:'row',
justifyContent:'space-around',
// borderBottomWidth:1,
// borderBottomColor:'#E5E5E5',
},  
avatar_img:{
width:HEIGHT*0.1,
height:HEIGHT*0.1
},
infor_container:{
marginLeft:WIDTH*0.0018
},
like:{
display:'flex',
flexDirection:'row',
fontSize:HEIGHT*0.02,
fontWeight:'300',
color:'#606060'
},
dot:{
top:'4%',
marginHorizontal:'5%'
},
edit:{
height:HEIGHT*0.03,
width:HEIGHT*0.03
},
name:{
fontSize:HEIGHT*0.028,
marginVertical:'2%',
fontWeight:'700',
color:'#030F09'
},
bio:{
fontSize:HEIGHT*0.02,
fontWeight:'400',
color:'#606060',
marginVertical:'2%',
},
line:{
paddingTop:'20%',
paddingBottom:'10%',
width:WIDTH*0.8,
alignSelf:'center',
}
})