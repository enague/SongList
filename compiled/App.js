"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			songs: _this.props.songs
		};
		_this.handleSearch = _this.handleSearch.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: "handleSearch",
		value: function handleSearch(value) {
			for (var i = 0; i < this.props.songs.length; i++) {
				if (this.props.songs[i].title.toUpperCase() === value.toUpperCase()) {
					this.setState({
						songs: [this.props.songs[i]]
					});
				}
			}
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(Search, { handleSearch: this.handleSearch }),
				React.createElement(SongList, { songs: this.state.songs })
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzb25ncyIsImhhbmRsZVNlYXJjaCIsImJpbmQiLCJ2YWx1ZSIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxVQUFPLE1BQUtGLEtBQUwsQ0FBV0U7QUFETixHQUFiO0FBR0EsUUFBS0MsWUFBTCxHQUFtQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFuQjtBQUxrQjtBQU1sQjs7OzsrQkFHWUMsSyxFQUFPO0FBQ25CLFFBQUksSUFBSUMsSUFBRyxDQUFYLEVBQWNBLElBQUksS0FBS04sS0FBTCxDQUFXRSxLQUFYLENBQWlCSyxNQUFuQyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDL0MsUUFBRyxLQUFLTixLQUFMLENBQVdFLEtBQVgsQ0FBaUJJLENBQWpCLEVBQW9CRSxLQUFwQixDQUEwQkMsV0FBMUIsT0FBNENKLE1BQU1JLFdBQU4sRUFBL0MsRUFBb0U7QUFDbkUsVUFBS0MsUUFBTCxDQUFjO0FBQ2JSLGFBQU8sQ0FBQyxLQUFLRixLQUFMLENBQVdFLEtBQVgsQ0FBaUJJLENBQWpCLENBQUQ7QUFETSxNQUFkO0FBR0E7QUFDRDtBQUNEOzs7MkJBR1E7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDLHdCQUFDLE1BQUQsSUFBUSxjQUFjLEtBQUtILFlBQTNCLEdBREQ7QUFFQyx3QkFBQyxRQUFELElBQVUsT0FBTyxLQUFLRixLQUFMLENBQVdDLEtBQTVCO0FBRkQsSUFERDtBQU1BOzs7O0VBNUJnQlMsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c29uZ3M6IHRoaXMucHJvcHMuc29uZ3Ncblx0XHR9XG5cdFx0dGhpcy5oYW5kbGVTZWFyY2g9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcylcblx0fVxuXG5cblx0aGFuZGxlU2VhcmNoKHZhbHVlKSB7XG5cdFx0Zm9yKHZhciBpPSAwOyBpIDwgdGhpcy5wcm9wcy5zb25ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5wcm9wcy5zb25nc1tpXS50aXRsZS50b1VwcGVyQ2FzZSgpID09PSB2YWx1ZS50b1VwcGVyQ2FzZSgpKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHNvbmdzOiBbdGhpcy5wcm9wcy5zb25nc1tpXV1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2Plx0XG5cdFx0XHRcdDxTZWFyY2ggaGFuZGxlU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH0vPlxuXHRcdFx0XHQ8U29uZ0xpc3Qgc29uZ3M9e3RoaXMuc3RhdGUuc29uZ3N9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cbiJdfQ==