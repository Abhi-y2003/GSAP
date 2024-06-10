import gsap from "gsap";
import {useGSAP} from "@gsap/react";
function GsapTimeline(){

    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay:1,
        yoyo: true,
    })


    useGSAP( ()=>{
         timeline.to("#yellow-box",{
             x:250,
             rotation:360,
             borderRadius: '100%',
             duration: 2,
             ease: "power1.out",
         })

        timeline.to("#yellow-box",{
            y:450,
            scale:5,
            duration: 2,
            ease: "power2.out",
        })
    },[])

    return(
        <>

            <div>
                <button onClick={()=>{
                    if(timeline.paused()){
                        timeline.play()
                    }else {
                        timeline.pause()
                    }
                }}  className='border-2'>
                    Play/ Pause
                </button>
            </div>
        <div className="mt-5">
            <div className="h-20 w-20 bg-yellow-500" id="yellow-box"></div>

        </div>


        </>
    )
}


export default GsapTimeline;