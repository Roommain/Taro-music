import Taro, { Component } from '@tarojs/taro'
import './index.less'
import { AtGrid,AtList, AtListItem,AtFab } from "taro-ui"
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import { api } from '../../api/api'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            list: [],
            recommendList:[],  //推荐歌单
            singerList: [
                {
                    id:'1',
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '热门歌手'
                },
                {
                    id:'2',
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '每日推荐'
                },
                {
                    id:'3',
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '精品歌单'
                },
            ]
        }
    }
    toViewMore() {
        Taro.navigateTo({
            url: '/pages/music/hotSinger/index'
        })
    }
    selectType(e) { 
        console.log(e.id)
    }
    componentWillMount() {
        Taro.request({
            url: api + '/banner',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            this.setState({
                list: res.data.banners,
            })
        })
        Taro.request({
            url: api + '/top/artists?offset=0&limit=8',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            this.setState({
                singerList: res.data.artists,
            })
        })
        //每日推荐
        Taro.request({
            url: api + '/personalized?limit=6',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            console.log('res', res)
            this.setState({
                recommendList: res.data.result,
            })
        })
    }
    getSingerSong(id) { 
        Taro.navigateTo({
            url: '/pages/music/singerSong/index?id=' + id
        })
    }
    getRecommended(id) { 
        Taro.navigateTo({
            url: '/pages/classify/playlist/index?id=' + id
        })
    }
    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render() {
        const { list, singerList,recommendList } = this.state
        const muList = [
            {
                id:'1',
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: '热门歌手'
            },
            {
                id:'2',
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: '每日推荐'
            },
            {
                id:'3',
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: '精品歌单'
            },
        ]
        return (
            <div>
                <Swiper
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
                    {list.map(item => (
                    <SwiperItem key={item.id}>
                        <View className='demo-text-1'>
                        <Image className='img'
                            src={item.imageUrl}
                        />
                        </View>
                    </SwiperItem> 
                    ))}
                </Swiper>

                <div>
                    <AtGrid hasBorder={false} onClick={this.selectType} data={muList} />
                </div>  
                <div>
                    <AtList hasBorder={false}>
                        <AtListItem hasBorder={false} title='歌手列表' onClick={this.toViewMore} arrow='right'extraText='查看更多' />
                    </AtList>
                    <View className='at-row at-row--wrap singer'>
                        {singerList.map(item => (
                            <View className='at-col at-col-3' key={item.id} onClick={() => this.getSingerSong(item.id)}>
                                <Image className='singerImg'
                                    src={item.picUrl}
                                />
                                <View className='singer-name'>{item.name}</View>
                            </View>                          
                        ))}
                    </View>
                </div>
                <div>
                    <AtList hasBorder={false}>
                        <AtListItem hasBorder={false} title='每日推荐'/>
                    </AtList>
                    <View className='at-row at-row--wrap recommended'>
                        {recommendList.map(item => (
                            <View className='at-col at-col-4' key={item.id} onClick={() => this.getRecommended(item.id)}>
                                <Image className='recommendedImg'
                                    src={item.picUrl}
                                />
                                <View className='recommended-name'>{item.name}</View>
                            </View>                          
                        ))}
                    </View>
                </div>
            </div>
        )
    }
}
