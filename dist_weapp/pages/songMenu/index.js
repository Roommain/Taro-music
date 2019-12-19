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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray15", "$compid__42", "$compid__43", "$compid__44", "$compid__45", "$compid__46", "$compid__47", "$compid__48", "$compid__49", "$compid__50", "$compid__51", "tagName", "songMenuList", "imgsrc"], _this.config = {
      navigationBarTitleText: '精品歌单'
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["AtTag"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        songMenuList: [],
        tagName: ''
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getSongMenu('全部');
    }
  }, {
    key: "getSongMenu",
    value: function getSongMenu(name) {
      var _this2 = this;

      _index2.default.request({
        url: _api.api + '/top/playlist/highquality?cat=' + name + '&limit=10',
        header: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        _this2.setState({
          songMenuList: res.data.playlists || [],
          tagName: name
        });
      });
    }
  }, {
    key: "count",
    value: function count(playCount) {
      return Math.floor(playCount / 10000 * 10) / 10;
    }
  }, {
    key: "onClick",
    value: function onClick(value) {
      this.getSongMenu(value.name);
    }
  }, {
    key: "getRecommended",
    value: function getRecommended(id) {
      _index2.default.navigateTo({
        url: '/pages/classify/playlist/index?id=' + id
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
    value: function componentDidShow() {}
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

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__42"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__42 = _genCompid2[0],
          $compid__42 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__43"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__43 = _genCompid4[0],
          $compid__43 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__44"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__44 = _genCompid6[0],
          $compid__44 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__45"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__45 = _genCompid8[0],
          $compid__45 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__46"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__46 = _genCompid10[0],
          $compid__46 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__47"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__47 = _genCompid12[0],
          $compid__47 = _genCompid12[1];

      var _genCompid13 = (0, _index.genCompid)(__prefix + "$compid__48"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__48 = _genCompid14[0],
          $compid__48 = _genCompid14[1];

      var _genCompid15 = (0, _index.genCompid)(__prefix + "$compid__49"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__49 = _genCompid16[0],
          $compid__49 = _genCompid16[1];

      var _genCompid17 = (0, _index.genCompid)(__prefix + "$compid__50"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__50 = _genCompid18[0],
          $compid__50 = _genCompid18[1];

      var _genCompid19 = (0, _index.genCompid)(__prefix + "$compid__51"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__51 = _genCompid20[0],
          $compid__51 = _genCompid20[1];

      var _state = this.__state,
          songMenuList = _state.songMenuList,
          tagName = _state.tagName;

      var loopArray15 = songMenuList.length != 0 ? songMenuList.map(function (item, __index0) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey = "cbzzz" + __index0;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          return _this3.getRecommended(item.$original.id);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      tagName == '全部' && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u5168\u90E8",
        "type": "primary",
        "active": true,
        "onClick": this.onClick.bind(this)
      }, $compid__42, $prevCompid__42);
      !(tagName == '全部') && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u5168\u90E8",
        "type": "primary",
        "onClick": this.onClick.bind(this)
      }, $compid__43, $prevCompid__43);
      tagName == '华语' && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u534E\u8BED",
        "type": "primary",
        "active": true,
        "onClick": this.onClick.bind(this)
      }, $compid__44, $prevCompid__44);
      !(tagName == '华语') && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u534E\u8BED",
        "type": "primary",
        "onClick": this.onClick.bind(this)
      }, $compid__45, $prevCompid__45);
      tagName == '古风' && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u53E4\u98CE",
        "type": "primary",
        "active": true,
        "onClick": this.onClick.bind(this)
      }, $compid__46, $prevCompid__46);
      !(tagName == '古风') && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u53E4\u98CE",
        "type": "primary",
        "onClick": this.onClick.bind(this)
      }, $compid__47, $prevCompid__47);
      tagName == '欧美' && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u6B27\u7F8E",
        "type": "primary",
        "active": true,
        "onClick": this.onClick.bind(this)
      }, $compid__48, $prevCompid__48);
      !(tagName == '欧美') && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u6B27\u7F8E",
        "type": "primary",
        "onClick": this.onClick.bind(this)
      }, $compid__49, $prevCompid__49);
      tagName == '流行' && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u6D41\u884C",
        "type": "primary",
        "active": true,
        "onClick": this.onClick.bind(this)
      }, $compid__50, $prevCompid__50);
      !(tagName == '流行') && _index.propsManager.set({
        "className": "at-tag",
        "name": "\u6D41\u884C",
        "type": "primary",
        "onClick": this.onClick.bind(this)
      }, $compid__51, $prevCompid__51);
      Object.assign(this.__state, {
        loopArray15: loopArray15,
        $compid__42: $compid__42,
        $compid__43: $compid__43,
        $compid__44: $compid__44,
        $compid__45: $compid__45,
        $compid__46: $compid__46,
        $compid__47: $compid__47,
        $compid__48: $compid__48,
        $compid__49: $compid__49,
        $compid__50: $compid__50,
        $compid__51: $compid__51,
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
  }]);

  return Index;
}(_index.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/songMenu/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));