import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-start px-10 text-white overflow-hidden"
      style={{
        backgroundImage: `url(/images/dashboardImage1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl ml-20">
        {/* Small top label */}
        <p className="uppercase tracking-widest text-base opacity-80 mb-4">
          ESTABLISHED "Date" •
        </p>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
          Faith in worship. <br />
          Faith in service.
        </h1>

        {/* Subtitle */}
        <p className="text-xl leading-relaxed opacity-90 mb-8">
          Bhagawati Manav Kalyan Sangathan is a benevolent spiritual
          organization, dedicated to the welfare of humanity, with the active
          participation of thousands of people. Under the divine guidance of
          Brahmarishi Paramhansa Yogiraj Shri Shaktiputra Ji Maharaj, who has
          attained complete oneness with Mata Bhagwati, the Supreme Adi Shakti
          and Mother of the Universe, the organization strives to inspire
          society in the worship and devotion of Mata Bhagwati.
        </p>

        {/* Buttons */}
        <div className="flex gap-5">
          <button className="px-7 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200">
            Our programs
          </button>
          <button className="px-7 py-3 border border-white rounded-md font-medium hover:bg-white hover:text-black">
            Know Us More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
