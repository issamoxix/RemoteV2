import './App.css';
import YouTube from 'react-youtube';
import { useEffect, useRef, useState } from 'react';

function getVideoId(url) {
  let urlParsed = new URL(url);
  let value;
  if (url.includes(".be")) {
    let roi = urlParsed.pathname;
    value = roi.substr(1)
    return value
  }
  value = urlParsed.searchParams.get('v')
  return value
}

function App() {
  const [input, setinput] = useState()
  const [videoId, setvideoId] = useState("E8BJadt0iXc")
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const ytbRef = useRef();
  useEffect(() => {
    console.log("refx", ytbRef)

  }, [ytbRef.current])
  return (
    <div className="App">
      <h1>Youtube Player ;) </h1>
      <div className='VideoIdInputs' >
        <form onSubmit={(e) => {
          e.preventDefault()
          setvideoId(getVideoId(input))
        }}>
          <input type="text" placeholder='Youtube Video Link ' onChange={(e) => setinput(e.target.value)} />
          <input type="submit" value="Play" onClick={() => setvideoId(getVideoId(input))} />
        </form>
      </div>
      <YouTube videoId={videoId} opts={opts} ref={ytbRef} onPause={() => {
        ytbRef.current.internalPlayer.playVideo()
      }} />
    </div>
  );
}

export default App;
