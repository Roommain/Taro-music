import Taro, { Component } from '@tarojs/taro'
import { View, Text , Audio,Image } from '@tarojs/components'
import './index.less'
import { api } from '../../api/api'
import imgsrc from '../../assets/tab-bar/timg.jpg'
import { AtButton,AtSlider,AtIcon,AtMessage,AtToast } from 'taro-ui'
const backgroundAudioManager = Taro.getBackgroundAudioManager()
export default class Index extends Component {  
    constructor() {
        super(...arguments)
        this.state = {
            musicId: '',
            isPlay: true,
            isCollect: false,
            timeLenght: null,
            songs: {},
            playTime: 0,
            myAudio: {},
            img: '',
            singerName: '',
            lyrics: [],
            playLyrics: '',
            typeNum: 0,
        }
    }
    config = {
        navigationBarTitleText: '音乐播放'
    }

    componentWillMount() {
        const songId = Taro.getStorageSync('songId')
        var id = this.$router.params.id;    
        this.autoplay(id);  
    }
    autoplay(id) {
        this.getLyrics(id);
        this.setState({
            musicId: 'https://music.163.com/song/media/outer/url?id='+ id +'.mp3'
        })
        Taro.request({
            url: api + '/song/detail?ids=' + id,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            this.setState({
                songs: res.data.songs[0],
                img: res.data.songs[0].al.picUrl,
                singerName:res.data.songs[0].ar[0].name
            })
            const bgMusic = Taro.getBackgroundAudioManager();
            this.setState({
                myAudio: bgMusic
            })
            if (Taro.getStorageSync('songId') != id) {
                bgMusic.src = this.state.musicId
                Taro.setStorageSync('songId', id)
                Taro.setStorageSync('songImg', res.data.songs[0].al.picUrl)
            }
            bgMusic.title = res.data.songs[0].name
            bgMusic.onTimeUpdate(() => {
                this.setState({
                    timeLenght: bgMusic.duration,
                    playTime: bgMusic.currentTime
                })
            })
            bgMusic.onEnded(() => {
                this.next();
            })
            bgMusic.onError(() => {
                Taro.atMessage({
                    'message': '播放错误，自动播放下一首',
                    'type': 'error',
                    'duration':1500
                })
                setTimeout(() => { 
                    this.next();
                },2000) 
            })
        })
    }
    //获取歌词
    getLyrics(id) { 
        this.setState({
            lyrics: [],
        })
        Taro.request({
            url: api + '/lyric?id=' + id,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            const lines = res.data.nolyric?[]:res.data.lrc.lyric.split('\n')
            for (var i = 0; i < lines.length; i++) { 
                var subTxt = lines[i].substring(lines[i].indexOf("[") + 1, lines[i].indexOf("]"));
                var c = lines[i].substr(lines[i].lastIndexOf("]") + 1)
                var obj = {};
                obj.time = subTxt.split('.')[0];
                obj.content = c.trim();
                this.state.lyrics.push(obj)        
            }
        })
    }
    getPlayLyrics(time) { 
        var playTime1 = this.conversion(time);
        for (var j = 0; j < this.state.lyrics.length; j++) { 
            if (this.state.lyrics[j].time == playTime1) {
                return this.state.lyrics[j].content
            }
        }
    }
    prev() { 
        const songList = Taro.getStorageSync('songList')
        const songId = Taro.getStorageSync('songId')
        for (let i in songList) {
            if (songList[i].id == songId) {
                if (i == 0) {
                    var num = Number(songList.length)
                    var id = songList[num-1].id
                    this.autoplay(id);  
                } else { 
                    var id = songList[--i].id
                    this.autoplay(id);                    
                }
            }
        }  
    }
    next() { 
        const songList = Taro.getStorageSync('songList')
        const songId = Taro.getStorageSync('songId')
        for (let i in songList) {
            if (songList[i].id == songId) {
                var num = Number(songList.length) - 1
                if (i == num) {
                    var id = songList[0].id
                    this.autoplay(id);
                } else { 
                    var id = songList[++i].id
                    this.autoplay(id);                    
                }
            }
        }
    }
    play() {
        if (this.state.isPlay) {
            this.setState({
                isPlay: false,
            })
            this.state.myAudio.pause()
            Taro.removeStorageSync('songId')
        } else if (!this.state.isPlay) { 
            this.setState({
                isPlay: true
            })
            this.state.myAudio.play()
            Taro.getStorageSync('songId')
        }
    }
    pattern() { 
        if (this.state.typeNum%3 == 0) {
            wx.showToast({
                title: '已切换到单曲循环',
                icon: 'none',
            })
        } else if (this.state.typeNum%3 == 1) {
            wx.showToast({
                title: '已切换到随机播放',
                icon: 'none',
            })
        } else { 
            wx.showToast({
                title: '已切换到顺序播放',
                icon: 'none',
            })
        }
        this.setState({
            typeNum: this.state.typeNum+1
        })
    }
    format(time) {
        let minutes = (time / 60) | 0   // |是向下取正
        let  seconds = time % 60 | 0
        if (seconds<10) {
            seconds = '0' + seconds
        }
        return minutes + ':' + seconds 
    }
    conversion(time) {
        let minutes = (time / 60) | 0   // |是向下取正
        let seconds = time % 60 | 0
        if (minutes<10) {
            minutes = '0' + minutes
        }
        if (seconds<10) {
            seconds = '0' + seconds
        }
        return minutes + ':' + seconds 
    }
    sliderChange(e) {
        this.state.myAudio.seek(e.value)
        this.getPlayLyrics(e.value)
    }
    collection() { 
        if (!this.state.isCollect) {
            wx.showToast({
                title: '表面收藏成功',
                image: imgsrc,
            })
        } else { 
            wx.showToast({
                title: '取消收藏成功',
                image: imgsrc,
            })
        }
        this.setState({
            isCollect: !this.state.isCollect,
        })
    }
    componentDidMount() {
        // const innerAudioContext = Taro.createInnerAudioContext()
        // this.setState({
        //     myAudio: innerAudioContext
        // })  
        // innerAudioContext.src = this.state.musicId
        // innerAudioContext.autoplay = true
        // innerAudioContext.onCanplay(() => {
        // })
        // innerAudioContext.onTimeUpdate(() => {
        //     this.setState({
        //         timeLenght: innerAudioContext.duration,
        //         playTime: innerAudioContext.currentTime
        //     })
        // })
        // innerAudioContext.onEnded(() => {
        //     console.log('播放结束')
        //     innerAudioContext.destroy()
        // })
        // innerAudioContext.onError(() => {
        //     console.log('播放错误')
        //     innerAudioContext.destroy()
        // })
    }

