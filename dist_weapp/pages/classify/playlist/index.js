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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray13", "$compid__21", "coverImgUrl", "songId", "showList", "status", "isPlay", "reserveList"], _this.config = {
      navigationBarTitleText: '歌单详情'
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["AtIcon", "AtLoadMore"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        coverImgUrl: '',
        status: 'loading',
        showList: [],
        isPlay: true,
        reserveList: [],
        songId: ''
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var id = this.$router.params.id;
      this.getRankingList(id);
    }
  }, {
    key: "getRankingList",
    value: function getRankingList(id) {
      var _this2 = this;

      _index2.default.request({
        url: _api.api + '/playlist/detail?id=' + id,
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this2.setState({
          coverImgUrl: res.data.playlist.coverImgUrl,
          showList: res.data.playlist.tracks.slice(0, 20),
          reserveList: res.data.playlist.tracks.slice(20, 50),
          status: 'more'
        });
        _index2.default.setStorageSync('songList', res.data.playlist.tracks.slice(0, 20));
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this3 = this;

      // 开始加载
      this.setState({
        status: 'loading'
      });
      this.state.reserveList.forEach(function (e) {
        _this3.state.showList.push(e);
      });
      _index2.default.setStorageSync('songList', this.state.showList);
      // 模拟异步请求数据
      setTimeout(function () {
        // 没有更多了
        _this3.setState({
          status: 'noMore'
        });
      }, 2000);
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
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__21"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__21 = _genCompid2[0],
          $compid__21 = _genCompid2[1];

      var _state = this.__state,
          coverImgUrl = _state.coverImgUrl,
          showList = _state.showList,
          status = _state.status,
          songId = _state.songId;

      var loopArray13 = showList.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey = "bizzz" + index;

        _this4.anonymousFunc0Map[_$indexKey] = function () {
          return _this4.play(item.$original.id);
        };

        var _genCompid3 = (0, _index.genCompid)(__prefix + "bjzzzzzzzz" + index, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__20 = _genCompid4[0],
            $compid__20 = _genCompid4[1];

        _index.propsManager.set({
          "value": songId == item.$original.id ? 'pause' : 'play',
          "size": "30",
          "color": songId == item.$original.id ? 'rgb(34, 205, 248)' : '#999'
        }, $compid__20, $prevCompid__20);
        return {
          _$indexKey: _$indexKey,
          $compid__20: $compid__20,
          $original: item.$original
        };
      });
      _index.propsManager.set({
        "onClick": this.handleClick.bind(this),
        "status": status
      }, $compid__21, $prevCompid__21);
      Object.assign(this.__state, {
        loopArray13: loopArray13,
        $compid__21: $compid__21
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
  }]);

  return Index;
}(_index.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/classify/playlist/index", _temp2);
exports.default = Index;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));