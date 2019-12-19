import Taro, { Component } from '@tarojs/taro'
import { View, Video } from '@tarojs/components'
import './index.less'
import { api } from '../../api/api'
import { AtTabBar } from 'taro-ui'
import imgsrc from '../../assets/tab-bar/bofang.png'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            mvData: {},
            mvUrl: '',
            mvCover: ''
        }
    }
    config = {
        navigationBarTitleText: '视频播放'
    }

    componentWillMount() { 
        var id = this.$router.params.id;
        this.getMvData(id)
    }
    //获取 mv 数据
    getMvData(id) { 
        Taro.request({
            url: api + '/mv/detail?mvid=' + id,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            this.setState({
                mvData: res.data.data,
                mvUrl: res.data.data.brs[720],
                mvCover: res.data.data.cover
            })
        }) 
    }
    count(playCount) {
        return  Math.floor((playCount/10000)*10)/10
    }
    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render() {
        const { mvUrl,mvCover ,mvData,SimilarityMvList} = this.state
        return (
            <View className='components-page'>
                <Video
                    className='video'
                    src={mvUrl}
                    controls={true}
                    autoplay={true}
                    poster={mvCover}
                    initialTime='0'
                    id='video'
                    loop={false}
                    muted={false}
                />
                <View className='centre'>
                    <View>{mvData.name}</View>
                    <View className='statistics'>发布：{mvData.publishTime} | 播放：{this.count(mvData.playCount)}万</View>
                    <View className='desc'>{mvData.desc}</View>                    
                </View>
          </View>
        )
    }
}
