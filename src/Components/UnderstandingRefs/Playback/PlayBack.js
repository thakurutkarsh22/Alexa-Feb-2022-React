import { useRef, useState } from "react";

function Playback() {

    const[play, setPlay] = useState(false);

    const controls = useRef();

    const url = "https://res.cloudinary.com/daintu6ky/video/upload/v1573070866/Screen_Recording_2019-11-06_at_4.14.52_PM.mp4";

    console.log("rendering playback");

    function playVideo() {
        controls.current.play();
    }

    function pauseVideo() {
        controls.current.pause();
    }

    // dont do that 

    // (function ifUseState() {
    //     // latest state || play or pause ... 
    //    let  element =  document.getElementById("video")
    //    if(!element ) {
    //     return;
    //    }
    //     if(play)
    //         element.play()
    //     else 
    //         element.pause() ;
    // })()

    return(
        <>
            <video id="video" ref={controls} width={"200px"} height={"90px"} controls>
                <source src={url} type={"video/mp4"}/>
            </video>
            <hr />
            <button onClick={() => playVideo(true)}>Play</button>    
            <button onClick={() => pauseVideo(false)}>Pause</button>    
        </>
    )
}

export default Playback;