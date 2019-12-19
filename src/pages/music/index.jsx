import Taro, { Component } from '@tarojs/taro'
import './index.less'
import { AtGrid,AtList, AtListItem,AtFab,AtIcon  } from "taro-ui"
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import imgsrc from '../../assets/tab-bar/erji.png'
import { api } from '../../api/api'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            list: [],
            songId: '',
            songImg: '',
            recommendList:[],  //推荐歌单
            singerList: []
        }
    }
    toViewMore() {
        Taro.navigateTo({
            url: '/pages/music/hotSinger/index'
        })
    }
    config = {
        navigationBarTitleText: '音乐'
    }
    selectType(e) {
        if (e.id == 1) {
            Taro.navigateTo({
                url: '/pages/music/hotSinger/index'
            })
        } else if (e.id == 2) {
            Taro.navigateTo({
                url: '/pages/recommendMv/index'
            })
        } else if (e.id == 3) { 
            Taro.navigateTo({
                url: '/pages/songMenu/index'
            })
        }
    }
    componentWillMount() {
        Taro.removeStorageSync('songId')
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
    onButtonClick() { 
        var id = Taro.getStorageSync('songId')
        Taro.navigateTo({
            url: '/pages/player/index?id=' + id
        })
    }
    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow() {
        this.setState({
            songId: Taro.getStorageSync('songId'),
            songImg : Taro.getStorageSync('songImg')
        })
    }

    componentDidHide () { }

    render() {
        const { list, singerList,recommendList,songId,songImg} = this.state
        const muList = [
            {
                id:'1',
                image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=468344651,2427584021&fm=26&gp=0.jpg',
                value: '热门歌手'
            },
            {
                id:'2',
                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575437432673&di=a63cfc1e2c4d27a4b88a5235f2815263&imgtype=0&src=http%3A%2F%2Fwww.lgstatic.com%2Fthumbnail_300x300%2Fimage1%2FM00%2F3B%2F8F%2FCgo8PFWwubKAC_n-AAAVMejmm0c046.png%3Fcc%3D0.3123178686410819',
                value: 'MV榜单'
            },
            {
                id:'3',
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: '精品歌单'
            }
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
                        <AtListItem hasBorder={false} title='歌手列表' onClick={this.toViewMore} extraText='查看更多'/>
                    </AtList>
                    <View className='at-row at-row--wrap singer'>
                        {singerList.map(item => (
                            <View className='at-col at-col-3' key={item.id} onClick={() => this.getSingerSong(item.id)}>
                                <View className='singerImg'>
                                    <Image className='singer-img'
                                        src={item.picUrl}
                                    />                                    
                                </View> 
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
                                <View className='recommendedImg'>
                                    <Image className='recommended-img'
                                        src={item.picUrl}
                                    />
                                    <View className='headset'>
                                        <Image className='headset-img'
                                            src={imgsrc}
                                        />                                    
                                    </View>                                    
                                </View> 

                                <View className='recommended-name'>{item.name}</View>
                            </View>                          
                        ))}
                    </View>
                </div>
                <MovableArea className='movable-area'>
                    <MovableView className='movable-view' direction='all'>
                        <View> {songId != ''?
                            <View className='come-play' onClick={this.onButtonClick.bind(this)}>
                                {/* <AtIcon className='at-icon rotate' value='sound' size='30' color='#fff'></AtIcon> */}
                                <Image className='at-icon rotate'
                                    src={songImg}
                                />  
                            </View>:'' }                  
                        </View>  
                    </MovableView>
                </MovableArea>
                
            </div>
        )
    }
}
