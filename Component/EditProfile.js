import React, { Component } from 'react'
import { 
    View, 
    Text ,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image
     } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export class EditProfile extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props);
        this.state = {
            name :'',
            bio:'',
            email:'',
            phone:''
        }
    }
    handleSubmit(){
        console.warn(this.state.name);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                    <TouchableOpacity style={styles.header} >
            {/* <Image source={require('../access/Line2.png')} /> */}
                    <Text style={styles.back}>
                        Back to Profile
                    </Text>
                    </TouchableOpacity>
                    <View>
                <Text style={styles.edit_text}>
                    Edit Profile
                </Text>
                    </View>
                <View style={styles.contain_avatar}>
                <Image style={styles.edit_avatar} source={require('../access/Avatar.png')}/>
            <TouchableOpacity  >
            <Text style={styles.text_avatar}>
                Edit Profile Picture
            </Text>
            </TouchableOpacity>
                </View>
                <View>
                <Text style={styles.text_input}>
                    name
                </Text>
                    <TextInput style={styles.input} onChangeText={(Text) => {this.setState({name:Text})}} placeholder="name placeholder"  />
                    <Text style={styles.text_input}>
                    bio
                </Text >
                    <TextInput style={styles.input} onChangeText={(Text) => {this.setState({bio:Text})}} placeholder="bio placeholder" />
                    <Text style={styles.text_input}>
                    email
                </Text>
                    <TextInput style={styles.input} onChangeText={(Text) => {this.setState({email:Text})}} placeholder="email placeholder"  />
                    <Text style={styles.text_input}>
                    phone
                </Text>
                    <TextInput style={styles.input} onChangeText={(Text) => {this.setState({phone:Text})}} placeholder="phone placeholder"  />
                </View>
                <TouchableOpacity  style={styles.save} onPress={() => {this.handleSubmit()}}>
                        <Text style={styles.text_save}>
                            submit
                        </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = () =>  {
    return {
        editUser : {
            name:''
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)

const styles = StyleSheet.create({
container : {
// top:WIDTH*0.05,
paddingHorizontal:HEIGHT*0.05,
},
header:{
display:'flex',
flexDirection:'row',
},
back:{
marginLeft:WIDTH*0.025,
fontSize:WIDTH*0.025
},
edit_text:{
fontSize:WIDTH*0.04,
fontWeight:'700',
color:'#030F09',
paddingTop:'5%'
},
edit_avatar:{
width:HEIGHT*0.1,
height:HEIGHT*0.1
},
contain_avatar:{
alignItems:'center',
paddingTop:'5%'
},
text_avatar:{
fontSize:HEIGHT*0.02,
fontWeight:'700',
color:'#30BE76',
paddingTop:'5%'
},
input_container:{
paddingHorizontal:WIDTH*0.03
},
input: {
top: HEIGHT*0.01,
height: HEIGHT*0.05,
borderBottomWidth: 1,
color: 'black'
},
text_input: {
fontSize: 14,
fontWeight: '400',
color: '#A8A8A8',
marginTop: HEIGHT*0.05
},
save: {
top: HEIGHT*0.04,
height: HEIGHT*0.07,
backgroundColor: '#30BE76',
borderRadius: HEIGHT*0.015,
},
text_save: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: '700',
textAlign: 'center',
lineHeight: HEIGHT*0.07
}
})