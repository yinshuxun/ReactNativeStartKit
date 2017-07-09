import React, {Component} from 'react'
import {StyleSheet, ScrollView, Text, Image} from 'react-native'

class ScrollViewSpec extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Image source={require('../asserts/image/banner.jpeg')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
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
export default ScrollViewSpec