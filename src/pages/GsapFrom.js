import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function GsapFrom(){

    useGSAP( ()=>{
        gsap.from("#blue-box",{
            x:100,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: "bounce.inOut",
        })
    },[])
    return (
        <div className="mt-5">
            <div id="blue-box" className="h-20 w-20 bg-blue-500 rounded-lg"></div>
        </div>

    )
}

export default GsapFrom;