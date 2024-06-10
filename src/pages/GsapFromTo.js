import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function GsapFromTo(){

    useGSAP( ()=>{
        gsap.fromTo("#red-box",{
            x:0,
            rotation:0,
            borderRadius:'0%',


        },
            {
            x:250,
            repeat: -1,
            yoyo: true,
                borderRadius:'100%',
            rotation: 360,
            duration: 2,
            ease: "back",
        })
    },[])
    return (
        <div className="mt-5">
            <div id="red-box" className="h-20 w-20 bg-red-500 rounded-lg"></div>
        </div>

    )
}

export default GsapFromTo;