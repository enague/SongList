'use strict';

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
			listen: false
		};
		_this.listen = _this.listen.bind(_this);
		return _this;
	}

	_createClass(SongListEntry, [{
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
					this.props.song.artist,
					':'
				),
				React.createElement(
					'div',
					null,
					this.props.song.title
				),
				React.createElement(
					'div',
					{ onClick: function onClick() {
							_this2.listen();
						} },
					' ',
					this.state.listen ? 'To Listen' : 'Listened',
					' '
				),
				React.createElement('br', null)
			);
		}
	}]);

	return SongListEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9Tb25nTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJTb25nTGlzdEVudHJ5IiwicHJvcHMiLCJzdGF0ZSIsImxpc3RlbiIsImJpbmQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInNvbmciLCJhcnRpc3QiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7OztBQUNMLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxXQUFRO0FBREksR0FBYjtBQUdBLFFBQUtBLE1BQUwsR0FBYSxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBYjtBQUxrQjtBQU1sQjs7OzsyQkFFUTtBQUNSLFFBQUtDLFFBQUwsQ0FBYztBQUFBLFdBQWM7QUFDM0JGLGFBQVEsQ0FBQ0csVUFBVUg7QUFEUSxLQUFkO0FBQUEsSUFBZDtBQUdBOzs7MkJBRVE7QUFBQTs7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFNLFVBQUtGLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkMsTUFBdEI7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFBO0FBQUE7QUFBTSxVQUFLUCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JFO0FBQXRCLEtBRkQ7QUFHQztBQUFBO0FBQUEsT0FBSyxTQUFTLG1CQUFJO0FBQUMsY0FBS04sTUFBTDtBQUFjLE9BQWpDO0FBQUE7QUFBcUMsVUFBS0QsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLFdBQXBCLEdBQWlDLFVBQXRFO0FBQUE7QUFBQSxLQUhEO0FBR3lGO0FBSHpGLElBREQ7QUFPQTs7OztFQXZCMEJPLE1BQU1DLFMiLCJmaWxlIjoiU29uZ0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNvbmdMaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bGlzdGVuOiBmYWxzZVxuXHRcdH1cblx0XHR0aGlzLmxpc3Rlbj0gdGhpcy5saXN0ZW4uYmluZCh0aGlzKVxuXHR9XG5cblx0bGlzdGVuKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG5cdFx0XHRsaXN0ZW46ICFwcmV2U3RhdGUubGlzdGVuXG5cdFx0fSkpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXY+e3RoaXMucHJvcHMuc29uZy5hcnRpc3R9OjwvZGl2PlxuXHRcdFx0XHQ8ZGl2Pnt0aGlzLnByb3BzLnNvbmcudGl0bGV9PC9kaXY+XG5cdFx0XHRcdDxkaXYgb25DbGljaz17KCk9Pnt0aGlzLmxpc3RlbigpfX0+IHt0aGlzLnN0YXRlLmxpc3RlbiA/ICdUbyBMaXN0ZW4nOiAnTGlzdGVuZWQnfSA8L2Rpdj48YnIvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59Il19