"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../../api/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray9", "loopArray10", "loopArray11", "$compid__11", "$compid__12", "$compid__13", "$compid__14", "$compid__15", "$compid__16", "$compid__17", "coverImgUrl", "songId", "showList", "singerAlbumList", "singerMvList", "briefDesc", "current", "status", "isPlay", "reserveList"], _this.config = {
      navigationBarTitleText: '歌手详情'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.customComponents = ["AtTabs", "AtTabsPane", "AtIcon", "AtLoadMore", "AtCard"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
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
        briefDesc: ''
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var id = this.$router.params.id;
      this.getSingerSongList(id);
      this.getSingerAlbum(id);
      this.getSingerMv(id);
      this.getSingerDescribe(id);
    }
    //获取歌手单曲

  }, {
    key: "getSingerSongList",
    value: function getSingerSongList(id) {
      var _this2 = this;

      _index2.default.request({
        url: _api.api + '/artists?id=' + id,
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this2.setState({
          coverImgUrl: res.data.artist.img1v1Url,
          showList: res.data.hotSongs.slice(0, 20),
          reserveList: res.data.hotSongs.slice(20, 50),
          status: 'more'
        });
        _index2.default.setStorageSync('songList', res.data.hotSongs.slice(0, 20));
      });
    }
    //获取歌手专辑

  }, {
    key: "getSingerAlbum",
    value: function getSingerAlbum(id) {
      var _this3 = this;

      _index2.default.request({
        url: _api.api + '/artist/album?id=' + id,
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this3.setState({
          singerAlbumList: res.data.hotAlbums
        });
      });
    }
    //获取歌手专辑

  }, {
    key: "getSingerMv",
    value: function getSingerMv(id) {
      var _this4 = this;

      _index2.default.request({
        url: _api.api + '/artist/mv?id=' + id,
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        console.log('mv', res);
        _this4.setState({
          singerMvList: res.data.mvs
        });
      });
    }
    //获取歌手描述

  }, {
    key: "getSingerDescribe",
    value: function getSingerDescribe(id) {
      var _this5 = this;

      _index2.default.request({
        url: _api.api + '/artist/desc?id=' + id,
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        console.log('获取歌手描述', res.data);
        _this5.setState({
          briefDesc: res.data.briefDesc
        });
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this6 = this;

      // 开始加载
      this.setState({
        status: 'loading'
      });
      this.state.reserveList.forEach(function (e) {
        _this6.state.showList.push(e);
      });
      _index2.default.setStorageSync('songList', this.state.showList);
      // 模拟异步请求数据
      setTimeout(function () {
        // 没有更多了
        _this6.setState({
          status: 'noMore'
        });
      }, 2000);
    }
  }, {
    key: "tabsClick",
    value: function tabsClick(value) {
      this.setState({
        current: value
      });
    }
  }, {
    key: "play",
    value: function play(id) {
      this.setState({
        isPlay: !this.state.isPlay
      });
      // Taro.setStorageSync('songId', id)
      _index2.default.navigateTo({
        url: '/pages/player/index?id=' + id
      });
    }
  }, {
    key: "formatDate",
    value: function formatDate(now) {
      var d = new Date(now);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var date = d.getDate();
      return year + "-" + month + "-" + date;
    }
  }, {
    key: "getAlbumList",
    value: function getAlbumList(id) {
      console.log('11111', id);
      _index2.default.navigateTo({
        url: '/pages/music/albumList/index?id=' + id
      });
    }
  }, {
    key: "goTOVideoPlay",
    value: function goTOVideoPlay(id) {
      _index2.default.navigateTo({
        url: '/pages/videoPlay/index?id=' + id
      });
    }
  }, {
    key: "count",
    value: function count(playCount) {
      return Math.floor(playCount / 10000 * 10) / 10;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var songId = _index2.default.getStorageSync('songId');
      this.setState({
        songId: songId
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this7 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__11"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__11 = _genCompid2[0],
          $compid__11 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__12"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__12 = _genCompid4[0],
          $compid__12 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__13"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__13 = _genCompid6[0],
          $compid__13 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__14"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__14 = _genCompid8[0],
          $compid__14 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__15"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__15 = _genCompid10[0],
          $compid__15 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__16"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__16 = _genCompid12[0],
          $compid__16 = _genCompid12[1];

      var _genCompid13 = (0, _index.genCompid)(__prefix + "$compid__17"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__17 = _genCompid14[0],
          $compid__17 = _genCompid14[1];

      var tabList = [{ title: '歌曲' }, { title: '专辑' }, { title: 'MV' }, { title: '介绍' }];
      var _state = this.__state,
          coverImgUrl = _state.coverImgUrl,
          showList = _state.showList,
          status = _state.status,
          songId = _state.songId,
          singerAlbumList = _state.singerAlbumList,
          singerMvList = _state.singerMvList,
          briefDesc = _state.briefDesc;

      var loopArray9 = showList.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey = "bbzzz" + index;

        _this7.anonymousFunc0Map[_$indexKey] = function () {
          return _this7.play(item.$original.id);
        };

        var _genCompid15 = (0, _index.genCompid)(__prefix + "bezzzzzzzz" + index, true),
            _genCompid16 = _slicedToArray(_genCompid15, 2),
            $prevCompid__9 = _genCompid16[0],
            $compid__9 = _genCompid16[1];

        _index.propsManager.set({
          "value": songId == item.$original.id ? 'pause' : 'play',
          "size": "30",
          "color": songId == item.$original.id ? 'rgb(34, 205, 248)' : '#999'
        }, $compid__9, $prevCompid__9);
        return {
          _$indexKey: _$indexKey,
          $compid__9: $compid__9,
          $original: item.$original
        };
      });
      var loopArray10 = singerAlbumList.length != 0 ? singerAlbumList.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey2 = "bczzz" + index;

        _this7.anonymousFunc1Map[_$indexKey2] = function () {
          return _this7.getAlbumList(item.$original.id);
        };

        var $loopState__temp2 = singerAlbumList.length != 0 ? _this7.formatDate(item.$original.publishTime) : null;
        return {
          _$indexKey2: _$indexKey2,
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      }) : [];
      var loopArray11 = singerMvList.length != 0 ? singerMvList.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey3 = "bdzzz" + index;

        _this7.anonymousFunc2Map[_$indexKey3] = function () {
          return _this7.goTOVideoPlay(item.$original.id);
        };

        var $loopState__temp4 = singerMvList.length != 0 ? _this7.count(item.$original.playCount) : null;

        var _genCompid17 = (0, _index.genCompid)(__prefix + "bfzzzzzzzz" + index, true),
            _genCompid18 = _slicedToArray(_genCompid17, 2),
            $prevCompid__10 = _genCompid18[0],
            $compid__10 = _genCompid18[1];

        _index.propsManager.set({
          "value": "play",
          "size": "20",
          "color": "#fff"
        }, $compid__10, $prevCompid__10);
        return {
          _$indexKey3: _$indexKey3,
          $loopState__temp4: $loopState__temp4,
          $compid__10: $compid__10,
          $original: item.$original
        };
      }) : [];
      _index.propsManager.set({
        "current": this.__state.current,
        "tabList": tabList,
        "onClick": this.tabsClick.bind(this)
      }, $compid__11, $prevCompid__11);
      _index.propsManager.set({
        "current": this.__state.current,
        "index": 0
      }, $compid__12, $prevCompid__12);
      _index.propsManager.set({
        "onClick": this.handleClick.bind(this),
        "status": status
      }, $compid__13, $prevCompid__13);
      _index.propsManager.set({
        "current": this.__state.current,
        "index": 1
      }, $compid__14, $prevCompid__14);
      _index.propsManager.set({
        "current": this.__state.current,
        "index": 2
      }, $compid__15, $prevCompid__15);
      _index.propsManager.set({
        "current": this.__state.current,
        "index": 3
      }, $compid__16, $prevCompid__16);
      _index.propsManager.set({
        "className": "card",
        "title": "\u4E2A\u4EBA\u7B80\u4ECB"
      }, $compid__17, $prevCompid__17);
      Object.assign(this.__state, {
        loopArray9: loopArray9,
        loopArray10: loopArray10,
        loopArray11: loopArray11,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
        $compid__15: $compid__15,
        $compid__16: $compid__16,
        $compid__17: $compid__17
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "pages/music/singerSong/index", _temp2);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));