import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function GsapStagger() {

    useGSAP(()=>{
        gsap.to(".stragger-box",{
            y:250,
            rotation:360,
            borderRadius:"100%",
            repeat: -1,
            yoyo:true,
            //stagger: 0.2
            stagger:{
                amount:1.5,
                grid: [20,1],
                axis: "y",
                from: "center"
                // ease: 'circ.inOut'
            }
        })
    },[])
    return(
        <div className="mt-5">
            <div className="flex gap-5">
                <div className="w-20 h-20 bg-indigo-100 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-200 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-300 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-400 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-500 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-600 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-700 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-800 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-900 rounded-lg stragger-box">
                </div>
                <div className="w-20 h-20 bg-indigo-950 rounded-lg stragger-box">
                </div>

            </div>
        </div>
    )
}

export default GsapStagger;