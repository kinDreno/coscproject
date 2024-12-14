"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaLongArrowAltDown } from "react-icons/fa";
export const Main = () => {
  const [wallpaper] = useState<string[]>([
    "kagura.gif",
    "chou.gif",
    "lancelot.gif",
    "angela.gif",
    "kadira.gif",
    "moskov.gif",
  ]);
  const [current, setCurrent] = useState<string>(wallpaper[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % wallpaper.length;
      setCurrent(wallpaper[i]);
    }, 2500);

    return () => clearInterval(interval);
  }, [wallpaper]);

  return (
    <>
      <div className="h-screen w-full bg-black/35 absolute top-0 left-0 z-20" />{" "}
      <main className="w-full h-screen relative">
        <div
          style={{
            backgroundImage: `url(${current})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="z-40 p-4 h-full w-full flex justify-center items-center transition-all duration-1000 ease-in-out opacity-100"
        >
          <section className="h-[80%] flex justify-start items-center w-[40%] text-left p-4 z-40">
            <h1
              style={{ textShadow: "0 0 2px white" }}
              className="text-lg text-white space-y-11"
            >
              <b>Welcome to our COSC15 Website!</b> <br />
              We are a team of passionate individuals, each with unique talents
              and hobbies. From gaming to coding, we thrive on collaboration and
              creativity. Explore our world of skills, interests, and shared
              passions!
              <div className="flex items-center">
                <FaLongArrowAltDown className="animate-bounce" size={30} />
                <Typewriter
                  options={{
                    strings: ["Scroll Down!"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h1>
          </section>
          <section className="h-[70%] w-[35%] flex justify-center items-center z-40">
            <Image
              className="w-[60%] h-[60%]"
              alt="CCT Logo"
              src={"/scs-final.png"}
              width={500}
              height={200}
            />
          </section>
        </div>
      </main>
    </>
  );
};