var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CustomGrid from './CustomGrid.js';
import TopBar from './topbar.js';
import { CONFIG_USER_LANGUAGE_KEY } from './config.js';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.geoLocation = { permissionDenied: false };
    _this.state = { language: 'lang_marathi' };
    _this.childCustomGrid1 = React.createRef();

    var langKey = CONFIG_USER_LANGUAGE_KEY;
    var lang = window.localStorage.getItem(langKey);
    if (lang == null) {
      switch (navigator.language) {
        // case 'en-US':
        // case 'en':
        //   lang = 'lang_en_us';
        //   break;
        case 'hi-IN':
        case 'hi':
          lang = 'lang_hindi';
          break;
        case 'mr-IN':
        case 'mr':
          lang = 'lang_marathi';
          break;
        default:
          lang = 'lang_marathi';
          break;
      }
    }

    window.localStorage.setItem(langKey, lang);
    _this.state.language = lang;

    return _this;
  }

  _createClass(App, [{
    key: 'SetLanguage',
    value: function SetLanguage(newLanguage) {
      console.log("index.js SetLanguage ", newLanguage);
      if (this.childCustomGrid1.current) {
        this.childCustomGrid1.current.OnLanguageChange();
      }
      this.setState({ language: language, newLanguage: newLanguage });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Fragment,
        null,
        React.createElement(TopBar, { SetLaguageFunction: this.SetLanguage.bind(this), language: this.state.language }),
        React.createElement(CustomGrid, { ref: this.childCustomGrid1, language: this.state.language })
      );
    }
  }]);

  return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));