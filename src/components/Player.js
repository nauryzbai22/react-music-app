import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setCurrentSong, setSong}) => {
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSong(newSongs);
    };
    
    function changePlayHandler() {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const getTime = (seconds) => {
        return (
            Math.floor(seconds / 60) + ':' + ('0' + Math.floor(seconds % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        setSongInfo({...songInfo, currentTime: e.target.value});
        audioRef.current.currentTime = e.target.value;
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if(direction === "skip-back") {
            if((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length -1]);
                activeLibraryHandler(songs[songs.length -1])
                if(isPlaying) audioRef.current.play()
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length])
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }
        if(isPlaying) audioRef.current.play()
    }



    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.current)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                    <input onChange={dragHandler} value={songInfo.current} min={0} max={songInfo.duration || 0} type="range" />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" onClick={() => skipTrackHandler("skip-back")} size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={changePlayHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="skip-forward"  onClick={() => skipTrackHandler("skip-forward")}  size="2x" icon={faAngleRight}/>
            </div>
        </div>
    ) 
}

export default Player;