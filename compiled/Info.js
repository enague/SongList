'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_React$Component) {
	_inherits(Info, _React$Component);

	function Info(props) {
		_classCallCheck(this, Info);

		var _this = _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));

		_this.state = {
			show: false,
			listen: false
		};
		_this.listen = _this.listen.bind(_this);
		return _this;
	}

	_createClass(Info, [{
		key: 'listen',
		value: function listen() {
			this.setState(function (prevState) {
				return {
					listen: !prevState.listen
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(
						'b',
						null,
						'Artist:'
					),
					this.props.songInfo.song.artist
				),
				React.createElement(
					'div',
					{ onClick: function onClick() {
							_this2.listen();
						} },
					' ',
					this.state.listen ? 'To Listen' : 'Listened',
					' '
				)
			);
		}
	}]);

	return Info;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9JbmZvLmpzeCJdLCJuYW1lcyI6WyJJbmZvIiwicHJvcHMiLCJzdGF0ZSIsInNob3ciLCJsaXN0ZW4iLCJiaW5kIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzb25nSW5mbyIsInNvbmciLCJhcnRpc3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDTCxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBWTtBQUNYQyxTQUFNLEtBREs7QUFFWEMsV0FBUTtBQUZHLEdBQVo7QUFJQSxRQUFLQSxNQUFMLEdBQWEsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWI7QUFOa0I7QUFPbEI7Ozs7MkJBRVE7QUFDUixRQUFLQyxRQUFMLENBQWM7QUFBQSxXQUFjO0FBQzNCRixhQUFRLENBQUNHLFVBQVVIO0FBRFEsS0FBZDtBQUFBLElBQWQ7QUFHQTs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUw7QUFBb0IsVUFBS0gsS0FBTCxDQUFXTyxRQUFYLENBQW9CQyxJQUFwQixDQUF5QkM7QUFBN0MsS0FERDtBQUVDO0FBQUE7QUFBQSxPQUFLLFNBQVMsbUJBQUk7QUFBQyxjQUFLTixNQUFMO0FBQWMsT0FBakM7QUFBQTtBQUFxQyxVQUFLRixLQUFMLENBQVdFLE1BQVgsR0FBb0IsV0FBcEIsR0FBaUMsVUFBdEU7QUFBQTtBQUFBO0FBRkQsSUFERDtBQU1BOzs7O0VBdkJpQk8sTUFBTUMsUyIsImZpbGUiOiJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGU9IHtcblx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0bGlzdGVuOiBmYWxzZVxuXHRcdH1cblx0XHR0aGlzLmxpc3Rlbj0gdGhpcy5saXN0ZW4uYmluZCh0aGlzKVxuXHR9XG5cblx0bGlzdGVuKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG5cdFx0XHRsaXN0ZW46ICFwcmV2U3RhdGUubGlzdGVuXG5cdFx0fSkpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2PjxiPkFydGlzdDo8L2I+e3RoaXMucHJvcHMuc29uZ0luZm8uc29uZy5hcnRpc3R9PC9kaXY+XG5cdFx0XHRcdDxkaXYgb25DbGljaz17KCk9Pnt0aGlzLmxpc3RlbigpfX0+IHt0aGlzLnN0YXRlLmxpc3RlbiA/ICdUbyBMaXN0ZW4nOiAnTGlzdGVuZWQnfSA8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSJdfQ==