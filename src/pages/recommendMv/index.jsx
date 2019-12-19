import Taro, { Component } from '@tarojs/taro'
import { View,Text, Image } from '@tarojs/components'
import './index.less'
import { AtTag } from 'taro-ui'
import { api } from '../../api/api'
import imgsrc from '../../assets/tab-bar/bofang.png'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
            mvList: [],
            tagName: ''
        }
    }
    config = {
        navigationBarTitleText: 'MV榜单'
    }

    componentWillMount() {
        this.getRecommendMv('全部')
     }

    getRecommendMv(name) {
        Taro.request({
            url: api + '/mv/all?area=' + name + '&limit=20',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            this.setState({
                mvList: res.data.data,
                tagName: name
            })
        })
    }
    count(playCount) {
        return  Math.floor((playCount/10000)*10)/10
    }
    onClick (value) {
        this.getRecommendMv(value.name)
    }
    goTOVideoPlay(id) { 
        Taro.navigateTo({
            url: '/pages/videoPlay/index?id=' + id
        })
    }
    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render() {
        const { mvList,tagName } = this.state
        return (
            <View>
                <View className='tags'>
                    {tagName == '全部'?<AtTag className='at-tag' name='全部' type='primary' active onClick={this.onClick.bind(this)}>全部</AtTag>:<AtTag className='at-tag' name='全部' type='primary' onClick={this.onClick.bind(this)}>全部</AtTag>}
                    {tagName == '内地' ? <AtTag className='at-tag' name='内地' type='primary' active onClick={this.onClick.bind(this)}>内地</AtTag> : <AtTag className='at-tag' name='内地' type='primary' onClick={this.onClick.bind(this)}>内地</AtTag>}
                    {tagName == '港台' ? <AtTag className='at-tag' name='港台' type='primary' active onClick={this.onClick.bind(this)}>港台</AtTag> : <AtTag className='at-tag' name='港台' type='primary' onClick={this.onClick.bind(this)}>港台</AtTag>}
                    {tagName == '欧美' ? <AtTag className='at-tag' name='欧美' type='primary' active onClick={this.onClick.bind(this)}>欧美</AtTag> : <AtTag className='at-tag' name='欧美' type='primary' onClick={this.onClick.bind(this)}>欧美</AtTag>}
                    {tagName == '日本'?<AtTag className='at-tag' name='日本' type='primary' active onClick={this.onClick.bind(this)}>日韩</AtTag>:<AtTag className='at-tag' name='日本' type='primary' onClick={this.onClick.bind(this)}>日韩</AtTag>}
                </View>
                <View>
                    {mvList.length != 0 ? mvList.map((item,index) =>  
                        <View className='mv-box' key={item.id} onClick={() => this.goTOVideoPlay(item.id)}>
                            <View className='mvImg'>
                                <Image className='mv-img'
                                    src={item.cover}
                                />  
                            </View>
                            <View className='bofang'>
                                <Image className='bofang-img'
                                    src={imgsrc}
                                />  
                            </View>
                            <View className='mv-name'>{item.name}</View>
                            <View className='artist-name'>{item.artistName}</View>
                            <View className='index'>{index+1}</View>
                        </View>
                    ):<View className='img-box'><Image className='no-data-img' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575102627721&di=9785845886184a9d2e6f871f3c442408&imgtype=0&src=http%3A%2F%2Fimg.58cdn.com.cn%2Fdist%2Fjxedt%2Fpc%2Fproducts%2Fjxregister%2Fimages%2Fno_data.png'/></View>}
                </View>
            </View>
        )
    }
}
