import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {connect} from 'react-redux'

@connect(state => ({
    num: state.num
}))

class Spec01 extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 400, justifyContent: 'center'}}>
                    <Text style={styles.text}>{this.props.num}</Text>
                    <Button title="click it" onPress={add}/>
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
export default Spec01