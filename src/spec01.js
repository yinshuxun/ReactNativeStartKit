import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {connect} from 'react-redux'

class Spec01 extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 400, justifyContent: 'center'}}>
                    <Text style={styles.text}>{this.props.num}</Text>
                    <Button title="add" onPress={() => (this.props.dispatch({type: 'add'}))}/>
                    <Button title="reduce" onPress={() => (this.props.dispatch({type: 'del'}))}/>
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

export default connect(store => {
    return {
        num: store.num
    }
}, dispatch => {
    return {
        dispatch
    }
})(Spec01)