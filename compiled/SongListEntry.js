"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SongListEntry = function (_React$Component) {
	_inherits(SongListEntry, _React$Component);

	function SongListEntry(props) {
		_classCallCheck(this, SongListEntry);

		var _this = _possibleConstructorReturn(this, (SongListEntry.__proto__ || Object.getPrototypeOf(SongListEntry)).call(this, props));

		_this.state = {
			show: false
		};
		_this.show = _this.show.bind(_this);
		return _this;
	}

	_createClass(SongListEntry, [{
		key: "show",
		value: function show() {
			this.setState(function (prevState) {
				return {
					show: !prevState.show
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ onClick: function onClick() {
							_this2.show();
						} },
					this.props.song.title
				),
				React.createElement(
					"div",
					null,
					" ",
					this.state.show ? React.createElement(Info, { songInfo: this.props }) : null,
					" "
				),
				React.createElement("br", null)
			);
		}
	}]);

	return SongListEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9Tb25nTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJTb25nTGlzdEVudHJ5IiwicHJvcHMiLCJzdGF0ZSIsInNob3ciLCJiaW5kIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzb25nIiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxhOzs7QUFDTCx3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsU0FBTTtBQURNLEdBQWI7QUFHQSxRQUFLQSxJQUFMLEdBQVcsTUFBS0EsSUFBTCxDQUFVQyxJQUFWLE9BQVg7QUFMa0I7QUFNbEI7Ozs7eUJBRU07QUFDTixRQUFLQyxRQUFMLENBQWM7QUFBQSxXQUFjO0FBQzNCRixXQUFNLENBQUNHLFVBQVVIO0FBRFUsS0FBZDtBQUFBLElBQWQ7QUFHQTs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsT0FBSyxTQUFTLG1CQUFJO0FBQUMsY0FBS0EsSUFBTDtBQUFZLE9BQS9CO0FBQWtDLFVBQUtGLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkM7QUFBbEQsS0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQU8sVUFBS04sS0FBTCxDQUFXQyxJQUFYLEdBQWtCLG9CQUFDLElBQUQsSUFBTSxVQUFVLEtBQUtGLEtBQXJCLEdBQWxCLEdBQWtELElBQXpEO0FBQUE7QUFBQSxLQUZEO0FBRXNFO0FBRnRFLElBREQ7QUFNQTs7OztFQXRCMEJRLE1BQU1DLFMiLCJmaWxlIjoiU29uZ0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNvbmdMaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvdzogZmFsc2Vcblx0XHR9XG5cdFx0dGhpcy5zaG93PSB0aGlzLnNob3cuYmluZCh0aGlzKVxuXHR9XG5cblx0c2hvdygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuXHRcdFx0c2hvdzogIXByZXZTdGF0ZS5zaG93XG5cdFx0fSkpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgb25DbGljaz17KCk9Pnt0aGlzLnNob3coKX19Pnt0aGlzLnByb3BzLnNvbmcudGl0bGV9PC9kaXY+XG5cdFx0XHRcdDxkaXY+IHt0aGlzLnN0YXRlLnNob3cgPyA8SW5mbyBzb25nSW5mbz17dGhpcy5wcm9wc30gLz46IG51bGx9IDwvZGl2PjxiciAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59Il19