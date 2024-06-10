import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger);

function GsapScroll(){
    const scrollRef = useRef();

    useGSAP( ()=>{
        const boxes = gsap.utils.toArray(scrollRef.current.children)

        boxes.forEach(box=>{
            gsap.to(box,{
                x:150,
                rotation: 360,
                borderRadius:'100%',
                scale: 1.5,
                scrollTrigger:{
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 20%',
                    scrub: true,
                },
                ease:"circ.inOut"
            })
        })
    },[])
    return(
        <div className="mt-20 w-full h-screen" ref={scrollRef}>
            <div className="scroll-box w-20 h-20 rounded-lg bg-pink-500" id="scroll-pink"/>
            <div className="scroll-box w-20 h-20 rounded-lg bg-orange-500" id="scroll-orange"/>


        </div>
    )
}

export default GsapScroll();