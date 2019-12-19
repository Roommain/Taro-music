import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './index.less'
import { api } from '../../../api/api'
import { AtLoadMore,AtIcon,AtTabs, AtTabsPane,AtCard } from 'taro-ui'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
            coverImgUrl: '',
            status: 'loading',
            showList: [],
            isPlay: true,
            reserveList: [],
            songId: '',
            singerAlbumList: [],
            singerMvList: [],
            briefDesc:'',
        }
    }
    config = {
        navigationBarTitleText: '歌手详情'
    }
    componentWillMount() {
        var id = this.$router.params.id
        this.getSingerSongList(id)
        this.getSingerAlbum(id)
        this.getSingerMv(id)
        this.getSingerDescribe(id)
    }
    //获取歌手单曲
    getSingerSongList(id) { 
        Taro.request({
            url: api + '/artists?id=' + id,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            this.setState({
                coverImgUrl: res.data.artist.img1v1Url,
                showList: res.data.hotSongs.slice(0, 20),
                reserveList: res.data.hotSongs.slice(20,50),
                status: 'more'
            })
            Taro.setStorageSync('songList', res.data.hotSongs.slice(0, 20))
        })  
    }
    //获取歌手专辑
    getSingerAlbum(id) { 
        Taro.request({
            url: api + '/artist/album?id=' + id,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            this.setState({
                singerAlbumList: res.data.hotAlbums,
            })
        })  
    }
    //获取歌手专辑
    getSingerMv(id) { 
        Taro.request({
            url: api + '/artist/mv?id=' + id,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            console.log('mv', res)
            this.setState({
                singerMvList: res.data.mvs,
            })
        })  
    }
    //获取歌手描述
    getSingerDescribe(id) { 
        Taro.request({
            url: api + '/artist/desc?id=' + id,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => { 
            console.log('获取歌手描述', res.data)
            this.setState({
                briefDesc: res.data.briefDesc,
            })
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

    tabsClick (value) {
        this.setState({
          current: value
        })
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
    formatDate(now) { 
        var d=new Date(now); 
        var year=d.getFullYear()
        var month=d.getMonth()+1
        var date=d.getDate()
        return year+"-"+month+"-"+date
    } 
    getAlbumList(id) { 
        console.log('11111', id)
        Taro.navigateTo({
            url: '/pages/music/albumList/index?id=' + id
        })
    }
    goTOVideoPlay(id) { 
        Taro.navigateTo({
            url: '/pages/videoPlay/index?id=' + id
        })
    }
    count(playCount) {
        return  Math.floor((playCount/10000)*10)/10
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
        const tabList = [{ title: '歌曲' }, { title: '专辑' }, { title: 'MV' }, { title: '介绍' }]
        const { coverImgUrl,showList,status,songId,singerAlbumList,singerMvList,briefDesc } = this.state
        return (
            <div>
                <View>
                    <Image className='img'
                        src={coverImgUrl}
                    />
                </View>
                <AtTabs current={this.state.current} tabList={tabList} onClick={this.tabsClick.bind(this)}>
                    <AtTabsPane current={this.state.current} index={0} >
                        <View>
                        {showList.map((item,index) => (
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
                    </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={1}>
                        <View>
                            {singerAlbumList.length != 0 ? singerAlbumList.map((item,index) => (
                                <View className='list clearfix' key={item.id} onClick={() => this.getAlbumList(item.id)}>
                                    <View className='album-left'>
                                        <Image className='albumImg'
                                            src={item.blurPicUrl}
                                        />
                                    </View> 
                                    <View className='album-right'>
                                        <View className='name'>{item.name}</View>
                                        <View className='synopsis'>{this.formatDate(item.publishTime)}-歌曲{item.size}</View>
                                    </View>
                                </View>
                            )):<View className='img-box'><Image className='no-data-img' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575102627721&di=9785845886184a9d2e6f871f3c442408&imgtype=0&src=http%3A%2F%2Fimg.58cdn.com.cn%2Fdist%2Fjxedt%2Fpc%2Fproducts%2Fjxregister%2Fimages%2Fno_data.png'/></View>} 
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={2}>
                        <View>
                            {singerMvList.length != 0 ? singerMvList.map((item,index) => (
                                <View className='mv-list clearfix' key={item.id} onClick={() => this.goTOVideoPlay(item.id)}>
                                    <View className='mv-left'>
                                        <Image className='mv-img'
                                            src={item.imgurl}
                                        />
                                        <View className='icon'>
                                            <AtIcon value='play' size='20' color='#fff'></AtIcon>{this.count(item.playCount)}万
                                        </View>                                        
                                    </View> 
                                    <View className='mv-right'>
                                        <View className='name'>{item.name}</View>
                                        <View className='synopsis'>{item.publishTime}</View>
                                    </View>
                                </View>
                            )):<View className='img-box'><Image className='no-data-img' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575102627721&di=9785845886184a9d2e6f871f3c442408&imgtype=0&src=http%3A%2F%2Fimg.58cdn.com.cn%2Fdist%2Fjxedt%2Fpc%2Fproducts%2Fjxregister%2Fimages%2Fno_data.png'/></View>}
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={3}>
                        <View>
                            <AtCard
                            className='card'
                            title='个人简介'
                            >
                                {briefDesc}
                            </AtCard>
                        </View>
                    </AtTabsPane>
                </AtTabs>


            </div>
        )
    }
}
