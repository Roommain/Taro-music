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

var imgsrc = "/assets/tab-bar/erji.png";

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray1", "loopArray2", "$compid__0", "$compid__1", "$compid__2", "$compid__3", "$compid__4", "list", "singerList", "recommendList", "imgsrc", "songId", "songImg"], _this.config = {
      navigationBarTitleText: '音乐'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.customComponents = ["AtGrid", "AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        list: [],
        songId: '',
        songImg: '',
        recommendList: [], //推荐歌单
        singerList: []
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "toViewMore",
    value: function toViewMore() {
      _index2.default.navigateTo({
        url: '/pages/music/hotSinger/index'
      });
    }
  }, {
    key: "selectType",
    value: function selectType(e) {
      if (e.id == 1) {
        _index2.default.navigateTo({
          url: '/pages/music/hotSinger/index'
        });
      } else if (e.id == 2) {
        _index2.default.navigateTo({
          url: '/pages/recommendMv/index'
        });
      } else if (e.id == 3) {
        _index2.default.navigateTo({
          url: '/pages/songMenu/index'
        });
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _index2.default.removeStorageSync('songId');
      _index2.default.request({
        url: _api.api + '/banner',
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this2.setState({
          list: res.data.banners
        });
      });
      _index2.default.request({
        url: _api.api + '/top/artists?offset=0&limit=8',
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this2.setState({
          singerList: res.data.artists
        });
      });
      //每日推荐
      _index2.default.request({
        url: _api.api + '/personalized?limit=6',
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this2.setState({
          recommendList: res.data.result
        });
      });
    }
  }, {
    key: "getSingerSong",
    value: function getSingerSong(id) {
      _index2.default.navigateTo({
        url: '/pages/music/singerSong/index?id=' + id
      });
    }
  }, {
    key: "getRecommended",
    value: function getRecommended(id) {
      _index2.default.navigateTo({
        url: '/pages/classify/playlist/index?id=' + id
      });
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick() {
      var id = _index2.default.getStorageSync('songId');
      _index2.default.navigateTo({
        url: '/pages/player/index?id=' + id
      });
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
      this.setState({
        songId: _index2.default.getStorageSync('songId'),
        songImg: _index2.default.getStorageSync('songImg')
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__0"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__0 = _genCompid2[0],
          $compid__0 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__1"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1 = _genCompid4[0],
          $compid__1 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__2"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__2 = _genCompid6[0],
          $compid__2 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__3"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__3 = _genCompid8[0],
          $compid__3 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__4"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__4 = _genCompid10[0],
          $compid__4 = _genCompid10[1];

      var _state = this.__state,
          list = _state.list,
          singerList = _state.singerList,
          recommendList = _state.recommendList,
          songId = _state.songId,
          songImg = _state.songImg;

      var muList = [{
        id: '1',
        image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=468344651,2427584021&fm=26&gp=0.jpg',
        value: '热门歌手'
      }, {
        id: '2',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575437432673&di=a63cfc1e2c4d27a4b88a5235f2815263&imgtype=0&src=http%3A%2F%2Fwww.lgstatic.com%2Fthumbnail_300x300%2Fimage1%2FM00%2F3B%2F8F%2FCgo8PFWwubKAC_n-AAAVMejmm0c046.png%3Fcc%3D0.3123178686410819',
        value: 'MV榜单'
      }, {
        id: '3',
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '精品歌单'
      }];
      var loopArray1 = singerList.map(function (item, __index0) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey = "azzzz" + __index0;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          return _this3.getSingerSong(item.$original.id);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      var loopArray2 = recommendList.map(function (item, __index1) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey2 = "bzzzz" + __index1;

        _this3.anonymousFunc1Map[_$indexKey2] = function () {
          return _this3.getRecommended(item.$original.id);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });
      _index.propsManager.set({
        "hasBorder": false,
        "onClick": this.selectType,
        "data": muList
      }, $compid__0, $prevCompid__0);
      _index.propsManager.set({
        "hasBorder": false
      }, $compid__1, $prevCompid__1);
      _index.propsManager.set({
        "hasBorder": false,
        "title": "\u6B4C\u624B\u5217\u8868",
        "onClick": this.toViewMore,
        "extraText": "\u67E5\u770B\u66F4\u591A"
      }, $compid__2, $prevCompid__2);
      _index.propsManager.set({
        "hasBorder": false
      }, $compid__3, $prevCompid__3);
      _index.propsManager.set({
        "hasBorder": false,
        "title": "\u6BCF\u65E5\u63A8\u8350"
      }, $compid__4, $prevCompid__4);
      Object.assign(this.__state, {
        loopArray1: loopArray1,
        loopArray2: loopArray2,
        $compid__0: $compid__0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3,
        $compid__4: $compid__4,
        imgsrc: imgsrc
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
  }]);

  return Index;
}(_index.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "onButtonClick"], _class.$$componentPath = "pages/music/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));