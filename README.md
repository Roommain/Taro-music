## 基于Taro实现的音乐播放微信小程序

github地址：[基于Taro微信小程序音乐播放器](https://github.com/Roommain/Taro-music)  
接口地址：[网易云音乐 API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
<hr/>

### 技术栈
 - react 
 - Taro
 - Taro-ui
 - 微信小程序

<br/>

### 项目截图
<table>
	 <tr>
        <td><img src='https://img-blog.csdnimg.cn/20190308124144379.gif'></img></td>
        <td><img src='https://img-blog.csdnimg.cn/20190308124247852.gif'></img></td>
        <td><img src='https://img-blog.csdnimg.cn/20190308134737187.gif'></img></td>
         <td><img src='https://img-blog.csdnimg.cn/20190308134901875.gif'></img></td>
    </tr>
</table>
<table>
	 <tr>
        <td><img src='https://img-blog.csdnimg.cn/2019030813592034.png'></img></td>
        <td><img src='https://img-blog.csdnimg.cn/20190308140452717.gif'></img></td>
        <td><img src='https://img-blog.csdnimg.cn/20190308141114131.gif'></img></td>
        <td><img src='https://img-blog.csdnimg.cn/20190308140526928.gif'></img></td>
    </tr>
</table>

<br/>


### 实现的功能
- [x] 音乐 分类 搜索
- [x] 排行
- [x] 播放器（上一首、下一首、暂停、播放、喜欢）
- [x] 歌词功能
- [x] 视频播放功能
 ...
<br/>

### 目录结构（src）

```javascript
|—— api                                        # 接口
├── assets                                     # 资源文件，包括icon、less公共文件                     
├── components                                 # 自定义组件
├── pages                                      # 路由跳转的页面
├── utils                                      # 工具函数                          
```

<br/>


### 运行本项目
首先克隆本项目

```shell
git clone https://github.com/Roommain/Taro-music.git
```


克隆接口项目

```shell
git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
```

进入项目并安装依赖

```
cd NeteaseCloudMusicApi
yarn install 
```

接口项目以8000端口启动(可在app.js中修改启动端口)

<br/>


<br/>

