import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem,View, Text,Image } from '@tarojs/components'
import { AtCard } from "taro-ui"
import './index.less'
import { api } from '../../api/api'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            rankingList: [],
            rankingList2:[]
        }
    }
    goDetail (id) {
        Taro.navigateTo({
            url: '/pages/classify/playlist/index?id=' + id
        })
    }
    componentWillMount() {
        Taro.request({
            url: api + '/toplist/detail',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            this.setState({
                rankingList: res.data.list.slice(0, 4),
                rankingList2: res.data.list.slice(4)
            })
        })
    }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render() {
        const { rankingList,rankingList2 } = this.state
        return (
            <div>
                {rankingList.map(item => (
                    <View className='list clearfix' key={item} onClick={() => this.goDetail(item.id)}>
                        <View className='left'>
                            <Image className='singerImg'
                                src={item.coverImgUrl}
                            />
                        </View> 
                        <View className='right'>
                            <View>{item.name}</View>
                            {item.tracks.map((song, index) => (
                                <View key={index} className='name'>{index + 1}.{song.first}- {song.second}</View>
                            ))}
                        </View> 
                    </View>
                ))}
                <View className='at-row at-row--wrap recommended'>
                    {rankingList2.map(item => (
                        <View className='at-col at-col-4' key={item} onClick={() => this.goDetail(item.id)}>
                            <Image className='recommendedImg'
                                src={item.coverImgUrl}
                            />
                            <View className='recommended-name'>{item.name}</View>
                        </View>                          
                    ))}
                </View>
            </div>
        )
    }
}
