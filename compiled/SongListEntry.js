"use strict";

var SongListEntry = function SongListEntry(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"div",
			null,
			props.song.artist,
			":"
		),
		React.createElement(
			"div",
			null,
			props.song.title
		),
		React.createElement("br", null)
	);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9Tb25nTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJTb25nTGlzdEVudHJ5IiwicHJvcHMiLCJzb25nIiwiYXJ0aXN0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFEO0FBQUEsUUFDbkI7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQU1BLFNBQU1DLElBQU4sQ0FBV0MsTUFBakI7QUFBQTtBQUFBLEdBREQ7QUFFQztBQUFBO0FBQUE7QUFBTUYsU0FBTUMsSUFBTixDQUFXRTtBQUFqQixHQUZEO0FBRThCO0FBRjlCLEVBRG1CO0FBQUEsQ0FBcEIiLCJmaWxlIjoiU29uZ0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTb25nTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG5cdDxkaXY+XG5cdFx0PGRpdj57cHJvcHMuc29uZy5hcnRpc3R9OjwvZGl2PlxuXHRcdDxkaXY+e3Byb3BzLnNvbmcudGl0bGV9PC9kaXY+PGJyIC8+XG5cdDwvZGl2PlxuKSJdfQ==