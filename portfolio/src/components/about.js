import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-aboutBack w-screen h-screen bg-cover flex justify-center items-center"
    >
      <div className="container h-4/6 flex flex-wrap">
        <div className="w-48 h-48 flex justify-center items-center frostedGlass">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 213.699 213.699"
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
        <div className="w-96 h-48 frostedGlass flex justify-center items-center">
          <div className="bg-terminalElement w-full h-full bg-cover">
            <h2 className="p-5 font-medium text-xl text-stone-300">
              coding is my...
            </h2>
            <h1 className="text-center font-bold text-5xl bg-gradient-to-t from-[#4b5f68] to-[#667a83] bg-clip-text text-transparent drop-shadow-superpowerShadow">
              Superpower!
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
