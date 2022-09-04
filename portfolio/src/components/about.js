import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-aboutBack w-screen h-screen bg-cover flex justify-center items-center"
    >
      <div className="container h-4/6">
        <div className="flex flex-wrap flex-row justify-center items-start select-none">
          <div
            className="w-48 h-48 flex justify-center items-center frostedGlass"
            data-aos="flip-right"
            data-aos-once="false"
            data-aos-delay="100"
            data-aos-mirror="false"
            data-aos-duration="1000"
            data-aos-easeing="ease-in-out"
          >
            <h1 className="IBMPlexMonoItalicMedium text-center text-7xl p-5 drop-shadow-whiteShadow">
              fx
            </h1>
          </div>

          <div
            className="w-[25rem] h-48 frostedGlass flex flex-col justify-center items-start"
            data-aos="flip-right"
            data-aos-once="false"
            data-aos-delay="300"
            data-aos-mirror="false"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="absolute text-[10rem] w-min left-0 right-0 mx-auto -mt-10 -rotate-12">
              ⌨️
            </p>
            <h2 className="p-5 font-medium text-xl text-stone-300 -mt-16">
              coding is my...
            </h2>
            <h1 className="text-center font-bold text-5xl bg-gradient-to-t from-[#596e77] to-[#69828f] bg-clip-text text-transparent drop-shadow-superpowerShadow mx-auto">
              Superpower!
            </h1>
          </div>

          <div
            className="w-[25rem] h-[25rem] frostedGlass"
            data-aos="flip-right"
            data-aos-once="false"
            data-aos-delay="500"
            data-aos-mirror="false"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="absolute m-auto left-0 right-0 top-0 bottom-0 h-min w-min text-9xl mb-24">
              🤖
            </p>
            <div className="flex flex-col justify-center align-center w-full h-full -mt-16">
              <h1 className="text-center font-medium text-xl text-stone-300">
                You like Machine Learning?
              </h1>
              <h2 className="text-center font-bold text-5xl bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent drop-shadow-machineLearningShadow">
                coz I love it..
              </h2>
            </div>
          </div>

          <div className="flex -mt-[13rem]">
            <div
              className="w-[25rem] h-[25rem] frostedGlass"
              data-aos="flip-right"
              data-aos-once="false"
              data-aos-delay="300"
              data-aos-mirror="false"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p className="absolute opacity-60 text-[13rem] w-min h-min m-auto -mt-16 -mr-6 left-0 right-0 top-0 bottom-0">
                🎓
              </p>
              <div className="flex flex-col justify-center items-center h-full w-full relative">
                <h1 className="text-2xl font-medium pb-2 text-stone-900">
                  always trying to learn
                </h1>
                <div>
                  <h2 className="text-3xl font-medium text-stone-900">
                    New experiences
                  </h2>
                  <h2 className="text-3xl font-medium text-stone-900 opacity-80">
                    New exciting things
                  </h2>
                  <h2 className="text-3xl font-medium text-stone-900 opacity-60">
                    New superpowers
                  </h2>
                  <h2 className="text-3xl font-medium text-stone-900 opacity-40">
                    New skills
                  </h2>
                  <h2 className="text-3xl font-medium bg-gradient-to-t from-transparent to-[#1c19173b] text-transparent bg-clip-text">
                    New habits
                  </h2>
                </div>
              </div>
            </div>

            <div
              className="rounded-3xl bg-flower bg-cover bg-center m-2 w-48 h-[25rem]"
              data-aos="flip-right"
              data-aos-once="false"
              data-aos-delay="500"
              data-aos-mirror="false"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h2 className="text-stone-300 font-medium text-md pl-2 pt-2 drop-shadow-md -mb-1">
                Oh yeah,
              </h2>
              <h2 className="text-stone-300 font-medium text-md pl-2 drop-shadow-md">
                also I take cool photos.
              </h2>
            </div>
          </div>

          <div
            className="frostedGlass w-48 h-48 flex justify-center items-center"
            data-aos="flip-right"
            data-aos-once="false"
            data-aos-delay="700"
            data-aos-mirror="false"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="text-9xl">🕹️</p>
          </div>

          <div
            className="frostedGlass w-48 h-48 flex justify-center items-center"
            data-aos="flip-right"
            data-aos-once="false"
            data-aos-delay="900"
            data-aos-mirror="false"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="text-9xl rounded-3xl bg-white w-[128px] bg-clip-text overflow-clip flex justify-center items-center">
              ⛵
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
