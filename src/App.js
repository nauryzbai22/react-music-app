import { useState , useRef} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import './styles/app.scss'
import data from './data';

function App() {
  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0])
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
    animationPercentage: 0
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);

  const changeTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const durationTime = e.target.duration;
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(durationTime);
    const animation = Math.round((roundedCurrent/roundedDuration) * 100);
    setSongInfo({...songInfo, current: currentTime, duration: durationTime, animationPercentage: animation})
  }

  const endSongHandler = async () => {
    let currentIndex = song.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(song[(currentIndex + 1) % song.length])  
    if(isPlaying) audioRef.current.play()
  }

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} songs={song} setCurrentSong={setCurrentSong} setSong={setSong}/>
      <Library songs={song} setSong={setSong} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} libraryStatus={libraryStatus}/>
      <audio onTimeUpdate={changeTimeHandler}  onLoadedMetadata={changeTimeHandler} onEnded={endSongHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
