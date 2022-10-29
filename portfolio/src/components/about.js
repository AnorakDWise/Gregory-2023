import React, { useState } from "react";
import keyboard from "../assets/iconography/keyboard.svg";
import bulb from "../assets/iconography/bulb.svg";

const About = () => {
  const [tip, setTip] = useState(
    "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-1000"
  );

  return (
    <section
      id="about"
      className="bg-aboutBack w-screen h-screen bg-cover center"
    >
      <div className={tip}>
        <img src={bulb} className="w-[2vw] mr-[0.5vw] drop-shadow-bulbLight" />
        <h4 className="text-plain font-medium text-stone-200 drop-shadow-xl">
          Click a tile to learn more.
        </h4>
      </div>
      <div className="w-[38.5vw] h-[38.5vw] mr-[0.25vw] center flex-col">
        <div className="w-full h-[12.5vw] mb-[0.25vw] center">
          <button
            className="tile frostedGlass frostedBorder mr-[0.25vw] center text-title italic font-medium hover:drop-shadow-softLight animate"
            onMouseEnter={() =>
              setTip(
                "center w-max fixed z-10 top-[2.5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight delayedTransition opacity-100 delay-1000"
              )
            }
            onMouseLeave={() =>
              setTip(
                "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-0"
              )
            }
          >
            fx
          </button>

          <button
            className="doubleTileH frostedGlass frostedBorder ml-[0.25vw] center group parent"
            onMouseEnter={() =>
              setTip(
                "center w-max fixed z-10 top-[2.5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight delayedTransition opacity-100 delay-1000"
              )
            }
            onMouseLeave={() =>
              setTip(
                "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-0"
              )
            }
          >
            <img
              src={keyboard}
              className="w-[10vw] group-hover:w-[11vw] animate absoluteCenter -rotate-12 drop-shadow-xl group-hover:drop-shadow-2xl brightness-75 group-hover:brightness-100"
            />
            <h4 className="absolute z-10 top-[2vh] left-[1vw] text-plain font-medium text-stone-200">
              coding is my...
            </h4>
            <h3 className="z-10 text-huge font-bold italic superpower bg-gradient-to-t from-sky-800 to-teal-500 bg-clip-text text-stone-900 text-opacity-25 group-hover:text-opacity-0 animate px-[1vw] drop-shadow-xl">
              Superpower!
            </h3>
          </button>
        </div>
        <div className="w-full h-[25.5vw] mt-[0.25vw] center">
          <button
            className="quadTile frostedGlass frostedBorder mr-[0.25vw]"
            onMouseEnter={() =>
              setTip(
                "center w-max fixed z-10 top-[2.5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight delayedTransition opacity-100 delay-1000"
              )
            }
            onMouseLeave={() =>
              setTip(
                "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-0"
              )
            }
          ></button>

          <button
            className="doubleTileV bg-flower bg-cover bg-center ml-[0.25vw] center group"
            onMouseEnter={() =>
              setTip(
                "center w-max fixed z-10 top-[2.5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight delayedTransition opacity-100 delay-1000"
              )
            }
            onMouseLeave={() =>
              setTip(
                "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-0"
              )
            }
          >
            <div className="w-full h-full rounded-[1vw] bg-gradient-to-b from-transparent to-stone-900 opacity-0 group-hover:opacity-100 animate drop-shadow-xl backdrop-blur-sm"></div>
          </button>
        </div>
      </div>
      <div className="w-[25.5vw] h-[38.5vw] ml-[0.25vw] center flex-col">
        <button
          className="quadTile frostedGlass frostedBorder mb-[0.25vw]"
          onMouseEnter={() =>
            setTip(
              "center w-max fixed z-10 top-[2.5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight delayedTransition opacity-100 delay-1000"
            )
          }
          onMouseLeave={() =>
            setTip(
              "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-0"
            )
          }
        ></button>
        <div className="w-[25.5vw] h-[12.5vw] mt-[0.25vw] center">
          <button
            className="tile frostedGlass frostedBorder mr-[0.25vw]"
            onMouseEnter={() =>
              setTip(
                "center w-max fixed z-10 top-[2.5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight delayedTransition opacity-100 delay-1000"
              )
            }
            onMouseLeave={() =>
              setTip(
                "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-0"
              )
            }
          ></button>

          <button
            className="tile frostedGlass frostedBorder ml-[0.25vw]"
            onMouseEnter={() =>
              setTip(
                "center w-max fixed z-10 top-[2.5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight delayedTransition opacity-100 delay-1000"
              )
            }
            onMouseLeave={() =>
              setTip(
                "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-0"
              )
            }
          ></button>
        </div>
      </div>
    </section>
  );
};

export default About;
