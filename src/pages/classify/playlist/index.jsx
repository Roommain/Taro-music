import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './index.less'
import { api } from '../../../api/api'
import { AtLoadMore,AtIcon } from 'taro-ui'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            coverImgUrl: '',
            status: 'loading',
            showList: [],
            isPlay: true,
            reserveList: [],
            songId: ''
        }
    }
    config = {
        navigationBarTitleText: '歌单详情'
    }
    componentWillMount() {
        var id = this.$router.params.id
        this.getRankingList(id)
    }
    getRankingList(id) { 
        Taro.request({
            url: api + '/playlist/detail?id='+ id,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            this.setState({
                coverImgUrl: res.data.playlist.coverImgUrl,
                showList: res.data.playlist.tracks.slice(0, 20),
                reserveList: res.data.playlist.tracks.slice(20,50),
                status: 'more'
            })
            Taro.setStorageSync('songList', res.data.playlist.tracks.slice(0, 20))
        })        
    }
    handleClick () {
        // 开始加载
        this.setState({
          status: 'loading'
        })
        this.state.reserveList.forEach(e => {
            this.state.showList.push(e)
        });
        Taro.setStorageSync('songList', this.state.showList)
        // 模拟异步请求数据
        setTimeout(() => {
          // 没有更多了
          this.setState({
            status: 'noMore'
          })
        }, 2000)
    }
    play(id) { 
        this.setState({
            isPlay: !this.state.isPlay
        })
        // Taro.setStorageSync('songId', id)
        Taro.navigateTo({
            url: '/pages/player/index?id=' + id
        })
    }
    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow() {
        const songId = Taro.getStorageSync('songId')
        this.setState({
            songId: songId
        })
    }

    componentDidHide () { }

    render() {
        const { coverImgUrl,showList,status,songId } = this.state
        return (
            <div>
                <View>
                    <Image className='img'
                        src={coverImgUrl}
                    />
                </View> 
                {showList.map((item, index) => (
                    <View className={(songId == item.id)?'list clearfix active-list':'list clearfix'} key={item.id} onClick={() => this.play(item.id)}>
                        <View className='index'>{index+1}</View>
                        <View className='left'>
                            <Image className='singerImg'
                                src={item.al.picUrl}
                            />
                        </View> 
                        <View className='right'>
                            <View className='name'>{item.name}</View>
                            <View className='synopsis'>{item.ar[0].name}-{item.name}</View>
                        </View>
                        <View className='play'>
                            <AtIcon value={songId == item.id ? 'pause' : 'play'} size='30' color={(songId == item.id) ?'rgb(34, 205, 248)':'#999'}></AtIcon>
                        </View>
                    </View>
                ))}
                <AtLoadMore
                    onClick={this.handleClick.bind(this)}
                    status={status}
                />
            </div>
        )
    }
}