    componentWillUnmount () { }

    componentDidShow() {
        // this.next();
    }

    componentDidHide () { }

    render() {
        const { musicId, isPlay, isCollect, timeLenght, songs, playTime, img, singerName, lyrics, typeNum } = this.state
        let status = null
        if (typeNum%3 == 0) {
            // return 'repeat-play'
            status = <AtIcon value='repeat-play' size='30' color='#f60'></AtIcon>
        } else if (typeNum%3 == 1) {
            // return 'reload'
            status = <AtIcon value='reload' size='30' color='#f60'></AtIcon>
        } else { 
            // return 'shuffle-play'
            status = <AtIcon value='shuffle-play' size='30' color='#f60'></AtIcon>
        }
        return (
            <View className='play'>
                <Image className='bg-img'
                    src={img}
                />  
                <View className='components'>
                    <View className='music-name'>{songs.name}</View>
                    <View className='singer-name'>{singerName}</View>
                    <View className='singer-img'>
                        <Image className={isPlay?'rotate music-img':'rotate rotate-pause music-img'}
                            src={img}
                        />  
                    </View>
                    <View className='lyric'>{(lyrics.length !=0) ?this.getPlayLyrics(playTime):'玩命加载中...'}</View>
                    <View className='music-play'>
                        <View className='slider'>
                            <span class="start-time">{this.format(playTime)}</span>
                            <AtSlider className='slider-width' step={1} value={playTime} max={timeLenght} onChange={(e)=>this.sliderChange(e)} activeColor='#f60' backgroundColor='#BDBDBD' blockColor='#f60' blockSize={12}></AtSlider>
                            <span class="end-time">{this.format(timeLenght)}</span>
                        </View>
                        <View className='play-button'>
                            <View className='type' onClick={() => this.pattern()}>{status}</View>
                            <View className='prev' onClick={() => this.prev()}><AtIcon value='prev' size='30' color='#f60'></AtIcon></View>
                            <View className='play-btn' onClick={() => this.play()}>{isPlay ? <AtIcon value='pause' size='30' color='#f60'></AtIcon> : <AtIcon value='play' size='30' color='#f60'></AtIcon>}</View>
                            <View className='next' onClick={() => this.next()}><AtIcon value='next' size='30' color='#f60'></AtIcon></View>
                            <View className='heart' onClick={() => this.collection()}>{isCollect ? <AtIcon value='heart-2' size='30' color='#f60'></AtIcon> : <AtIcon value='heart' size='30' color='#f60'></AtIcon>}</View>
                        </View>                        
                    </View>
                </View> 
                <AtMessage />
            </View>
        )
    }
}
