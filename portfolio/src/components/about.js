import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-aboutBack w-screen h-screen bg-cover flex justify-center items-center"
    >
      <div className="container h-4/6">
        <div className="flex flex-wrap flex-row justify-center items-start">
          <div
            className="w-48 h-48 flex justify-center items-center frostedGlass"
            data-aos="flip-right"
            data-aos-once="false"
            data-aos-delay="100"
            data-aos-mirror="false"
            data-aos-duration="1000"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 213.699 190"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="p-10"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.16"
                  y1="-0.084"
                  x2="1"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#e7e5e4" />
                  <stop offset="1" stop-color="#d6d3d1" />
                </linearGradient>
              </defs>
              <path
                id="icons8_formula_fx"
                d="M123.529,3C75.666,3,70.3,56.46,67.5,71.627H42.586l-3.172,15.25H64.866c-14.145,84.06-20.2,89.835-27.18,89.835C31.357,159,26.756,153.329,17.163,153.329c-13.451,0-16.189,11.094-16.189,15.3,0,9.44,7.819,17.38,23.069,17.38,56.449,0,60.943-46.308,69.788-99.128H119.88l3.187-15.25H96.155c2.829-21.93,5.874-53.645,14.208-59.334,1.38,3.66,6.461,23.382,20.552,23.382,15.144,0,16.412-14.124,16.412-15.787C147.313,14.825,144.46,3,123.529,3Zm32.734,99.128c-7.8,0-17.7,4.728-22.041,6.687l-1.594,6.627c1.2-.442,6.875-2.2,9.338-2.2,8.632,0,10.082,3.973,14.253,18.08.984,3.332,2.33,8.247,3.932,14.789a119.285,119.285,0,0,1-8.31,9.8c-1.883-.686-7.771-2.71-12.674-2.71-11.194,0-13.821,9.712-13.821,14.059,0,3.881,2.68,11.125,10.618,11.125,11.262,0,14.48-8.876,25.75-25.69,2.974,12.078,3.7,25.69,22.116,25.69,7.877,0,17.261-3.824,22.027-5.883l1.593-6.627s-5.319,2.189-9.323,2.189c-11.6,0-11.478-8.465-18.333-33.658,1.876-2.585,6.843-9.037,8.444-10.1,1.639.58,7.528,2.636,12.644,2.636,3.851,0,13.791-2.48,13.791-13.91,0-3.942-2.353-10.9-10.619-10.9-13.077,0-19.777,17.949-25.869,25.765C174.869,111.292,171.384,102.128,156.263,102.128Z"
                transform="translate(-0.975 -3)"
                fill="url(#linear-gradient)"
              />
            </svg>
          </div>
          <div
            className="w-[25rem] h-48 frostedGlass flex justify-center items-center"
            data-aos="flip-right"
            data-aos-once="false"
            data-aos-delay="300"
            data-aos-mirror="false"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-terminalElement w-full h-full bg-cover">
              <h2 className="p-5 font-medium text-xl text-stone-300">
                coding is my...
              </h2>
              <h1 className="text-center font-bold text-5xl bg-gradient-to-t from-[#4b5f68] to-[#667a83] bg-clip-text text-transparent drop-shadow-superpowerShadow">
                Superpower!
              </h1>
            </div>
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
            <div className="bg-machineLearningElement bg-cover w-full h-full absolute z-1"></div>
            <div className="flex flex-col justify-center align-center w-full h-full relative z-2 -mt-16">
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
              <div className="bg-eduElement bg-cover w-full h-full absolute z-1">
                <div className="flex flex-col justify-center items-center h-full w-full">
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
                    <h2 className="text-3xl font-medium text-stone-900 opacity-20">
                      New habits
                    </h2>
                  </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="85.16"
              height="84.031"
              viewBox="0 0 195.16 204.031"
            >
              <defs>
                <linearGradient
                  id="joystick-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="0.525"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#991b1b" />
                  <stop offset="1" stop-color="#1c1917" />
                </linearGradient>
              </defs>
              <path
                id="icons8_joystick"
                d="M101.58,3a35.455,35.455,0,0,0-8.871,69.789v38.238A26.691,26.691,0,0,0,76.6,127.193h49.968a26.691,26.691,0,0,0-16.113-16.165V72.806A35.464,35.464,0,0,0,101.58,3Zm-62.1,106.451a17.737,17.737,0,0,0-17.742,17.742H57.225A17.737,17.737,0,0,0,39.484,109.451ZM21.742,144.935A17.737,17.737,0,0,0,4,162.676v26.613a17.737,17.737,0,0,0,17.742,17.742H181.418a17.737,17.737,0,0,0,17.742-17.742V162.676a17.737,17.737,0,0,0-17.742-17.742Z"
                transform="translate(-4 -3)"
                fill="url(#joystick-gradient)"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="99.42"
              height="57.33"
              viewBox="0 0 285.524 164.644"
            >
              <defs>
                <linearGradient
                  id="swim-gradient"
                  x1="0.5"
                  x2="0.474"
                  y2="1.382"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#e7e5e4" />
                  <stop offset="1" stop-color="#2f434d" />
                </linearGradient>
              </defs>
              <path
                id="icons8_swimming"
                d="M227.139,8a38.417,38.417,0,1,0,38.417,38.417A38.417,38.417,0,0,0,227.139,8ZM101.1,18.976A10.977,10.977,0,0,0,96,20.134L30.144,53.063A10.978,10.978,0,0,0,38.891,73.15l-.129.108L95.38,56.365,119.326,94.2,59.193,128.611c10.834-.615,23.09-5.464,27.141-7.44a33.239,33.239,0,0,1,29.306.065c4.182,2.031,17.872,7.5,29.177,7.5s25-5.461,29.328-7.568a33.239,33.239,0,0,1,29.306.065l-36.1-36.424L108.929,22.449a10.977,10.977,0,0,0-7.825-3.473ZM12.715,139.651A10.977,10.977,0,0,0,8.192,160.51s23.2,12.134,48.815,12.134a104.288,104.288,0,0,0,43.905-10.119,104.286,104.286,0,0,0,43.905,10.119,104.287,104.287,0,0,0,43.905-10.119,104.286,104.286,0,0,0,43.905,10.119c25.611,0,48.815-12.134,48.815-12.134a10.978,10.978,0,1,0-9.819-19.637s-20.7,9.818-39,9.818-39-9.818-39-9.818a10.978,10.978,0,0,0-9.819,0s-20.7,9.818-39,9.818-39-9.818-39-9.818a10.978,10.978,0,0,0-9.819,0s-20.7,9.818-39,9.818-39-9.818-39-9.818A10.977,10.977,0,0,0,12.715,139.651Z"
                transform="translate(-1.988 -8)"
                fill="url(#swim-gradient)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
