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
			for (var i = 0; i < this.props.songs.length; i++) {
				if (this.props.songs[i].title.toUpperCase() === value.toUpperCase()) {
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
			console.log(splitSong);
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
				React.createElement(SongList, { songs: this.state.songs })
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzb25ncyIsImhhbmRsZVNlYXJjaCIsImJpbmQiLCJoYW5kbGVBZGQiLCJ2YWx1ZSIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwic2V0U3RhdGUiLCJzcGxpdFNvbmciLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJuZXdTb25nIiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU8sTUFBS0YsS0FBTCxDQUFXRTtBQUROLEdBQWI7QUFHQSxRQUFLQyxZQUFMLEdBQW1CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQW5CO0FBQ0EsUUFBS0MsU0FBTCxHQUFnQixNQUFLQSxTQUFMLENBQWVELElBQWYsT0FBaEI7QUFOa0I7QUFPbEI7Ozs7K0JBR1lFLEssRUFBTztBQUNuQixRQUFJLElBQUlDLElBQUcsQ0FBWCxFQUFjQSxJQUFJLEtBQUtQLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQk0sTUFBbkMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQy9DLFFBQUcsS0FBS1AsS0FBTCxDQUFXRSxLQUFYLENBQWlCSyxDQUFqQixFQUFvQkUsS0FBcEIsQ0FBMEJDLFdBQTFCLE9BQTRDSixNQUFNSSxXQUFOLEVBQS9DLEVBQW9FO0FBQ25FLFVBQUtDLFFBQUwsQ0FBYztBQUNiVCxhQUFPLENBQUMsS0FBS0YsS0FBTCxDQUFXRSxLQUFYLENBQWlCSyxDQUFqQixDQUFEO0FBRE0sTUFBZDtBQUdBO0FBQ0Q7QUFDRDs7OzRCQUVTRCxLLEVBQU87QUFDaEIsT0FBSU0sWUFBV04sTUFBTU8sS0FBTixDQUFZLEdBQVosQ0FBZjtBQUNBQyxXQUFRQyxHQUFSLENBQVlILFNBQVo7QUFDQSxPQUFJSSxVQUFTLEVBQUMsU0FBU0osVUFBVSxDQUFWLENBQVYsRUFBd0IsVUFBVUEsVUFBVSxDQUFWLENBQWxDLEVBQWI7QUFDQSxRQUFLWixLQUFMLENBQVdFLEtBQVgsQ0FBaUJlLElBQWpCLENBQXNCRCxPQUF0QjtBQUNBRixXQUFRQyxHQUFSLENBQVksS0FBS2YsS0FBTCxDQUFXRSxLQUF2QjtBQUNBOzs7MkJBR1E7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDLHdCQUFDLEdBQUQsSUFBSyxXQUFXLEtBQUtHLFNBQXJCLEdBREQ7QUFFQyx3QkFBQyxNQUFELElBQVEsY0FBYyxLQUFLRixZQUEzQixHQUZEO0FBR0Msd0JBQUMsUUFBRCxJQUFVLE9BQU8sS0FBS0YsS0FBTCxDQUFXQyxLQUE1QjtBQUhELElBREQ7QUFPQTs7OztFQXRDZ0JnQixNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzb25nczogdGhpcy5wcm9wcy5zb25nc1xuXHRcdH1cblx0XHR0aGlzLmhhbmRsZVNlYXJjaD0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKVxuXHRcdHRoaXMuaGFuZGxlQWRkPSB0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpXG5cdH1cblxuXG5cdGhhbmRsZVNlYXJjaCh2YWx1ZSkge1xuXHRcdGZvcih2YXIgaT0gMDsgaSA8IHRoaXMucHJvcHMuc29uZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMucHJvcHMuc29uZ3NbaV0udGl0bGUudG9VcHBlckNhc2UoKSA9PT0gdmFsdWUudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzb25nczogW3RoaXMucHJvcHMuc29uZ3NbaV1dXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQWRkKHZhbHVlKSB7XG5cdFx0dmFyIHNwbGl0U29uZz0gdmFsdWUuc3BsaXQoJywnKVxuXHRcdGNvbnNvbGUubG9nKHNwbGl0U29uZylcblx0XHR2YXIgbmV3U29uZz0geyd0aXRsZSc6IHNwbGl0U29uZ1sxXSwgJ2FydGlzdCc6IHNwbGl0U29uZ1swXX07XG5cdFx0dGhpcy5wcm9wcy5zb25ncy5wdXNoKG5ld1NvbmcpXG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5zb25ncylcblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XHRcblx0XHRcdFx0PEFkZCBoYW5kbGVBZGQ9e3RoaXMuaGFuZGxlQWRkfSAvPlxuXHRcdFx0XHQ8U2VhcmNoIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9Lz5cblx0XHRcdFx0PFNvbmdMaXN0IHNvbmdzPXt0aGlzLnN0YXRlLnNvbmdzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG4iXX0=