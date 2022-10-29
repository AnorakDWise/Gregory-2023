const Home = () => {
  return (
    <section
      id="home"
      className="bg-homeBack w-screen h-screen bg-contain bg-no-repeat center flex-col m-aut0 select-none"
    >
      <h1 className="text-title font-medium drop-shadow-2xl">
        Gregory Buffard
      </h1>
      <h2 className="text-subtitle uppercase frostedGlass font-normal px-[0.5vw] py-[0.5vh] rounded-easy hover:drop-shadow-softLight animate frostedBorder drop-shadow-xl tracking-widest">
        co-founder / software engineer
      </h2>
    </section>
  );
};

export default Home;
