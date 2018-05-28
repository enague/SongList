var SongList = (props) => (
	<div>
		<p> hi from SongList </p>
		{props.songs.map((song,i) => 
			<SongListEntry key={i} song={song} />
		)}
	</div>

)