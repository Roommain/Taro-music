import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import { View, Text,Image } from '@tarojs/components'
import './app.less'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
      pages: [
        'pages/music/index',
        'pages/index/index',
        'pages/classify/index',
        'pages/user/index',
        'pages/videoPlay/index',
        'pages/music/hotSinger/index',
        'pages/music/singerSong/index',
        'pages/music/albumList/index',
        'pages/classify/playlist/index',
        'pages/player/index',
        'pages/recommendMv/index',
        'pages/songMenu/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#d43c33',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
        color: "#666",
        selectedColor: "#b4282d",
        backgroundColor: "#fafafa",
        borderStyle: 'black',
        list: [
            {
            pagePath: "pages/music/index",
            iconPath: "./assets/tab-bar/yinyue1.png",
            selectedIconPath: "./assets/tab-bar/yinyue.png",
            text: "音乐"
            }, {
            pagePath: "pages/classify/index",
            iconPath: "./assets/tab-bar/icon1.png",
            selectedIconPath: "./assets/tab-bar/icon.png",
            text: "分类"
            }
            , {
            pagePath: "pages/index/index",
            iconPath: "./assets/tab-bar/sousuo1.png",
            selectedIconPath: "./assets/tab-bar/sousuo.png",
            text: "搜索"
            }
            // , {
            // pagePath: "pages/user/index",
            // iconPath: "./assets/tab-bar/geren1.png",
            // selectedIconPath: "./assets/tab-bar/geren.png",
            // text: "个人"
            // }
        ]
    },
    requiredBackgroundModes:['audio']
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
    render () {
        return (
            <Index /> 
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
