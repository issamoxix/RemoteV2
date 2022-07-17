import './App.css';
import YouTube from 'react-youtube';
import { useEffect, useRef } from 'react';

function App() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  let videoId = "E8BJadt0iXc";
  const ytbRef = useRef();
  useEffect(() => {
    console.log("refx", ytbRef)

  }, [ytbRef.current])
  return (
    <div className="App">
      <h1>Test</h1>
      <YouTube videoId={videoId} opts={opts} ref={ytbRef} onPause={() => {
        ytbRef.current.internalPlayer.playVideo()
        console.log("refx State changed",ytbRef.current.state)
      }} />
    </div>
  );
}

export default App;
