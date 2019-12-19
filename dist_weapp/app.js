'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/music/index', 'pages/index/index', 'pages/classify/index', 'pages/user/index', 'pages/videoPlay/index', 'pages/music/hotSinger/index', 'pages/music/singerSong/index', 'pages/music/albumList/index', 'pages/classify/playlist/index', 'pages/player/index', 'pages/recommendMv/index', 'pages/songMenu/index'],
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
        list: [{
          pagePath: "pages/music/index",
          iconPath: "./assets/tab-bar/yinyue1.png",
          selectedIconPath: "./assets/tab-bar/yinyue.png",
          text: "音乐"
        }, {
          pagePath: "pages/classify/index",
          iconPath: "./assets/tab-bar/icon1.png",
          selectedIconPath: "./assets/tab-bar/icon.png",
          text: "分类"
        }, {
          pagePath: "pages/index/index",
          iconPath: "./assets/tab-bar/sousuo1.png",
          selectedIconPath: "./assets/tab-bar/sousuo.png",
          text: "搜索"
          // , {
          // pagePath: "pages/user/index",
          // iconPath: "./assets/tab-bar/geren1.png",
          // selectedIconPath: "./assets/tab-bar/geren.png",
          // text: "个人"
          // }
        }]
      },
      requiredBackgroundModes: ['audio']
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});