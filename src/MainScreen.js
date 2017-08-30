import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, Button} from 'react-native'
// import store from './storeConfig'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {show: true}
    }

    static navigationOptions = {
        title: 'Home Page'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{height: 400, justifyContent: 'center'}}>
                    <Image
                        style={styles.img}
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}/>
                    <Text style={styles.text}>{this.state.show ? `Hello world ${this.props.name}` : ``}</Text>
                    <Button onPress={() => {
                        navigate('Spec01')
                    }} title='jump to spec01'
                    />
                    <Button onPress={() => {
                        navigate('Flat')
                    }} title='jump to FlatShow'
                    />

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

export default Main