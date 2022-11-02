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
import joystick from "../assets/iconography/joystick.svg";
import swim from "../assets/iconography/swim.svg";

const About = () => {
  const [tip, setTip] = useState(
    "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-1000"
  );

  const [text1, setText1] = useState("text-[2vw]  drop-shadow-md"),
    [text2, setText2] = useState("text-[1.75vw]  drop-shadow-md"),
    [text3, setText3] = useState("text-[1.5vw]  drop-shadow-md"),
    [text4, setText4] = useState("text-[1.25vw]  drop-shadow-md"),
    [text5, setText5] = useState("text-[1vw]  drop-shadow-md");

  const [led1, setLed1] = useState("#44403c"),
    [led2, setLed2] = useState("#1c1917"),
    [wire, setWire] = useState("#64717c");

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
              className="absolute animate w-[5vw] rotate-0 bottom-[2vh] right-[5vw] group-hover:bottom-[2.5vh] group-hover:-rotate-6 group-hover:right-[5.5vw] group-hover:drop-shadow-xl"
            />
            <img
              src={pencil}
              className="absolute animate w-[3vw] bottom-[3.5vh] right-[3vw] rotate-[135deg] group-hover:rotate-180 group-hover:bottom-[4vh] group-hover:right-[2.5vw] group-hover:drop-shadow-xl"
            />
            <img
              src={eraser}
              className="absolute animate w-[1.5vw] bottom-[9.5vh] right-[8vw] rotate-45 group-hover:bottom-[11vh] group-hover:rotate-[55deg] group-hover:right-[5vw] group-hover:drop-shadow-xl"
            />
            <img
              src={calc}
              className="absolute animate w-[2.5vw] bottom-[5vh] right-[9.5vw] group-hover:bottom-[7vh] group-hover:right-[10.5vw] group-hover:-rotate-3 group-hover:drop-shadow-xl"
            />
            <img
              src={closedBook}
              className="absolute animate w-[3vw] bottom-[2.9vh] left-[7vw] group-hover:bottom-[5vh] group-hover:left-[8vw] group-hover:rotate-12 group-hover:drop-shadow-xl"
            />
            <img
              src={bookPile}
              className="absolute animate w-[4.5vw] bottom-[2.5vh] left-[5vw] group-hover:bottom-[4vh] group-hover:drop-shadow-xl"
            />
            <img
              src={journal}
              className="absolute animate w-[4vw] bottom-[2.55vh] left-[4vw] group-hover:bottom-[4vh] group-hover:left-[2.5vw] group-hover:-rotate-12 group-hover:drop-shadow-xl"
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
          className="quadTile frostedGlass frostedBorder mb-[0.25vw] group"
          onMouseEnter={() =>
            setTip(
              "center w-max fixed z-10 top-[2.5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight delayedTransition opacity-100 delay-1000"
            ) +
            setLed1("#4fe5ff") +
            setLed2("#2eb7ed") +
            setWire("#e7e5e4")
          }
          onMouseLeave={() =>
            setTip(
              "center w-max fixed z-10 top-[5vh] frostedGlass frostedBorder rounded-easy px-[0.5vw] py-[0.5vh] drop-shadow-softLight animate opacity-0 delay-0"
            ) +
            setLed1("#44403c") +
            setLed2("#1c1917") +
            setWire("#64717c")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="15vw"
            className="absolute -z-10 m-auto right-0 left-0 bottom-[7.5vh] group-hover:drop-shadow-2xl drop-shadow-xl group-hover:-translate-y-[1vh] animate"
          >
            <path
              className="animate"
              fill={wire}
              d="M29,14h-7c-0.552,0-1-0.448-1-1s0.448-1,1-1h6V6c0-0.552,0.447-1,1-1s1,0.448,1,1v7 C30,13.552,29.553,14,29,14z"
            />
            <path
              className="animate"
              fill={wire}
              d="M32,27c-0.553,0-1-0.447-1-1V15c0-0.551-0.448-1-1-1h-2c-0.553,0-1-0.448-1-1s0.447-1,1-1h2 c1.654,0,3,1.346,3,3v11C33,26.553,32.553,27,32,27z"
            />
            <path
              className="animate"
              fill={wire}
              d="M27,24h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h3v-4c0-0.552,0.447-1,1-1s1,0.448,1,1v5 C28,23.552,27.553,24,27,24z"
            />
            <path
              className="animate"
              fill={wire}
              d="M28,41c-0.553,0-1-0.447-1-1v-3c0-0.552-0.448-1-1-1h-5c-0.552,0-1-0.447-1-1s0.448-1,1-1h5 c1.654,0,3,1.346,3,3v3C29,40.553,28.553,41,28,41z"
            />
            <path
              className="animate"
              fill={wire}
              d="M35,32h-6c-1.654,0-3-1.346-3-3v-6c0-0.552,0.447-1,1-1s1,0.448,1,1v6c0,0.552,0.448,1,1,1h6 c0.552,0,1-0.448,1-1v-5c0-1.654,1.346-3,3-3h1c0.553,0,1,0.448,1,1s-0.447,1-1,1h-1c-0.552,0-1,0.449-1,1v5 C38,30.654,36.654,32,35,32z"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMia"
              x1="26.586"
              x2="29.414"
              y1="8.414"
              y2="5.586"
              gradientTransform="matrix(1 0 0 -1 0 48)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color={led1} className="easlyAnimate" />
              <stop offset="1" stop-color={led2} className="easlyAnimate" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMia)"
              d="M28,39c1.104,0,2,0.896,2,2s-0.896,2-2,2s-2-0.896-2-2S26.896,39,28,39"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMib"
              x1="39.586"
              x2="42.414"
              y1="27.414"
              y2="24.586"
              gradientTransform="matrix(1 0 0 -1 0 48)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color={led1} className="easlyAnimate" /> /*
              it's here*/
              <stop offset="1" stop-color={led2} className="easlyAnimate" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMib)"
              d="M41,24c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2,0.896-2,2S39.896,24,41,24"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMic"
              x1="30.586"
              x2="33.414"
              y1="23.414"
              y2="20.586"
              gradientTransform="matrix(1 0 0 -1 0 48)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color={led1} className="easlyAnimate" />
              <stop offset="1" stop-color={led2} className="easlyAnimate" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMic)"
              d="M32,28c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2,0.896-2,2S30.896,28,32,28"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMid"
              x1="25.586"
              x2="28.414"
              y1="31.414"
              y2="28.586"
              gradientTransform="matrix(1 0 0 -1 0 48)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color={led1} className="easlyAnimate" />
              <stop offset="1" stop-color={led2} className="easlyAnimate" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMid)"
              d="M27,20c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2,0.896-2,2S25.896,20,27,20"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMie"
              x1="27.586"
              x2="30.414"
              y1="42.414"
              y2="39.586"
              gradientTransform="matrix(1 0 0 -1 0 48)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color={led1} className="easlyAnimate" />
              <stop offset="1" stop-color={led2} className="easlyAnimate" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMie)"
              d="M29,9c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2,0.896-2,2S27.896,9,29,9"
            />
            <path
              className="animate"
              fill={wire}
              d="M37,37h-3c-1.654,0-3-1.346-3-3v-3c0-0.553,0.447-1,1-1s1,0.447,1,1v3c0,0.552,0.448,1,1,1h3 c0.553,0,1,0.447,1,1S37.553,37,37,37z"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMif"
              x1="35.586"
              x2="38.414"
              y1="13.414"
              y2="10.586"
              gradientTransform="matrix(1 0 0 -1 0 48)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color={led1} className="easlyAnimate" />
              <stop offset="1" stop-color={led2} className="easlyAnimate" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMif)"
              d="M37,34c1.104,0,2,0.896,2,2s-0.896,2-2,2s-2-0.896-2-2S35.896,34,37,34"
            />
            <path
              className="animate"
              fill={wire}
              d="M37,18h-5c-0.553,0-1-0.448-1-1s0.447-1,1-1h5c0.553,0,1,0.448,1,1S37.553,18,37,18z"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMig"
              x1="35.586"
              x2="38.414"
              y1="32.414"
              y2="29.586"
              gradientTransform="matrix(1 0 0 -1 0 48)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color={led1} className="easlyAnimate" />
              <stop offset="1" stop-color={led2} className="easlyAnimate" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMig)"
              d="M37,15c1.104,0,2,0.896,2,2s-0.896,2-2,2s-2-0.896-2-2S35.896,15,37,15"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMih"
              x1="11.05"
              x2="23.315"
              y1="247.244"
              y2="208.066"
              gradientTransform="matrix(1 0 0 -1 0 254)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa1a6" />
              <stop offset="1" stop-color="#f24472" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMih)"
              d="M24,9.75C24,7.127,21.873,5,19.25,5c-2.413,0-4.384,1.806-4.688,4.136	C10.831,9.814,8,13.073,8,17c0,0.279,0.015,0.554,0.042,0.826C6.169,19.643,5,22.183,5,25c0,2.821,1.173,5.365,3.052,7.183	C8.02,32.451,8,32.723,8,33c0,3.665,2.819,6.668,6.406,6.97C15.171,41.751,16.939,43,19,43c2.761,0,5-2.239,5-5	C24,37.617,24,10.438,24,9.75z"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMii"
              x1="14.806"
              x2="29.064"
              y1="246.969"
              y2="211.253"
              gradientTransform="matrix(1 0 0 -1 0 254)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ff6181" />
              <stop offset="1" stop-color="#c41f40" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMii)"
              d="M17.123,19h0.002c0.471,0,0.856-0.338,0.969-0.795c0.28-1.134,1.154-1.851,2.12-2.103	c0.453-0.119,0.786-0.5,0.786-0.968v-0.258c0-0.471-0.338-0.856-0.795-0.969c-1.134-0.28-1.851-1.154-2.103-2.12	C17.983,11.333,17.602,11,17.134,11h-0.011c-0.655,0-1.129,0.622-0.967,1.257c0.285,1.121,0.946,2.076,1.839,2.743	c-0.894,0.666-1.554,1.621-1.839,2.743C15.994,18.378,16.468,19,17.123,19z"
            />
            <linearGradient
              id="k2YFeuzVMIW77swZK4mMij"
              x1="8.959"
              x2="23.711"
              y1="244.265"
              y2="207.313"
              gradientTransform="matrix(1 0 0 -1 0 254)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ff6181" />
              <stop offset="1" stop-color="#c41f40" />
            </linearGradient>
            <path
              fill="url(#k2YFeuzVMIW77swZK4mMij)"
              d="M18.912,24L18.912,24c-0.493,0-0.895,0.367-0.985,0.852c-0.279,1.508-1.307,2.096-2.24,2.138	c-1.059-0.505-2.256-0.829-3.586-0.944C11.513,25.996,11,26.453,11,27.043l0,0c0,0.507,0.38,0.952,0.886,0.989	c2.766,0.204,4.722,1.394,5.832,3.547c0.227,0.439,0.762,0.621,1.223,0.444l0,0c0.562-0.216,0.806-0.881,0.523-1.413	c-0.453-0.851-1.023-1.589-1.693-2.214c1.03-0.602,1.865-1.667,2.136-3.254C20.009,24.543,19.519,24,18.912,24z"
            />
          </svg>
          <h3 className="absolute m-auto left-0 right-0 top-[10vh] font-medium text-subtitle drop-shadow-xl text-stone-300">
            You like machine learning?
          </h3>
          <h1 className="absolute left-0 right-0 top-[20vh] font-bold text-huge drop-shadow-2xl group-hover:drop-shadow-xl animate">
            coz I{" "}
            <span className="text-stone-800 bg-gradient-to-t from-violet-800 to-indigo-500 bg-clip-text text-opacity-100 group-hover:text-opacity-0 animate group-hover:drop-shadow-loveShadow">
              love
            </span>{" "}
            it...
          </h1>
        </button>
        <div className="w-[25.5vw] h-[12.5vw] mt-[0.25vw] center">
          <button
            className="tile frostedGlass frostedBorder mr-[0.25vw] center group"
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
              src={joystick}
              className="w-[7vw] translate-y-[1vh] group-hover:translate-y-0 easlyAnimate drop-shadow-xl group-hover:drop-shadow-2xl"
            />
          </button>

          <button
            className="tile frostedGlass frostedBorder ml-[0.25vw] center group"
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
              src={swim}
              className="w-[7vw] translate-y-[1vh] group-hover:translate-y-0 easlyAnimate drop-shadow-xl group-hover:drop-shadow-2xl"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
