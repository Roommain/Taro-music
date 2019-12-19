"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../api/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imgsrc = "/assets/tab-bar/timg.jpg";

var backgroundAudioManager = _index2.default.getBackgroundAudioManager();

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__22", "$compid__23", "$compid__24", "$compid__25", "$compid__26", "$compid__27", "$compid__28", "$compid__29", "$compid__30", "$compid__31", "typeNum", "img", "isPlay", "isCollect", "songs", "singerName", "musicId", "timeLenght", "playTime", "myAudio", "lyrics", "playLyrics"], _this.config = {
      navigationBarTitleText: '音乐播放'
    }, _this.customComponents = ["AtIcon", "AtSlider", "AtMessage"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
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
        typeNum: 0
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var songId = _index2.default.getStorageSync('songId');
      var id = this.$router.params.id;
      this.autoplay(id);
    }
  }, {
    key: "autoplay",
    value: function autoplay(id) {
      var _this2 = this;

      this.getLyrics(id);
      this.setState({
        musicId: 'https://music.163.com/song/media/outer/url?id=' + id + '.mp3'
      });
      _index2.default.request({
        url: _api.api + '/song/detail?ids=' + id,
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this2.setState({
          songs: res.data.songs[0],
          img: res.data.songs[0].al.picUrl,
          singerName: res.data.songs[0].ar[0].name
        });
        var bgMusic = _index2.default.getBackgroundAudioManager();
        _this2.setState({
          myAudio: bgMusic
        });
        if (_index2.default.getStorageSync('songId') != id) {
          bgMusic.src = _this2.state.musicId;
          _index2.default.setStorageSync('songId', id);
          _index2.default.setStorageSync('songImg', res.data.songs[0].al.picUrl);
        }
        bgMusic.title = res.data.songs[0].name;
        bgMusic.onTimeUpdate(function () {
          _this2.setState({
            timeLenght: bgMusic.duration,
            playTime: bgMusic.currentTime
          });
        });
        bgMusic.onEnded(function () {
          _this2.next();
        });
        bgMusic.onError(function () {
          _index2.default.atMessage({
            'message': '播放错误，自动播放下一首',
            'type': 'error',
            'duration': 1500
          });
          setTimeout(function () {
            _this2.next();
          }, 2000);
        });
      });
    }
    //获取歌词

  }, {
    key: "getLyrics",
    value: function getLyrics(id) {
      var _this3 = this;

      this.setState({
        lyrics: []
      });
      _index2.default.request({
        url: _api.api + '/lyric?id=' + id,
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        var lines = res.data.nolyric ? [] : res.data.lrc.lyric.split('\n');
        for (var i = 0; i < lines.length; i++) {
          var subTxt = lines[i].substring(lines[i].indexOf("[") + 1, lines[i].indexOf("]"));
          var c = lines[i].substr(lines[i].lastIndexOf("]") + 1);
          var obj = {};
          obj.time = subTxt.split('.')[0];
          obj.content = c.trim();
          _this3.state.lyrics.push(obj);
        }
      });
    }
  }, {
    key: "getPlayLyrics",
    value: function getPlayLyrics(time) {
      var playTime1 = this.conversion(time);
      for (var j = 0; j < this.state.lyrics.length; j++) {
        if (this.state.lyrics[j].time == playTime1) {
          return this.state.lyrics[j].content;
        }
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      var songList = _index2.default.getStorageSync('songList');
      var songId = _index2.default.getStorageSync('songId');
      for (var i in songList) {
        if (songList[i].id == songId) {
          if (i == 0) {
            var num = Number(songList.length);
            var id = songList[num - 1].id;
            this.autoplay(id);
          } else {
            var id = songList[--i].id;
            this.autoplay(id);
          }
        }
      }
    }
  }, {
    key: "next",
    value: function next() {
      var songList = _index2.default.getStorageSync('songList');
      var songId = _index2.default.getStorageSync('songId');
      for (var i in songList) {
        if (songList[i].id == songId) {
          var num = Number(songList.length) - 1;
          if (i == num) {
            var id = songList[0].id;
            this.autoplay(id);
          } else {
            var id = songList[++i].id;
            this.autoplay(id);
          }
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (this.state.isPlay) {
        this.setState({
          isPlay: false
        });
        this.state.myAudio.pause();
        _index2.default.removeStorageSync('songId');
      } else if (!this.state.isPlay) {
        this.setState({
          isPlay: true
        });
        this.state.myAudio.play();
        _index2.default.getStorageSync('songId');
      }
    }
  }, {
    key: "pattern",
    value: function pattern() {
      if (this.state.typeNum % 3 == 0) {
        wx.showToast({
          title: '已切换到单曲循环',
          icon: 'none'
        });
      } else if (this.state.typeNum % 3 == 1) {
        wx.showToast({
          title: '已切换到随机播放',
          icon: 'none'
        });
      } else {
        wx.showToast({
          title: '已切换到顺序播放',
          icon: 'none'
        });
      }
      this.setState({
        typeNum: this.state.typeNum + 1
      });
    }
  }, {
    key: "format",
    value: function format(time) {
      var minutes = time / 60 | 0; // |是向下取正
      var seconds = time % 60 | 0;
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return minutes + ':' + seconds;
    }
  }, {
    key: "conversion",
    value: function conversion(time) {
      var minutes = time / 60 | 0; // |是向下取正
      var seconds = time % 60 | 0;
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return minutes + ':' + seconds;
    }
  }, {
    key: "sliderChange",
    value: function sliderChange(e) {
      this.state.myAudio.seek(e.value);
      this.getPlayLyrics(e.value);
    }
  }, {
    key: "collection",
    value: function collection() {
      if (!this.state.isCollect) {
        wx.showToast({
          title: '表面收藏成功',
          image: imgsrc
        });
      } else {
        wx.showToast({
          title: '取消收藏成功',
          image: imgsrc
        });
      }
      this.setState({
        isCollect: !this.state.isCollect
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
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
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      // this.next();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__22"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__22 = _genCompid2[0],
          $compid__22 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__23"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__23 = _genCompid4[0],
          $compid__23 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__24"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__24 = _genCompid6[0],
          $compid__24 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__25"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__25 = _genCompid8[0],
          $compid__25 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__26"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__26 = _genCompid10[0],
          $compid__26 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__27"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__27 = _genCompid12[0],
          $compid__27 = _genCompid12[1];

      var _genCompid13 = (0, _index.genCompid)(__prefix + "$compid__28"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__28 = _genCompid14[0],
          $compid__28 = _genCompid14[1];

      var _genCompid15 = (0, _index.genCompid)(__prefix + "$compid__29"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__29 = _genCompid16[0],
          $compid__29 = _genCompid16[1];

      var _genCompid17 = (0, _index.genCompid)(__prefix + "$compid__30"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__30 = _genCompid18[0],
          $compid__30 = _genCompid18[1];

      var _genCompid19 = (0, _index.genCompid)(__prefix + "$compid__31"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__31 = _genCompid20[0],
          $compid__31 = _genCompid20[1];

      var _state = this.__state,
          musicId = _state.musicId,
          isPlay = _state.isPlay,
          isCollect = _state.isCollect,
          timeLenght = _state.timeLenght,
          songs = _state.songs,
          playTime = _state.playTime,
          img = _state.img,
          singerName = _state.singerName,
          lyrics = _state.lyrics,
          typeNum = _state.typeNum;

      var status = null;
      if (typeNum % 3 == 0) {
        // return 'repeat-play'
        _index.propsManager.set({
          "value": "repeat-play",
          "size": "30",
          "color": "#f60"
        }, $compid__22, $prevCompid__22);
      } else if (typeNum % 3 == 1) {
        // return 'reload'
        _index.propsManager.set({
          "value": "reload",
          "size": "30",
          "color": "#f60"
        }, $compid__23, $prevCompid__23);
      } else {
        // return 'shuffle-play'
        _index.propsManager.set({
          "value": "shuffle-play",
          "size": "30",
          "color": "#f60"
        }, $compid__24, $prevCompid__24);
      }
      var anonymousState__temp = lyrics.length != 0 ? this.getPlayLyrics(playTime) : '玩命加载中...';
      var anonymousState__temp2 = this.format(playTime);

      this.anonymousFunc0 = function (e) {
        return _this4.sliderChange(e);
      };

      var anonymousState__temp3 = this.format(timeLenght);

      this.anonymousFunc1 = function () {
        return _this4.pattern();
      };

      this.anonymousFunc2 = function () {
        return _this4.prev();
      };

      this.anonymousFunc3 = function () {
        return _this4.play();
      };

      this.anonymousFunc4 = function () {
        return _this4.next();
      };

      this.anonymousFunc5 = function () {
        return _this4.collection();
      };

      _index.propsManager.set({
        "className": "slider-width",
        "step": 1,
        "value": playTime,
        "max": timeLenght,
        "onChange": this.anonymousFunc0,
        "activeColor": "#f60",
        "backgroundColor": "#BDBDBD",
        "blockColor": "#f60",
        "blockSize": 12
      }, $compid__25, $prevCompid__25);
      _index.propsManager.set({
        "value": "prev",
        "size": "30",
        "color": "#f60"
      }, $compid__26, $prevCompid__26);
      isPlay && _index.propsManager.set({
        "value": "pause",
        "size": "30",
        "color": "#f60"
      }, $compid__27, $prevCompid__27);
      !isPlay && _index.propsManager.set({
        "value": "play",
        "size": "30",
        "color": "#f60"
      }, $compid__28, $prevCompid__28);
      _index.propsManager.set({
        "value": "next",
        "size": "30",
        "color": "#f60"
      }, $compid__29, $prevCompid__29);
      isCollect && _index.propsManager.set({
        "value": "heart-2",
        "size": "30",
        "color": "#f60"
      }, $compid__30, $prevCompid__30);
      !isCollect && _index.propsManager.set({
        "value": "heart",
        "size": "30",
        "color": "#f60"
      }, $compid__31, $prevCompid__31);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__22: $compid__22,
        $compid__23: $compid__23,
        $compid__24: $compid__24,
        $compid__25: $compid__25,
        $compid__26: $compid__26,
        $compid__27: $compid__27,
        $compid__28: $compid__28,
        $compid__29: $compid__29,
        $compid__30: $compid__30,
        $compid__31: $compid__31
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"], _class.$$componentPath = "pages/player/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));