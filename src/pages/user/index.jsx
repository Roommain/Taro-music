import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import { AtTabBar } from 'taro-ui'
export default class Index extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0
        }
    }
    config = {
        navigationBarTitleText: '个人'
    }

    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
            <h1>个人</h1>
        )
    }
}
