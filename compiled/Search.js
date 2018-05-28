'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this.state = {
			value: ''
		};
		_this.getValueFromSearch = _this.getValueFromSearch.bind(_this);
		return _this;
	}

	_createClass(Search, [{
		key: 'getValueFromSearch',
		value: function getValueFromSearch(e) {
			this.setState({
				value: e.target.value
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				null,
				React.createElement('input', { type: 'text', value: this.state.value, onChange: this.getValueFromSearch }),
				React.createElement(
					'button',
					{ className: 'search', onClick: function onClick() {
							_this2.props.handleSearch(_this2.state.value);
						} },
					'Search'
				)
			);
		}
	}]);

	return Search;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9TZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImdldFZhbHVlRnJvbVNlYXJjaCIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJoYW5kbGVTZWFyY2giLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDTCxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQVk7QUFDWEMsVUFBTztBQURJLEdBQVo7QUFHQSxRQUFLQyxrQkFBTCxHQUF5QixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsT0FBekI7QUFMa0I7QUFNbEI7Ozs7cUNBRWtCQyxDLEVBQUc7QUFDckIsUUFBS0MsUUFBTCxDQUFjO0FBQ2JKLFdBQU9HLEVBQUVFLE1BQUYsQ0FBU0w7QUFESCxJQUFkO0FBR0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0MsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUFyQyxFQUE0QyxVQUFVLEtBQUtDLGtCQUEzRCxHQUREO0FBRUM7QUFBQTtBQUFBLE9BQVEsV0FBVSxRQUFsQixFQUEyQixTQUFTLG1CQUFJO0FBQUMsY0FBS0gsS0FBTCxDQUFXUSxZQUFYLENBQXdCLE9BQUtQLEtBQUwsQ0FBV0MsS0FBbkM7QUFBMEMsT0FBbkY7QUFBQTtBQUFBO0FBRkQsSUFERDtBQU1BOzs7O0VBdEJtQk8sTUFBTUMsUyIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlPSB7XG5cdFx0XHR2YWx1ZTogJydcblx0XHR9XG5cdFx0dGhpcy5nZXRWYWx1ZUZyb21TZWFyY2g9IHRoaXMuZ2V0VmFsdWVGcm9tU2VhcmNoLmJpbmQodGhpcylcblx0fVxuXG5cdGdldFZhbHVlRnJvbVNlYXJjaChlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogZS50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmdldFZhbHVlRnJvbVNlYXJjaH0vPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nc2VhcmNoJyBvbkNsaWNrPXsoKT0+e3RoaXMucHJvcHMuaGFuZGxlU2VhcmNoKHRoaXMuc3RhdGUudmFsdWUpfX0+U2VhcmNoPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0iXX0=