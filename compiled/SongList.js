"use strict";

var SongList = function SongList(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"p",
			null,
			" hi from SongList "
		),
		props.songs.map(function (song, i) {
			return React.createElement(SongListEntry, { key: i, song: song });
		})
	);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9Tb25nTGlzdC5qc3giXSwibmFtZXMiOlsiU29uZ0xpc3QiLCJwcm9wcyIsInNvbmdzIiwibWFwIiwic29uZyIsImkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxRQUNkO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERDtBQUVFQSxRQUFNQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFNQyxDQUFOO0FBQUEsVUFDaEIsb0JBQUMsYUFBRCxJQUFlLEtBQUtBLENBQXBCLEVBQXVCLE1BQU1ELElBQTdCLEdBRGdCO0FBQUEsR0FBaEI7QUFGRixFQURjO0FBQUEsQ0FBZiIsImZpbGUiOiJTb25nTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTb25nTGlzdCA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxwPiBoaSBmcm9tIFNvbmdMaXN0IDwvcD5cblx0XHR7cHJvcHMuc29uZ3MubWFwKChzb25nLGkpID0+IFxuXHRcdFx0PFNvbmdMaXN0RW50cnkga2V5PXtpfSBzb25nPXtzb25nfSAvPlxuXHRcdCl9XG5cdDwvZGl2PlxuXG4pIl19