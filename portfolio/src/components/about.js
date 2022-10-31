import React, { useState } from "react";
import keyboard from "../assets/iconography/keyboard.svg";
import bulb from "../assets/iconography/bulb.svg";
import book from "../assets/iconography/book.svg";
import pencil from "../assets/iconography/pencil.svg";
import eraser from "../assets/iconography/eraser.svg";
import calc from "../assets/iconography/calc.svg";
import bookPile from "../assets/iconography/bookPile.svg";
import closedBook from "../assets/iconography/closedBook.svg";
import journal from "../assets/iconography/journal.svg";
import sketchLine from "../assets/graphics/sketchLine.svg";

const About = () => {
  const [tip, setTip] = useState(
    "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-1000"
  );

  const [text1, setText1] = useState("text-[2vw]  drop-shadow-md"),
    [text2, setText2] = useState("text-[1.75vw]  drop-shadow-md"),
    [text3, setText3] = useState("text-[1.5vw]  drop-shadow-md"),
    [text4, setText4] = useState("text-[1.25vw]  drop-shadow-md"),
    [text5, setText5] = useState("text-[1vw]  drop-shadow-md");

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
              className="w-[10vw] group-hover:w-[11vw] animate absoluteCenter group-hover:-rotate-12 drop-shadow-xl group-hover:drop-shadow-2xl brightness-75 group-hover:brightness-100"
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
            className="quadTile frostedGlass frostedBorder mr-[0.25vw] flex justify-start items-center flex-col group"
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
            <h3 className="bg-gradient-to-t from-amber-600 to-amber-500 text-stone-800 text-opacity-25 group-hover:text-opacity-0 knowledge bg-clip-text text-big font-semibold drop-shadow-md group-hover:drop-shadow-lg animate mt-[5vh]">
              Addicted to acquire
            </h3>
            <div className="font-medium">
              <h4
                className={
                  "lowVisibleText animate hover:drop-shadow-lg " + text1
                }
                onMouseEnter={() =>
                  setText2("text-[1vw] drop-shadow-sm") +
                  setText3("text-[1vw] drop-shadow-sm") +
                  setText4("text-[1vw] drop-shadow-sm") +
                  setText5("text-[1vw] drop-shadow-sm")
                }
                onMouseLeave={() =>
                  setText2("text-[1.75vw] drop-shadow-md") +
                  setText3("text-[1.5vw] drop-shadow-md") +
                  setText4("text-[1.25vw] drop-shadow-md") +
                  setText5("text-[1vw] drop-shadow-md")
                }
              >
                New experiences
              </h4>
              <h4
                className={
                  "lowVisibleText animate opacity-75 hover:drop-shadow-lg " +
                  text2
                }
                onMouseEnter={() =>
                  setText1("text-[1vw]") +
                  setText3("text-[1vw]") +
                  setText4("text-[1vw]") +
                  setText5("text-[1vw]")
                }
                onMouseLeave={() =>
                  setText1("text-[2vw]") +
                  setText3("text-[1.5vw]") +
                  setText4("text-[1.25vw]") +
                  setText5("text-[1vw]")
                }
              >
                New superpowers
              </h4>
              <h4
                className={
                  "lowVisibleText animate opacity-50 hover:drop-shadow-lg " +
                  text3
                }
                onMouseEnter={() =>
                  setText2("text-[1vw]") +
                  setText1("text-[1vw]") +
                  setText4("text-[1vw]") +
                  setText5("text-[1vw]")
                }
                onMouseLeave={() =>
                  setText2("text-[1.75vw]") +
                  setText1("text-[2vw]") +
                  setText4("text-[1.25vw]") +
                  setText5("text-[1vw]")
                }
              >
                New connections
              </h4>
              <h4
                className={
                  "lowVisibleText animate opacity-25 hover:drop-shadow-lg " +
                  text4
                }
                onMouseEnter={() =>
                  setText2("text-[1vw]") +
                  setText3("text-[1vw]") +
                  setText1("text-[1vw]") +
                  setText5("text-[1vw]")
                }
                onMouseLeave={() =>
                  setText2("text-[1.75vw]") +
                  setText3("text-[1.5vw]") +
                  setText1("text-[2vw]") +
                  setText5("text-[1vw]")
                }
              >
                New knowledge
              </h4>
              <h4
                className={
                  "lowVisibleText animate opacity-10 hover:drop-shadow-lg " +
                  text5
                }
                onMouseEnter={() =>
                  setText2("text-[1vw]") +
                  setText3("text-[1vw]") +
                  setText4("text-[1vw]") +
                  setText1("text-[1vw]")
                }
                onMouseLeave={() =>
                  setText2("text-[1.75vw]") +
                  setText3("text-[1.5vw]") +
                  setText4("text-[1.25vw]") +
                  setText1("text-[2vw]")
                }
              >
                New skills
              </h4>
            </div>
            <img
              src={book}
              className="absolute animate w-[5vw] rotate-0 bottom-[2vh] right-[5vw] group-hover:bottom-[2.5vh] group-hover:-rotate-6 group-hover:right-[5.5vw]"
            />
            <img
              src={pencil}
              className="absolute animate w-[3vw] bottom-[3.5vh] right-[3vw] rotate-[135deg] group-hover:rotate-180 group-hover:bottom-[4vh] group-hover:right-[2.5vw]"
            />
            <img
              src={eraser}
              className="absolute animate w-[1.5vw] bottom-[9.5vh] right-[8vw] rotate-45 group-hover:bottom-[11vh] group-hover:rotate-[55deg] group-hover:right-[5vw]"
            />
            <img
              src={calc}
              className="absolute animate w-[2.5vw] bottom-[5vh] right-[9.5vw] group-hover:bottom-[7vh] group-hover:right-[10.5vw] group-hover:-rotate-3"
            />
            <img
              src={closedBook}
              className="absolute animate w-[3vw] bottom-[2.9vh] left-[7vw] group-hover:bottom-[5vh] group-hover:left-[8vw] group-hover:rotate-12"
            />
            <img
              src={bookPile}
              className="absolute animate w-[4.5vw] bottom-[2.5vh] left-[5vw] group-hover:bottom-[4vh]"
            />
            <img
              src={journal}
              className="absolute animate w-[4vw] bottom-[2.55vh] left-[4vw] group-hover:bottom-[4vh] group-hover:left-[2.5vw] group-hover:-rotate-12"
            />
          </button>

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
            <div className="w-full h-full rounded-[1vw] bg-gradient-to-b from-transparent to-stone-900 opacity-0 group-hover:opacity-100 animate drop-shadow-xl backdrop-blur-sm flex flex-col justify-end items-start">
              <h4 className="text-plain font-light -mb-[0.5vw] ml-[0.75vw] animate group-hover:translate-y-0 translate-y-[4vh] group-hover:opacity-100 opacity-0 group-hover:delay-200">
                oh, btw...
              </h4>
              <h3 className="font-medium text-big mb-[3vh] text-left ml-[0.75vw] leading-none animate group-hover:translate-x-0 translate-x-[1vw] group-hover:opacity-100 opacity-0 group-hover:delay-500">
                I take <span className="italic font-bold">cool</span> photos.
              </h3>
              <div className="absolute rotate-6 bottom-[2.25vw] right-[0.75vw] w-[0vw] group-hover:w-[5vw] h-[5vh] bg-sketchLine bg-right bg-[length:200%] group-hover:bg-[length:100%] transition-all group-hover:transition-all duration-300 group-hover:delay-1000 ease-in-out group-hover:ease-in-out group-hover:duration-300 bg-no-repeat drop-shadow-softLight"></div>
            </div>
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
