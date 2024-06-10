import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function GsapText(){

    useGSAP( ()=>{
        gsap.to('#text', {
            ease:"power2.out",
            opacity:1,
            y:0,
        })

        gsap.fromTo('.para',{
            opacity:0,
            y:20,
            },{
            opacity:1,
            y:0,
            delay:0.5,
            stagger: 0.1,
            }
        )
    },[])
    return(
        <div className="p-10 text-lg text-white">
            <h1 id="text" className="opacity-0 translate-y-10">
                Abhishek singh
            </h1>

            <div className="para mt-5 text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
                tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </div>
        </div>
    )
}

export default GsapText;