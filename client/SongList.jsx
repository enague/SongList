var SongList = (props) => (
	<div>
		{props.songs.map((song,i) => 
			<SongListEntry key={i} song={song} />
		)}
	</div>

)