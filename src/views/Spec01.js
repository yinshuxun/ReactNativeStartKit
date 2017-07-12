import React, { Component } from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {connect} from 'react-redux'

const handle = dispatch => {
    setTimeout(() => {
        dispatch({
            type: 'add',
            step: 3
        })
    }, 100)
}

class Spec01 extends Component {
    static navigationOptions = {
        title: 'Spec01'
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 400, justifyContent: 'center'}}>
                    <Text style={styles.text}>{this.props.num}</Text>
                    <Button title="add" onPress={() => this.props.dispatch(handle)}/>
                    <Button title="reduce" onPress={() => (this.props.dispatch({type: 'del', step: 1}))}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        color: 'red',
        fontSize: 30,
        lineHeight: 100,
        textAlign: 'center'
    },
    img: {
        flex: 1,
        height: 200,
        marginTop: 30
    }
})

export default connect(store => ({
    num: store.home.num
}), dispatch => ({dispatch}))(Spec01)