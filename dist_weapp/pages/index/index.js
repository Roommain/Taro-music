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

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray3", "loopArray4", "loopArray5", "$compid__8", "SearchHotList", "SearchHistoryList", "songId", "SearchList", "value"], _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.customComponents = ["AtSearchBar", "AtTag", "AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        value: '',
        SearchList: [],
        songId: '',
        SearchHotList: [],
        SearchHistoryList: []
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "onActionClick",
    value: function onActionClick() {
      this.getSearchData(this.state.value);
    }
    //获取 搜索 数据

  }, {
    key: "getSearchData",
    value: function getSearchData(value) {
      var _this2 = this;

      this.state.SearchHistoryList.unshift(value);
      var array = Array.from(new Set(this.state.SearchHistoryList));
      _index2.default.request({
        url: _api.api + '/search?keywords=' + value,
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this2.setState({
          SearchList: res.data.result.songs
        });
        _index2.default.setStorageSync('songList', res.data.result.songs);
        _index2.default.setStorageSync('historyList', array);
      });
    }
    //获取 热门搜索关键词 数据

  }, {
    key: "getSearchHotData",
    value: function getSearchHotData() {
      var _this3 = this;

      _index2.default.request({
        url: _api.api + '/search/hot',
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this3.setState({
          SearchHotList: res.data.result.hots
        });
      });
    }
  }, {
    key: "play",
    value: function play(id) {
      _index2.default.navigateTo({
        url: '/pages/player/index?id=' + id
      });
    }
  }, {
    key: "onClick",
    value: function onClick(value) {
      this.getSearchData(value.name);
    }
  }, {
    key: "deleteHistory",
    value: function deleteHistory(index) {
      this.state.SearchHistoryList.splice(index, 1);
      this.setState({
        SearchHistoryList: this.state.SearchHistoryList
      });
      _index2.default.setStorageSync('historyList', this.state.SearchHistoryList);
    }
  }, {
    key: "clickHistory",
    value: function clickHistory(value) {
      this.getSearchData(value);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.getSearchHotData();
      var songId = _index2.default.getStorageSync('songId');
      var historyList = _index2.default.getStorageSync('historyList') || [];
      this.setState({
        songId: songId,
        value: '',
        SearchList: [],
        SearchHistoryList: historyList
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

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__8"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__8 = _genCompid2[0],
          $compid__8 = _genCompid2[1];

      var _state = this.__state,
          value = _state.value,
          SearchList = _state.SearchList,
          songId = _state.songId,
          SearchHotList = _state.SearchHotList,
          SearchHistoryList = _state.SearchHistoryList;

      var loopArray3 = SearchList.length == 0 ? SearchHotList.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _genCompid3 = (0, _index.genCompid)(__prefix + "fzzzzzzzzz" + index, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__5 = _genCompid4[0],
            $compid__5 = _genCompid4[1];

        _index.propsManager.set({
          "className": "attag",
          "name": item.$original.first,
          "circle": true,
          "onClick": _this4.onClick.bind(_this4)
        }, $compid__5, $prevCompid__5);
        return {
          $compid__5: $compid__5,
          $original: item.$original
        };
      }) : [];
      var loopArray4 = SearchList.length == 0 ? SearchHistoryList.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey = "czzzz" + index;

        _this4.anonymousFunc0Map[_$indexKey] = function () {
          return _this4.clickHistory(item.$original);
        };

        var _$indexKey2 = "dzzzz" + index;

        _this4.anonymousFunc1Map[_$indexKey2] = function () {
          return _this4.deleteHistory(index);
        };

        var _genCompid5 = (0, _index.genCompid)(__prefix + "gzzzzzzzzz" + index, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__6 = _genCompid6[0],
            $compid__6 = _genCompid6[1];

        _index.propsManager.set({
          "className": "history-tag",
          "onClick": _this4.anonymousFunc1.bind(_this4, _$indexKey2),
          "value": "close-circle",
          "size": "28",
          "color": "#666"
        }, $compid__6, $prevCompid__6);
        return {
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $compid__6: $compid__6,
          $original: item.$original
        };
      }) : [];
      var loopArray5 = SearchList.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey3 = "ezzzz" + index;

        _this4.anonymousFunc2Map[_$indexKey3] = function () {
          return _this4.play(item.$original.id);
        };

        var _genCompid7 = (0, _index.genCompid)(__prefix + "hzzzzzzzzz" + index, true),
            _genCompid8 = _slicedToArray(_genCompid7, 2),
            $prevCompid__7 = _genCompid8[0],
            $compid__7 = _genCompid8[1];

        _index.propsManager.set({
          "value": songId == item.$original.id ? 'pause' : 'play',
          "size": "30",
          "color": songId == item.$original.id ? 'rgb(34, 205, 248)' : '#999'
        }, $compid__7, $prevCompid__7);
        return {
          _$indexKey3: _$indexKey3,
          $compid__7: $compid__7,
          $original: item.$original
        };
      });
      _index.propsManager.set({
        "value": value,
        "onChange": this.onChange.bind(this),
        "onActionClick": this.onActionClick.bind(this)
      }, $compid__8, $prevCompid__8);
      Object.assign(this.__state, {
        loopArray3: loopArray3,
        loopArray4: loopArray4,
        loopArray5: loopArray5,
        $compid__8: $compid__8
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
}(_index.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc2"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));