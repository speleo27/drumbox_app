import * as Tone from 'tone';
import {useState, useEffect, useRef} from "react";

import BELL4 from "assets/sounds/batterie/BELL4.wav";
import TOM15 from "assets/sounds/batterie/TOM15.wav";
import TAMBOURINE5 from "assets/sounds/batterie/TAMBOURINE5.wav";
import RIMSHOT8 from "assets/sounds/batterie/RIMSHOT8.wav";

export default function useSounds(){
    const mySampler =useRef(null);

    const [isB4Played, isB4PlayedChange] = useState(false)
    const [isT15Played, isT15PlayedChange] = useState(false)
    const [isT5Played, isT5PlayedChange] = useState(false)
    const [isR8Played, isR8PlayedChange] = useState(false)

    useEffect(()=>{
    const sampler = new Tone.Sampler({

            "C4": BELL4,
            "D#4": TOM15,
            "F#4": TAMBOURINE5,
            "A4": RIMSHOT8,

    }).toDestination();
    Tone.loaded().then(() => {
            mySampler.current = sampler;
        })
    },[]);

    function soundPlay(note){
        mySampler.current.triggerAttackRelease([note], 4);

    }
    function handleKeyDown({key}){
       switch (key) {
           case "q":

               isB4PlayedChange(true)

               window.setTimeout(()=> isB4PlayedChange(false),300)

               soundPlay("C4")
               break;
           case "z":
               isT15PlayedChange(true)
               window.setTimeout(()=> isT15PlayedChange(false),200)
               soundPlay("D#4")
               break;
           case "d":
               isT5PlayedChange(true)
               window.setTimeout(()=> isT5PlayedChange(false),200)
               soundPlay("F#4")
               break;
           case "v":
               isR8PlayedChange(true)
               window.setTimeout(()=> isR8PlayedChange(false),200)
               soundPlay("A4")
               break;
           default:
        break;
       }
    }
    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown);
        return ()=> {
            window.removeEventListener("keydown", handleKeyDown);
        }
    },[]);

    function handleSampleChange(note, file){
        let fileURL= URL.createObjectURL(file);
        let buffer = new Tone.Buffer(fileURL);
        mySampler.current.add(note, buffer, ()=> alert ("Sample successfully changed"));

    }

    const buttonsList = [
        {soundPlay:()=>soundPlay("C4"),
            isPlayed: isB4Played,
            id: "B4",
            handleSampleChange: (event)=>handleSampleChange("C4", event.target.files[0])
        },

        {soundPlay:()=>soundPlay("D#4"),
           isPlayed: isT15Played,
            id: "TOM15",
            handleSampleChange: (event)=>handleSampleChange("D#4", event.target.files[0])
        },

        {soundPlay:()=>soundPlay("F#4"),
            isPlayed: isT5Played,
            id: "TAMBOURINE5",
            handleSampleChange: (event)=>handleSampleChange("F#4", event.target.files[0])
        },
        {soundPlay:()=>soundPlay("A4"),
            isPlayed:isR8Played,
            id: "RIMSHOT8",
            handleSampleChange: (event)=>handleSampleChange("A4", event.target.files[0])
        },
    ];
    return {buttonsList};
}