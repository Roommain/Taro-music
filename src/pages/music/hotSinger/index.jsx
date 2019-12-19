import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem,View, Text,Image } from '@tarojs/components'
import './index.less'
import { api } from '../../../api/api'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            hotSingerList:[]
        }
    }
    config = {
        navigationBarTitleText: '热门歌手'
    }

    componentWillMount() { 
        Taro.request({
            url: api + '/top/artists?offset=0&limit=30',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            console.log('res', res)
            this.setState({
                hotSingerList: res.data.artists,
            })
        })
    }
    getSingerSong(id) { 
        Taro.navigateTo({
            url: '/pages/music/singerSong/index?id=' + id
        })
    }
    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render() {
        const { hotSingerList } = this.state
        return (
            <div>
                {hotSingerList.map(item => (
                    <View className='list clearfix' key={item.id} onClick={() => this.getSingerSong(item.id)}>
                        <View className='left'>
                            <Image className='singerImg'
                                src={item.picUrl}
                            />
                        </View> 
                        <View className='right'>
                            <View className='singer-name'>歌手：{item.name}</View>
                            <View className='singer-name'>专辑：{item.albumSize} 单曲：{item.musicSize}</View>
                        </View> 
                    </View>
                ))}
            </div>
        )
    }
}
