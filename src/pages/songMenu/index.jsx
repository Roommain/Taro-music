import Taro, { Component } from '@tarojs/taro'
import { View,Text, Image } from '@tarojs/components'
import './index.less'
import { AtTag } from 'taro-ui'
import { api } from '../../api/api'
import imgsrc from '../../assets/tab-bar/erji.png'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            songMenuList: [],
            tagName: ''
        }
    }
    config = {
        navigationBarTitleText: '精品歌单'
    }

    componentWillMount() {
        this.getSongMenu('全部')
    }
    getSongMenu(name) {
        Taro.request({
            url: api + '/top/playlist/highquality?cat=' + name + '&limit=10',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            this.setState({
                songMenuList: res.data.playlists||[],
                tagName: name
            })
        })
    }
    count(playCount) {
        return  Math.floor((playCount/10000)*10)/10
    }
    onClick (value) {
        this.getSongMenu(value.name)
    }
    getRecommended(id) { 
        Taro.navigateTo({
            url: '/pages/classify/playlist/index?id=' + id
        })
    }
    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow() { }

    componentDidHide () { }

    render() {
        const { songMenuList,tagName } = this.state
        return (
            <View>
                <View className='tags'>
                    {tagName == '全部'?<AtTag className='at-tag' name='全部' type='primary' active onClick={this.onClick.bind(this)}>全部</AtTag>:<AtTag className='at-tag' name='全部' type='primary' onClick={this.onClick.bind(this)}>全部</AtTag>}
                    {tagName == '华语'? <AtTag className='at-tag' name='华语' type='primary' active onClick={this.onClick.bind(this)}>华语</AtTag> : <AtTag className='at-tag' name='华语' type='primary' onClick={this.onClick.bind(this)}>华语</AtTag>}
                    {tagName == '古风'? <AtTag className='at-tag' name='古风' type='primary' active onClick={this.onClick.bind(this)}>古风</AtTag> : <AtTag className='at-tag' name='古风' type='primary' onClick={this.onClick.bind(this)}>古风</AtTag>}
                    {tagName == '欧美'? <AtTag className='at-tag' name='欧美' type='primary' active onClick={this.onClick.bind(this)}>欧美</AtTag> : <AtTag className='at-tag' name='欧美' type='primary' onClick={this.onClick.bind(this)}>欧美</AtTag>}
                    {tagName == '流行'?<AtTag className='at-tag' name='流行' type='primary' active onClick={this.onClick.bind(this)}>流行</AtTag>:<AtTag className='at-tag' name='流行' type='primary' onClick={this.onClick.bind(this)}>流行</AtTag>}
                </View>
                <View className='at-row at-row--wrap recommended'>
                        {songMenuList.length != 0 ? songMenuList.map(item => (
                            <View className='at-col at-col-6' key={item.id} onClick={() => this.getRecommended(item.id)}>
                                <View className='recommendedImg'>
                                    <Image className='recommended-img'
                                        src={item.coverImgUrl}
                                    />
                                    <View className='headset'>
                                        <Image className='headset-img'
                                            src={imgsrc}
                                        />                                    
                                    </View>                                    
                                </View> 
                                <View className='recommended-name'>{item.name}</View>
                            </View>                          
                        )):<View className='img-box'><Image className='no-data-img' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575102627721&di=9785845886184a9d2e6f871f3c442408&imgtype=0&src=http%3A%2F%2Fimg.58cdn.com.cn%2Fdist%2Fjxedt%2Fpc%2Fproducts%2Fjxregister%2Fimages%2Fno_data.png'/></View>}
                    </View>
            </View>
        )
    }
}
