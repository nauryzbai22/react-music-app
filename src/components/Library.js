import React from "react";
import LibrarySong from "./LibrarySong"

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSong, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong song={song} songs={songs} setSong={setSong} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} id={song.id} key={song.id}/>)}
            </div>
        </div>
    )
}

export default Library;
