(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"173":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(1),r=(Object(o.j)("onBackgroundAudioPlay"),Object(o.j)("onBackgroundAudioPause"),Object(o.j)("onBackgroundAudioStop"),Object(o.j)("onBluetoothAdapterStateChange"),Object(o.j)("onBluetoothDeviceFound"),Object(o.j)("onBLEConnectionStateChange"),Object(o.j)("onBLECharacteristicValueChange"),Object(o.j)("onBeaconUpdate"),Object(o.j)("onBeaconServiceChange"),Object(o.j)("onUserCaptureScreen"),Object(o.j)("onHCEMessage"),Object(o.j)("onGetWifiList"),Object(o.j)("onWifiConnected"),Object(o.j)("getExtConfigSync"),Object(o.j)("getLogManager"),Object(o.j)("onMemoryWarning"),Object(o.j)("reportAnalytics"),Object(o.j)("navigateToSmartGameProgram"),Object(o.j)("getFileSystemManager"),Object(o.j)("stopRecord"),Object(o.j)("getRecorderManager"),Object(o.j)("pauseVoice"),Object(o.j)("stopVoice"),Object(o.j)("pauseBackgroundAudio"),Object(o.j)("stopBackgroundAudio"),Object(o.j)("getBackgroundAudioManager"));Object(o.j)("createAudioContext"),Object(o.j)("createCameraContext"),Object(o.j)("createLivePlayerContext"),Object(o.j)("createLivePusherContext"),Object(o.j)("createMapContext"),Object(o.j)("canIUse"),Object(o.j)("showNavigationBarLoading"),Object(o.j)("hideNavigationBarLoading"),Object(o.j)("drawCanvas"),Object(o.j)("hideKeyboard"),Object(o.j)("createIntersectionObserver"),Object(o.j)("getMenuButtonBoundingClientRect"),Object(o.j)("getAccountInfoSync"),Object(o.j)("getUpdateManager"),Object(o.j)("createWorker"),Object(o.j)("saveImageToPhotosAlbum"),Object(o.j)("startRecord"),Object(o.j)("playVoice"),Object(o.j)("setInnerAudioOption"),Object(o.j)("getAvailableAudioSources"),Object(o.j)("getBackgroundAudioPlayerState"),Object(o.j)("playBackgroundAudio"),Object(o.j)("seekBackgroundAudio"),Object(o.j)("saveVideoToPhotosAlbum"),Object(o.j)("loadFontFace"),Object(o.j)("saveFile"),Object(o.j)("getFileInfo"),Object(o.j)("getSavedFileList"),Object(o.j)("getSavedFileInfo"),Object(o.j)("removeSavedFile"),Object(o.j)("openDocument"),Object(o.j)("openBluetoothAdapter"),Object(o.j)("closeBluetoothAdapter"),Object(o.j)("getBluetoothAdapterState"),Object(o.j)("startBluetoothDevicesDiscovery"),Object(o.j)("stopBluetoothDevicesDiscovery"),Object(o.j)("getBluetoothDevices"),Object(o.j)("getConnectedBluetoothDevices"),Object(o.j)("createBLEConnection"),Object(o.j)("closeBLEConnection"),Object(o.j)("getBLEDeviceServices"),Object(o.j)("getBLEDeviceCharacteristics"),Object(o.j)("readBLECharacteristicValue"),Object(o.j)("writeBLECharacteristicValue"),Object(o.j)("notifyBLECharacteristicValueChange"),Object(o.j)("startBeaconDiscovery"),Object(o.j)("stopBeaconDiscovery"),Object(o.j)("getBeacons"),Object(o.j)("setScreenBrightness"),Object(o.j)("getScreenBrightness"),Object(o.j)("setKeepScreenOn"),Object(o.j)("addPhoneContact"),Object(o.j)("getHCEState"),Object(o.j)("startHCE"),Object(o.j)("stopHCE"),Object(o.j)("sendHCEMessage"),Object(o.j)("startWifi"),Object(o.j)("stopWifi"),Object(o.j)("connectWifi"),Object(o.j)("getWifiList"),Object(o.j)("setWifiList"),Object(o.j)("getConnectedWifi"),Object(o.j)("setTopBarText"),Object(o.j)("setBackgroundColor"),Object(o.j)("setBackgroundTextStyle"),Object(o.j)("getExtConfig"),Object(o.j)("login"),Object(o.j)("checkSession"),Object(o.j)("authorize"),Object(o.j)("getUserInfo"),Object(o.j)("checkIsSupportFacialRecognition"),Object(o.j)("startFacialRecognitionVerify"),Object(o.j)("startFacialRecognitionVerifyAndUploadVideo"),Object(o.j)("faceVerifyForPay"),Object(o.j)("showShareMenu"),Object(o.j)("hideShareMenu"),Object(o.j)("updateShareMenu"),Object(o.j)("getShareInfo"),Object(o.j)("chooseAddress"),Object(o.j)("addCard"),Object(o.j)("openCard"),Object(o.j)("openSetting"),Object(o.j)("getSetting"),Object(o.j)("getWeRunData"),Object(o.j)("navigateToMiniProgram"),Object(o.j)("navigateBackMiniProgram"),Object(o.j)("chooseInvoice"),Object(o.j)("chooseInvoiceTitle"),Object(o.j)("checkIsSupportSoterAuthentication"),Object(o.j)("startSoterAuthentication"),Object(o.j)("checkIsSoterEnrolledInDevice"),Object(o.j)("setEnableDebug"),Object(o.j)("ocrIdCard"),Object(o.j)("ocrBankCard"),Object(o.j)("ocrDrivingLicense"),Object(o.j)("ocrVehicleLicense"),Object(o.j)("textReview"),Object(o.j)("textToAudio"),Object(o.j)("imageAudit"),Object(o.j)("advancedGeneralIdentify"),Object(o.j)("objectDetectIdentify"),Object(o.j)("carClassify"),Object(o.j)("dishClassify"),Object(o.j)("logoClassify"),Object(o.j)("animalClassify"),Object(o.j)("plantClassify"),Object(o.j)("getSwanId"),Object(o.j)("requestPolymerPayment"),Object(o.j)("navigateToSmartProgram"),Object(o.j)("navigateBackSmartProgram"),Object(o.j)("preloadSubPackage")},"174":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n(0),r=n(2),a=n(73),i=n.n(a),c=n(8),s=n(4),l=n.n(s),u=n(74),p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var f=function(e){function AtMessage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtMessage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtMessage.__proto__||Object.getPrototypeOf(AtMessage)).apply(this,arguments));return e.state={"_isOpened":!1,"_message":"","_type":"info","_duration":3e3},e._timer=null,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtMessage,u["a"]),p(AtMessage,[{"key":"bindMessageListener","value":function bindMessageListener(){var e=this;r.a.eventCenter.on("atMessage",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={"_isOpened":!0,"_message":t.message,"_type":t.type,"_duration":t.duration||e.state._duration};e.setState(n,function(){clearTimeout(e._timer),e._timer=setTimeout(function(){e.setState({"_isOpened":!1})},e.state._duration)})}),r.a.atMessage=r.a.eventCenter.trigger.bind(r.a.eventCenter,"atMessage")}},{"key":"componentDidShow","value":function componentDidShow(){this.bindMessageListener()}},{"key":"componentDidMount","value":function componentDidMount(){this.bindMessageListener()}},{"key":"componentDidHide","value":function componentDidHide(){r.a.eventCenter.off("atMessage")}},{"key":"componentWillUnmount","value":function componentWillUnmount(){r.a.eventCenter.off("atMessage")}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.customStyle,r=this.state,a=r._message,i=r._isOpened,s=r._type,u=l()({"at-message":!0,"at-message--show":i,"at-message--hidden":!i},"at-message--"+s,t);return o.l.createElement(c.a,{"className":u,"style":n},a)}}]),AtMessage}();f.defaultProps={"customStyle":"","className":""},f.propTypes={"customStyle":i.a.oneOfType([i.a.object,i.a.string]),"className":i.a.oneOfType([i.a.array,i.a.string])}},"181":function(e,t,n){"use strict";var o=n(0),r=n(8);n(6);function isBoolean(e){return"boolean"==typeof e}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isFunction(e){return"function"==typeof e}var a=n(4),i=n.n(a),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var s=function(e){function Slider(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Slider);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Slider.__proto__||Object.getPrototypeOf(Slider)).apply(this,arguments));return function parseType(e){var t=e.min,n=e.max,o=e.step,r=e.disabled,a=e.value,i=e.backgroundColor,c=e.activeColor,s=e.blockSize,l=e.blockColor,u=e.showValue,p=e.onChange,f=e.onChanging,b=function throwErrorMsg(e){throw new TypeError(e)};t&&!isNumber(t)&&b("min"),n&&!isNumber(n)&&b("max"),o&&!isNumber(o)&&b("step"),a&&!isNumber(a)&&b("value"),s&&!isNumber(s)&&b("blockSize"),r&&!isBoolean(r)&&b("disabled"),u&&!isBoolean(u)&&b("showValue"),i&&!isString(i)&&b("backgroundColor"),c&&!isString(c)&&b("activeColor"),l&&!isString(l)&&b("blockColor"),p&&!isFunction(p)&&b("onChange"),f&&!isFunction(f)&&b("onChanging")}(e.props),e.sliderInsRef="",e.props.value&&e.props.value>e.props.max&&(e.props.value=e.props.max),e.state={"value":e.props.value,"controlled":void 0!==e.props.value,"totalWidth":0,"touching":!1,"ogX":0,"touchID":!1,"percent":e.props.value?parseInt(e.props.value/(e.props.max-e.props.min)*100):0},e.handleTouchStart=e.handleTouchStart.bind(e),e.handleTouchMove=e.handleTouchMove.bind(e),e.handleTouchEnd=e.handleTouchEnd.bind(e),e.updateValue=e.updateValue.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Slider,o["l"].Component),c(Slider,[{"key":"componentDidMount","value":function componentDidMount(){0===this.state.value&&this.updateValue()}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){if(this.state.controlled&&e.value<=this.props.max&&e.value>=this.props.min){var t=parseInt(e.value/(this.props.max-this.props.min)*100);this.setState({"value":e.value,"percent":t})}}},{"key":"updateValue","value":function updateValue(){var e=0,t=this.state.percent,n=this.props,o=n.min,r=n.max,a=n.step,i=parseInt((r-o)/a),c=100/i;c<1&&(c=1);var s=parseInt(c);if(100===t)e=r;else if(0===t)e=o;else for(var l=0;l<i;l++)t>l*s&&t<=(l+1)*s&&(e=t-l*s>s/2?(l+1)*a+o:l*a+o);return e!==this.state.value&&(this.setState({"value":e}),!0)}},{"key":"handleTouchStart","value":function handleTouchStart(e){if(!this.state.touching&&!this.props.disabled){var t=o.l.findDOMNode(this.sliderInsRef);this.setState({"touching":!0,"touchId":e.targetTouches[0].identifier,"totalWidth":t.clientWidth,"ogX":e.targetTouches[0].pageX,"ogPercent":this.state.percent})}}},{"key":"handleTouchMove","value":function handleTouchMove(e){var t=this,n=this.props.onChanging;if(this.state.touching&&!this.props.disabled&&e.targetTouches[0].identifier===this.state.touchId){e.preventDefault();var o=e.targetTouches[0].pageX-this.state.ogX,r=parseInt(o/this.state.totalWidth*100)+this.state.ogPercent;r=r<0?0:r>100?100:r,this.setState({"percent":r},function(){t.updateValue()&&(Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"detail":e.detail,"value":t.state.value}}),n&&n(e))})}}},{"key":"handleTouchEnd","value":function handleTouchEnd(e){var t=this;if(this.state.touching&&!this.props.disabled){var n=this.props.onChange;this.setState({"touching":!1,"ogX":0,"touchId":!1,"ogPercent":0},function(){Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"detail":e.detail,"value":t.state.value}}),n&&n(e)})}}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.className,r=t.showValue,a=t.backgroundColor,c=t.activeColor,s=t.blockColor,l=this.props.blockSize,u=i()("weui-slider-box",n),p={"backgroundColor":a},f=this.state.percent>100?100:this.state.percent,b={"width":f+"%","backgroundColor":c};l<12&&(l=28),l>28&&(l=28);var d={"left":f+"%","width":l+"px","height":l+"px","backgroundColor":s,"marginTop":"-"+Math.floor(l/2)+"px","marginLeft":"-"+Math.floor(l/2)+"px"},h=this.props.name,j=void 0===h?"":h;return o.l.createElement("div",{"className":u},o.l.createElement("div",{"className":"weui-slider"},o.l.createElement("div",{"className":"weui-slider__inner","style":p,"ref":function ref(t){return e.sliderInsRef=t}},o.l.createElement("div",{"style":b,"className":"weui-slider__track"}),o.l.createElement("div",{"style":d,"onTouchStart":this.handleTouchStart,"onTouchMove":this.handleTouchMove,"onTouchEnd":this.handleTouchEnd,"className":"weui-slider__handler"}),o.l.createElement("input",{"type":"hidden","name":j,"value":this.state.value}))),!!r&&o.l.createElement("div",{"className":"weui-slider-box__value"},this.state.value))}}]),Slider}();s.defaultProps={"max":100,"min":0,"step":1,"showValue":!1,"disabled":!1,"value":0};var l=s,u=n(73),p=n.n(u),f=n(74);n.d(t,"a",function(){return d});var b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var d=function(e){function AtSlider(e){!function slider_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtSlider);var t=function slider_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtSlider.__proto__||Object.getPrototypeOf(AtSlider)).apply(this,arguments)),n=e.value,o=e.min,r=e.max;return t.state={"_value":AtSlider.clampNumber(n,o,r)},t}return function slider_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtSlider,f["a"]),b(AtSlider,[{"key":"handleChanging","value":function handleChanging(e){var t=this.state._value,n=e.detail.value;n!==t&&this.setState({"_value":n}),this.props.onChanging({"value":n})}},{"key":"handleChange","value":function handleChange(e){var t=e.detail.value;this.setState({"_value":t}),this.props.onChange({"value":t})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.value,n=e.min,o=e.max;this.setState({"_value":AtSlider.clampNumber(t,n,o)})}},{"key":"render","value":function render(){var e=this.state._value,t=this.props,n=t.customStyle,a=t.className,c=t.min,s=t.max,u=t.step,p=t.disabled,f=t.activeColor,b=t.backgroundColor,d=t.blockSize,h=t.blockColor,j=t.showValue;return o.l.createElement(r.a,{"className":i()({"at-slider":!0,"at-slider--disabled":p},a),"style":n},o.l.createElement(r.a,{"className":"at-slider__inner"},o.l.createElement(l,{"min":c,"max":s,"step":u,"value":e,"disabled":p,"activeColor":f,"backgroundColor":b,"blockSize":d,"blockColor":h,"onChanging":this.handleChanging.bind(this),"onChange":this.handleChange.bind(this)})),j&&o.l.createElement(r.a,{"className":"at-slider__text"},""+e))}}],[{"key":"clampNumber","value":function clampNumber(e,t,n){return Math.max(t,Math.min(n,e))}}]),AtSlider}();d.defaultProps={"customStyle":"","className":"","min":0,"max":100,"step":1,"value":0,"disabled":!1,"activeColor":"#6190e8","backgroundColor":"#e9e9e9","blockSize":28,"blockColor":"#ffffff","showValue":!1,"onChange":function onChange(){},"onChanging":function onChanging(){}},d.propTypes={"customStyle":p.a.oneOfType([p.a.object,p.a.string]),"className":p.a.oneOfType([p.a.array,p.a.string]),"min":p.a.number,"max":p.a.number,"step":p.a.number,"value":p.a.number,"disabled":p.a.bool,"activeColor":p.a.string,"backgroundColor":p.a.string,"blockSize":p.a.number,"blockColor":p.a.string,"showValue":p.a.bool,"onChange":p.a.func,"onChanging":p.a.func}},"73":function(e,t,n){e.exports=n(76)()},"74":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o,r,a=n(2),i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var s=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":c(e))){var t="";return Object.keys(e).forEach(function(n){var o=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=o+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},l=(r=o=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,a["a"].Component),i(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":c(e))&&t&&"object"===(void 0===t?"undefined":c(t))?Object.assign({},e,t):s(e)+s(t)}}]),AtComponent}(),o.options={"addGlobalClass":!0},r)},"76":function(e,t,n){"use strict";var o=n(77);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,r,a,i){if(i!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e,e}},"77":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"79":function(e,t,n){var o=n(80);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(15)(o,r);o.locals&&(e.exports=o.locals)},"80":function(e,t,n){(e.exports=n(14)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""])},"86":function(e,t,n){"use strict";n.d(t,"c",function(){return setStorageSync}),n.d(t,"a",function(){return getStorageSync}),n.d(t,"b",function(){return removeStorageSync});var o=n(1),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function setStorageSync(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"==typeof e){var n={};n="symbol"===(void 0===t?"undefined":r(t))?{"data":""}:{"data":t},localStorage.setItem(e,JSON.stringify(n))}else console.error(Object(o.d)({"name":"setStorage","correct":"String","wrong":e}))}function getStorageSync(e){if("string"==typeof e){var t=getItem(e);return t.result?t.data:""}console.error(Object(o.d)({"name":"getStorage","correct":"String","wrong":e}))}function getItem(e){var t=void 0;try{t=JSON.parse(localStorage.getItem(e))}catch(e){}return t&&"object"===(void 0===t?"undefined":r(t))&&t.hasOwnProperty("data")?{"result":!0,"data":t.data}:{"result":!1}}function removeStorageSync(e){"string"==typeof e?localStorage.removeItem(e):console.error(Object(o.d)({"name":"removeStorage","correct":"String","wrong":e}))}},"91":function(e,t,n){"use strict";n(6);var o=n(0),r=n(16),a=n(4),i=n.n(a),c=(n(79),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,o["l"].Component),s(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,a=void 0!==n&&n,s=i()("taro-text",{"taro-text__selectable":a},t);return o.l.createElement("span",c({},Object(r.a)(this.props,["selectable","className"]),{"className":s}),this.props.children)}}]),Text}();t.a=l},"93":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o,r,a=n(0),i=n(2),c=n(73),s=n.n(c),l=n(4),u=n.n(l),p=n(91),f=n(74),b=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var d=(r=o=function(e){function AtIcon(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtIcon),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtIcon.__proto__||Object.getPrototypeOf(AtIcon)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtIcon,f["a"]),b(AtIcon,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,o=e.prefixClass,r=e.value,c=e.size,s=e.color,l={"fontSize":""+i.a.pxTransform(2*parseInt(c)),"color":s},f=r?o+"-"+r:"";return a.l.createElement(p.a,{"className":u()(o,f,n),"style":this.mergeStyle(l,t),"onClick":this.handleClick.bind(this)})}}]),AtIcon}(),o.defaultProps={"customStyle":"","className":"","prefixClass":"at-icon","value":"","color":"","size":24,"onClick":function onClick(){}},o.propTypes={"customStyle":s.a.oneOfType([s.a.object,s.a.string]),"className":s.a.oneOfType([s.a.array,s.a.string]),"prefixClass":s.a.string,"value":s.a.string,"color":s.a.string,"size":s.a.oneOfType([s.a.string,s.a.number]),"onClick":s.a.func},r)}}]);