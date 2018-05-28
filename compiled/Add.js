"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_React$Component) {
	_inherits(Add, _React$Component);

	function Add(props) {
		_classCallCheck(this, Add);

		var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

		_this.state = {
			value: ''
		};
		_this.getValueFromAdd = _this.getValueFromAdd.bind(_this);
		return _this;
	}

	_createClass(Add, [{
		key: "getValueFromAdd",
		value: function getValueFromAdd(e) {
			this.setState({
				value: e.target.value
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement("input", { text: "type", onChange: this.getValueFromAdd }),
				React.createElement(
					"button",
					{ onClick: function onClick() {
							_this2.props.handleAdd(_this2.state.value);
						} },
					"Add"
				)
			);
		}
	}]);

	return Add;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BZGQuanN4Il0sIm5hbWVzIjpbIkFkZCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImdldFZhbHVlRnJvbUFkZCIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJoYW5kbGVBZGQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxVQUFPO0FBREssR0FBYjtBQUdBLFFBQUtDLGVBQUwsR0FBc0IsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdEI7QUFMa0I7QUFNbEI7Ozs7a0NBRWVDLEMsRUFBRztBQUNsQixRQUFLQyxRQUFMLENBQWM7QUFDYkosV0FBT0csRUFBRUUsTUFBRixDQUFTTDtBQURILElBQWQ7QUFHQTs7OzJCQUVTO0FBQUE7O0FBQ1QsVUFDQztBQUFBO0FBQUE7QUFDQyxtQ0FBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLQyxlQUFsQyxHQUREO0FBRUM7QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBSztBQUFDLGNBQUtILEtBQUwsQ0FBV1EsU0FBWCxDQUFxQixPQUFLUCxLQUFMLENBQVdDLEtBQWhDO0FBQXVDLE9BQTlEO0FBQUE7QUFBQTtBQUZELElBREQ7QUFNQTs7OztFQXRCZ0JPLE1BQU1DLFMiLCJmaWxlIjoiQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZhbHVlOiAnJ1xuXHRcdH1cblx0XHR0aGlzLmdldFZhbHVlRnJvbUFkZD0gdGhpcy5nZXRWYWx1ZUZyb21BZGQuYmluZCh0aGlzKVxuXHR9XG5cblx0Z2V0VmFsdWVGcm9tQWRkKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aW5wdXQgdGV4dD1cInR5cGVcIiBvbkNoYW5nZT17dGhpcy5nZXRWYWx1ZUZyb21BZGR9IC8+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17KCk9PiB7dGhpcy5wcm9wcy5oYW5kbGVBZGQodGhpcy5zdGF0ZS52YWx1ZSl9fT5BZGQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSJdfQ==