// import React from 'react'
// import { Component } from 'react'
// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import {connect} from 'react-redux'

// class SaveRecipesScreen extends Component{
//     renderRecipes = () => {
//         return this.props.Recipes.map((item,index) => {
//             return <View key={index}>
//                 <View>
//                     {item.id}
//                 </View>
//             </View>
//         })
//     }
// }

// const mapStateToProps = ( state ) => {
//     return {
//         Recipes: state.RecipesReducer.Recipes
//     }
// }

// export default connect(mapStateToProps,null)(SaveRecipesScreen)

// const styles = StyleSheet.create({})
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class SaveRecipesScreen extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <View >
                <Text> {this.props.saverecipes.Recipes.name} </Text>
                <Text> {this.props.saverecipes.Recipes.id} </Text>
                {/* <Text> {this.props.saverecipes.Recipes.phone} </Text>
                <Text> {this.props.saverecipes.Recipes.email} </Text> */}
                {/* <Text> {JSON.stringify.saverecipes.id} </Text> */}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    saverecipes : state.RecipesReducer,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveRecipesScreen)
