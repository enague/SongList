'use strict';

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
		_this.handleAdd = _this.handleAdd.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'handleSearch',
		value: function handleSearch(value) {
			console.log('it hits', value);
			for (var i = 0; i < this.props.songs.length; i++) {
				if (this.props.songs[i].title.toUpperCase() === value.toUpperCase()) {
					console.log('this hits', this.props.songs[i]);
					this.setState({
						songs: [this.props.songs[i]]
					});
				}
			}
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd(value) {
			var splitSong = value.split(',');
			var newSong = { 'title': splitSong[1], 'artist': splitSong[0] };
			this.props.songs.push(newSong);
			console.log(this.props.songs);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Add, { handleAdd: this.handleAdd }),
				React.createElement(Search, { handleSearch: this.handleSearch }),
				React.createElement(SongList, { songs: this.state.songs }),
				React.createElement(
					'button',
					{ onClick: function onClick() {
							window.location.reload();
						} },
					'Refresh Page'
				)
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzb25ncyIsImhhbmRsZVNlYXJjaCIsImJpbmQiLCJoYW5kbGVBZGQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNldFN0YXRlIiwic3BsaXRTb25nIiwic3BsaXQiLCJuZXdTb25nIiwicHVzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBTyxNQUFLRixLQUFMLENBQVdFO0FBRE4sR0FBYjtBQUdBLFFBQUtDLFlBQUwsR0FBbUIsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBbkI7QUFDQSxRQUFLQyxTQUFMLEdBQWdCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZixPQUFoQjtBQU5rQjtBQU9sQjs7OzsrQkFHWUUsSyxFQUFPO0FBQ25CQyxXQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkYsS0FBdkI7QUFDQSxRQUFJLElBQUlHLElBQUcsQ0FBWCxFQUFjQSxJQUFJLEtBQUtULEtBQUwsQ0FBV0UsS0FBWCxDQUFpQlEsTUFBbkMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQy9DLFFBQUcsS0FBS1QsS0FBTCxDQUFXRSxLQUFYLENBQWlCTyxDQUFqQixFQUFvQkUsS0FBcEIsQ0FBMEJDLFdBQTFCLE9BQTRDTixNQUFNTSxXQUFOLEVBQS9DLEVBQW9FO0FBQ25FTCxhQUFRQyxHQUFSLENBQVksV0FBWixFQUF3QixLQUFLUixLQUFMLENBQVdFLEtBQVgsQ0FBaUJPLENBQWpCLENBQXhCO0FBQ0EsVUFBS0ksUUFBTCxDQUFjO0FBQ2JYLGFBQU8sQ0FBQyxLQUFLRixLQUFMLENBQVdFLEtBQVgsQ0FBaUJPLENBQWpCLENBQUQ7QUFETSxNQUFkO0FBR0E7QUFDRDtBQUNEOzs7NEJBRVNILEssRUFBTztBQUNoQixPQUFJUSxZQUFXUixNQUFNUyxLQUFOLENBQVksR0FBWixDQUFmO0FBQ0EsT0FBSUMsVUFBUyxFQUFDLFNBQVNGLFVBQVUsQ0FBVixDQUFWLEVBQXdCLFVBQVVBLFVBQVUsQ0FBVixDQUFsQyxFQUFiO0FBQ0EsUUFBS2QsS0FBTCxDQUFXRSxLQUFYLENBQWlCZSxJQUFqQixDQUFzQkQsT0FBdEI7QUFDQVQsV0FBUUMsR0FBUixDQUFZLEtBQUtSLEtBQUwsQ0FBV0UsS0FBdkI7QUFDQTs7OzJCQUdRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxHQUFELElBQUssV0FBVyxLQUFLRyxTQUFyQixHQUREO0FBRUMsd0JBQUMsTUFBRCxJQUFRLGNBQWMsS0FBS0YsWUFBM0IsR0FGRDtBQUdDLHdCQUFDLFFBQUQsSUFBVSxPQUFPLEtBQUtGLEtBQUwsQ0FBV0MsS0FBNUIsR0FIRDtBQUlDO0FBQUE7QUFBQSxPQUFRLFNBQVMsbUJBQUs7QUFBQ2dCLGNBQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQXlCLE9BQWhEO0FBQUE7QUFBQTtBQUpELElBREQ7QUFRQTs7OztFQXhDZ0JDLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNvbmdzOiB0aGlzLnByb3BzLnNvbmdzXG5cdFx0fVxuXHRcdHRoaXMuaGFuZGxlU2VhcmNoPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVBZGQ9IHRoaXMuaGFuZGxlQWRkLmJpbmQodGhpcylcblx0fVxuXG5cblx0aGFuZGxlU2VhcmNoKHZhbHVlKSB7XG5cdFx0Y29uc29sZS5sb2coJ2l0IGhpdHMnLCB2YWx1ZSlcblx0XHRmb3IodmFyIGk9IDA7IGkgPCB0aGlzLnByb3BzLnNvbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLnByb3BzLnNvbmdzW2ldLnRpdGxlLnRvVXBwZXJDYXNlKCkgPT09IHZhbHVlLnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMgaGl0cycsdGhpcy5wcm9wcy5zb25nc1tpXSlcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c29uZ3M6IFt0aGlzLnByb3BzLnNvbmdzW2ldXVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUFkZCh2YWx1ZSkge1xuXHRcdHZhciBzcGxpdFNvbmc9IHZhbHVlLnNwbGl0KCcsJylcblx0XHR2YXIgbmV3U29uZz0geyd0aXRsZSc6IHNwbGl0U29uZ1sxXSwgJ2FydGlzdCc6IHNwbGl0U29uZ1swXX07XG5cdFx0dGhpcy5wcm9wcy5zb25ncy5wdXNoKG5ld1NvbmcpXG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5zb25ncylcblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XHRcblx0XHRcdFx0PEFkZCBoYW5kbGVBZGQ9e3RoaXMuaGFuZGxlQWRkfSAvPlxuXHRcdFx0XHQ8U2VhcmNoIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9Lz5cblx0XHRcdFx0PFNvbmdMaXN0IHNvbmdzPXt0aGlzLnN0YXRlLnNvbmdzfSAvPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT4ge3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX19PlJlZnJlc2ggUGFnZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG4iXX0=