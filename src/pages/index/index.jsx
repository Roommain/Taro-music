import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import { AtSearchBar,AtIcon,AtTag  } from 'taro-ui'
import { api } from '../../api/api'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            value: '',
            SearchList: [],
            songId: '',
            SearchHotList: [],
            SearchHistoryList:[]
        }
    }
    config = {
        navigationBarTitleText: '搜索'
    }
    onChange (value) {
        this.setState({
          value: value
        })
    }
    onActionClick () {
        this.getSearchData(this.state.value)
    }
    //获取 搜索 数据
    getSearchData(value) { 
        this.state.SearchHistoryList.unshift(value)
        let array = Array.from(new Set(this.state.SearchHistoryList));
        Taro.request({
            url: api + '/search?keywords=' + value,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            this.setState({
                SearchList: res.data.result.songs,
            })
            Taro.setStorageSync('songList', res.data.result.songs)
            Taro.setStorageSync('historyList', array)
        })
    }
    //获取 热门搜索关键词 数据
    getSearchHotData() { 
        Taro.request({
            url: api + '/search/hot',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            this.setState({
                SearchHotList: res.data.result.hots,
            })
        }) 
    }
    play(id) {
        Taro.navigateTo({
            url: '/pages/player/index?id=' + id
        })
    }
    onClick(value) {
        this.getSearchData(value.name)
    }
    deleteHistory(index) { 
        this.state.SearchHistoryList.splice(index, 1);
        this.setState({
            SearchHistoryList: this.state.SearchHistoryList,
        })
        Taro.setStorageSync('historyList', this.state.SearchHistoryList)
    }
    clickHistory(value) { 
        this.getSearchData(value)
    }
    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow() {
        this.getSearchHotData()
        const songId = Taro.getStorageSync('songId')
        const historyList = Taro.getStorageSync('historyList') || []
        this.setState({
            songId: songId,
            value: '',
            SearchList: [],
            SearchHistoryList:historyList
        })
    }

    componentDidHide () { }

    render() {
        const { value,SearchList,songId,SearchHotList,SearchHistoryList} = this.state
        return (
            <View>
                <AtSearchBar
                    value={value}
                    onChange={this.onChange.bind(this)}
                    onActionClick={this.onActionClick.bind(this)}
                />
                {SearchList.length == 0?SearchHotList.map((item, index) => (
                    <AtTag key={index} className='attag' name={item.first} circle onClick={this.onClick.bind(this)}>{item.first}</AtTag>
                )) : ''}
                {SearchList.length == 0?
                    SearchHistoryList.map((item, index) => (
                        <View key={index} className='history clearfix'>
                            <View className='history-name' onClick={() => this.clickHistory(item)}>{item}</View>
                            <AtIcon className='history-tag' onClick={() => this.deleteHistory(index)} value='close-circle' size='28' color='#666'></AtIcon>
                        </View>
                    ))
                :''}
                {SearchList.map((item, index) => (
                    <View className={(songId == item.id) ? 'list clearfix active-list' : 'list clearfix'} key={item.id} onClick={() => this.play(item.id)}>
                        <View className='right'>
                            <View className='name'>{item.name}</View>
                            <View className='synopsis'>{item.artists.map((item2, index) => (
                                <span key={index}>{item2.name} {index+1 < item.artists.length?'/':''}</span>
                            ))}- {item.name}</View>
                        </View>
                        <View className='play'>
                            <AtIcon value={songId == item.id ? 'pause' : 'play'} size='30' color={(songId == item.id) ?'rgb(34, 205, 248)':'#999'}></AtIcon>
                        </View>
                    </View>
                ))}
            </View>
        )
    }
}
