// ItemSeparatorComponent：分割线组件，
// ListFooterComponent：结尾组件
// ListHeaderComponent：头组件
// data：列表数据
// horizontal：设置为true则变为水平列表。
// numColumns：列数 组件内元素必须是等高的,无法支持瀑布流布局
// columnWrapperStyle：numColumns大于1时，设置每行的样式
// getItemLayout：如果我们知道行高可以用此方法节省动态计算行高的开销。
// refreshing：是否正在加载数据
// onRefresh：设置此属性需要一个标准的 RefreshControl 控件，刷新数据
// renderItem：渲染每个组件
// onViewableItemsChanged：当一个新的Item渲染或者隐藏 的时候调用此方法。参数：info: {viewableItems: Array, changed: Array} viewableItems：当前可见的Item，changed：渲染或者隐藏的Item。
// scrollToEnd({params?: ?{animated?: ?boolean}})：滚动到末尾，如果不设置getItemLayout属性的话，可能会比较卡。
// scrollToIndexparams: {animated?: ?boolean, index: number, viewPosition?: number}：滚动到制定的位置
// scrollToOffset(params: {animated?: ?boolean, offset: number})：滚动到指定的偏移的位置。


import React, { Component } from 'react'
import {StyleSheet, Text, FlatList, View, Button} from 'react-native'

const flatData = new Array(10).fill(0).map((value, index) => {
    return {key: index}
})

class FlatListView extends Component {
    _keyExtractor = (item, index) => item.key;

    _separator = () => {
        return <View style={{height: 2, backgroundColor: 'yellow'}}/>;
    }

    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>;
    }

    _renderItem = (item) => {
        return <Text style={[{
            flex: 1,
            height: 80,
            backgroundColor: item.index % 2 === 0 ? 'red' : 'blue'
        }, styles.txt]}>{item.index}</Text>
    }

    constructor(props) {
        super(props);
        this.state = {
            listData: flatData,
            loading: false
        };
    }

    render() {
        return (<View style={{flex: 1}}>
            <Button title='滚动到头部' onPress={() => {
                this._flatList.scrollToOffset({animated: true, offset: 0});
            }}/>
            <Button title='滚动到第八个点' onPress={() => {
                this._flatList.scrollToIndex({viewPosition: 0, index: 8});
            }}/>
            <Button title='滚动到末尾' onPress={() => {
                this._flatList.scrollToEnd();
            }}/>
            <View style={{flex: 1}}>
                <FlatList
                    ref={(flatList) => this._flatList = flatList}
                    data={this.state.listData}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderItem={this._renderItem}
                    onEndReached={(info) => {
                        if (!this.state.loading) {
                            this.setState({
                                loading: true
                            })
                            console.log(info.distanceFromEnd)
                            setTimeout(() => {
                                    this.setState({
                                        listData: this.state.listData.concat({
                                            key: this.state.listData.length + 1,

                                        }),
                                        loading: false
                                    })
                                }, 1000
                            )
                        }
                    }}
                    onEndReachedThreshold={0}
                    getItemLayout={(data, index) => (
                        {length: 80, offset: 82 * index + 30, index}
                    )}
                    refreshing={false}
                    onRefresh={() => {
                        this.setState({
                            listData: flatData
                        })
                    }}
                />
            </View>

        </View>)
    }
}
const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});

export default FlatListView