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
		_this.postSongs = _this.postSongs.bind(_this);
		_this.getSongs = _this.getSongs.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'handleSearch',
		value: function handleSearch(value) {
			for (var i = 0; i < this.props.songs.length; i++) {
				if (this.props.songs[i].title.toUpperCase() === value.toUpperCase()) {
					console.log('this hits', this.props.songs[i]);
					this.setState({
						songs: [this.props.songs[i]]
					});
				}
			}

			this.getSongs(value);
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd(value) {
			var splitSong = value.split(',');
			var newSong = { 'title': splitSong[1], 'artist': splitSong[0] };
			this.props.songs.push(newSong);
			console.log(this.props.songs);

			this.postSongs(value);
		}
	}, {
		key: 'postSongs',
		value: function postSongs(value) {
			axios.post('/songs', {
				params: { value: value }
			}).then(function (response) {
				console.log(response);
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: 'getSongs',
		value: function getSongs(value) {
			axios.get('/songs', {
				params: { value: value }
			}).then(function (response) {
				console.log(response);
			}).catch(function (err) {
				console.log(err);
			});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzb25ncyIsImhhbmRsZVNlYXJjaCIsImJpbmQiLCJoYW5kbGVBZGQiLCJwb3N0U29uZ3MiLCJnZXRTb25ncyIsInZhbHVlIiwiaSIsImxlbmd0aCIsInRpdGxlIiwidG9VcHBlckNhc2UiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJzcGxpdFNvbmciLCJzcGxpdCIsIm5ld1NvbmciLCJwdXNoIiwiYXhpb3MiLCJwb3N0IiwicGFyYW1zIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnIiLCJnZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU8sTUFBS0YsS0FBTCxDQUFXRTtBQUROLEdBQWI7QUFHQSxRQUFLQyxZQUFMLEdBQW1CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQW5CO0FBQ0EsUUFBS0MsU0FBTCxHQUFnQixNQUFLQSxTQUFMLENBQWVELElBQWYsT0FBaEI7QUFDQSxRQUFLRSxTQUFMLEdBQWdCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixPQUFoQjtBQUNBLFFBQUtHLFFBQUwsR0FBZSxNQUFLQSxRQUFMLENBQWNILElBQWQsT0FBZjtBQVJrQjtBQVNsQjs7OzsrQkFHWUksSyxFQUFPO0FBQ25CLFFBQUksSUFBSUMsSUFBRyxDQUFYLEVBQWNBLElBQUksS0FBS1QsS0FBTCxDQUFXRSxLQUFYLENBQWlCUSxNQUFuQyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDL0MsUUFBRyxLQUFLVCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJPLENBQWpCLEVBQW9CRSxLQUFwQixDQUEwQkMsV0FBMUIsT0FBNENKLE1BQU1JLFdBQU4sRUFBL0MsRUFBb0U7QUFDbkVDLGFBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXdCLEtBQUtkLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQk8sQ0FBakIsQ0FBeEI7QUFDQSxVQUFLTSxRQUFMLENBQWM7QUFDYmIsYUFBTyxDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQk8sQ0FBakIsQ0FBRDtBQURNLE1BQWQ7QUFHQTtBQUNEOztBQUVELFFBQUtGLFFBQUwsQ0FBY0MsS0FBZDtBQUNBOzs7NEJBRVNBLEssRUFBTztBQUNoQixPQUFJUSxZQUFXUixNQUFNUyxLQUFOLENBQVksR0FBWixDQUFmO0FBQ0EsT0FBSUMsVUFBUyxFQUFDLFNBQVNGLFVBQVUsQ0FBVixDQUFWLEVBQXdCLFVBQVVBLFVBQVUsQ0FBVixDQUFsQyxFQUFiO0FBQ0EsUUFBS2hCLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQmlCLElBQWpCLENBQXNCRCxPQUF0QjtBQUNBTCxXQUFRQyxHQUFSLENBQVksS0FBS2QsS0FBTCxDQUFXRSxLQUF2Qjs7QUFFQSxRQUFLSSxTQUFMLENBQWVFLEtBQWY7QUFDQTs7OzRCQUVTQSxLLEVBQU07QUFDZlksU0FBTUMsSUFBTixDQUFXLFFBQVgsRUFBcUI7QUFDcEJDLFlBQVEsRUFBQ2QsWUFBRDtBQURZLElBQXJCLEVBR0NlLElBSEQsQ0FHTSxVQUFDQyxRQUFELEVBQWE7QUFDbEJYLFlBQVFDLEdBQVIsQ0FBWVUsUUFBWjtBQUNBLElBTEQsRUFNQ0MsS0FORCxDQU1PLFVBQUNDLEdBQUQsRUFBUztBQUNmYixZQUFRQyxHQUFSLENBQVlZLEdBQVo7QUFDQSxJQVJEO0FBVUE7OzsyQkFFUWxCLEssRUFBTztBQUNmWSxTQUFNTyxHQUFOLENBQVUsUUFBVixFQUFvQjtBQUNuQkwsWUFBUSxFQUFDZCxZQUFEO0FBRFcsSUFBcEIsRUFHQ2UsSUFIRCxDQUdNLFVBQUNDLFFBQUQsRUFBYTtBQUNsQlgsWUFBUUMsR0FBUixDQUFZVSxRQUFaO0FBQ0EsSUFMRCxFQU1DQyxLQU5ELENBTU8sVUFBQ0MsR0FBRCxFQUFTO0FBQ2ZiLFlBQVFDLEdBQVIsQ0FBWVksR0FBWjtBQUNBLElBUkQ7QUFTQTs7OzJCQUdRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQyx3QkFBQyxHQUFELElBQUssV0FBVyxLQUFLckIsU0FBckIsR0FERDtBQUVDLHdCQUFDLE1BQUQsSUFBUSxjQUFjLEtBQUtGLFlBQTNCLEdBRkQ7QUFHQyx3QkFBQyxRQUFELElBQVUsT0FBTyxLQUFLRixLQUFMLENBQVdDLEtBQTVCLEdBSEQ7QUFJQztBQUFBO0FBQUEsT0FBUSxTQUFTLG1CQUFLO0FBQUMwQixjQUFPQyxRQUFQLENBQWdCQyxNQUFoQjtBQUF5QixPQUFoRDtBQUFBO0FBQUE7QUFKRCxJQUREO0FBUUE7Ozs7RUF0RWdCQyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzb25nczogdGhpcy5wcm9wcy5zb25nc1xuXHRcdH1cblx0XHR0aGlzLmhhbmRsZVNlYXJjaD0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKVxuXHRcdHRoaXMuaGFuZGxlQWRkPSB0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5wb3N0U29uZ3M9IHRoaXMucG9zdFNvbmdzLmJpbmQodGhpcylcblx0XHR0aGlzLmdldFNvbmdzPSB0aGlzLmdldFNvbmdzLmJpbmQodGhpcylcblx0fVxuXG5cblx0aGFuZGxlU2VhcmNoKHZhbHVlKSB7XG5cdFx0Zm9yKHZhciBpPSAwOyBpIDwgdGhpcy5wcm9wcy5zb25ncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5wcm9wcy5zb25nc1tpXS50aXRsZS50b1VwcGVyQ2FzZSgpID09PSB2YWx1ZS50b1VwcGVyQ2FzZSgpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzIGhpdHMnLHRoaXMucHJvcHMuc29uZ3NbaV0pXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHNvbmdzOiBbdGhpcy5wcm9wcy5zb25nc1tpXV1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmdldFNvbmdzKHZhbHVlKVxuXHR9XG5cblx0aGFuZGxlQWRkKHZhbHVlKSB7XG5cdFx0dmFyIHNwbGl0U29uZz0gdmFsdWUuc3BsaXQoJywnKVxuXHRcdHZhciBuZXdTb25nPSB7J3RpdGxlJzogc3BsaXRTb25nWzFdLCAnYXJ0aXN0Jzogc3BsaXRTb25nWzBdfTtcblx0XHR0aGlzLnByb3BzLnNvbmdzLnB1c2gobmV3U29uZylcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLnNvbmdzKVxuXG5cdFx0dGhpcy5wb3N0U29uZ3ModmFsdWUpXG5cdH1cblxuXHRwb3N0U29uZ3ModmFsdWUpe1xuXHRcdGF4aW9zLnBvc3QoJy9zb25ncycsIHtcblx0XHRcdHBhcmFtczoge3ZhbHVlfVxuXHRcdH0pXG5cdFx0LnRoZW4oKHJlc3BvbnNlKT0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGVycilcblx0XHR9KVxuXG5cdH1cblxuXHRnZXRTb25ncyh2YWx1ZSkge1xuXHRcdGF4aW9zLmdldCgnL3NvbmdzJywge1xuXHRcdFx0cGFyYW1zOiB7dmFsdWV9XG5cdFx0fSlcblx0XHQudGhlbigocmVzcG9uc2UpPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKVxuXHRcdH0pXG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2Plx0XG5cdFx0XHRcdDxBZGQgaGFuZGxlQWRkPXt0aGlzLmhhbmRsZUFkZH0gLz5cblx0XHRcdFx0PFNlYXJjaCBoYW5kbGVTZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofS8+XG5cdFx0XHRcdDxTb25nTGlzdCBzb25ncz17dGhpcy5zdGF0ZS5zb25nc30gLz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9fT5SZWZyZXNoIFBhZ2U8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuIl19