"use client";

import Image from "next/image";
import { useState } from "react";
import catgif1 from "./assets/catgif1.gif"
import catgif2 from "./assets/catgif2.gif"
import catgif3 from "./assets/catgif3.gif"
import catgif4 from "./assets/catgif4.gif"
import catgif5 from "./assets/catgif5.gif"
import catgif6 from "./assets/catgif6.gif"
import catgif7 from "./assets/catgif7.gif"

export default function Home() {
  const prompts = [
    "Will you go out with me?",
    "Are you sure you dont want to go out????",
    "Are you really really suree???",
    "Please say yesssss > <",
    "I won't dissapoint you, please be my valentine? final offer",
    "Did you really think I would let you say No???",
    "Lets Goo!!! My kudi said yesssss!!!"
  ];

  const gifs = [
    catgif1,
    catgif2,
    catgif3,
    catgif4,
    catgif5,
    catgif6,
    catgif7
  ]

  const [count, setCount] = useState(0);
  const [no, setNo] = useState("No");
  const [yes,setYes] = useState("hidden")
  

  function handleYes() {
    setYes("block")
    setCount(6)
  }

  function handleNo() {
    if (count < 4) setCount(count + 1);
    else if(count==4){
      setCount(count + 1);
      setNo("Yes");
    }
    else {

      handleYes();
    }
  }

  return (
    <main className=" flex flex-col w-screen items-center justify-center h-screen gap-5" >
      <Image
        src={gifs[count]}
        alt="funny gif"
        width={200}
        height={200}
        unoptimized={true}
      />
      <div className="pb-5">{prompts[count]}</div>
      <div className={yes}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/C8nxICQI5Xo?si=r5307keoExVmq5rJ?autoplay=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
      <div className="flex flex-row gap-10">
        <button className="border text-white bg-[#33b249] rounded-lg py-1 px-4" onClick={handleYes}>
          Yes
        </button>
        <button
          className="border bg-red-600 text-white rounded-lg py-1 px-4"
          onClick={handleNo}
        >
          {no}
        </button>
      </div>
    </main>
  );
}
