import { useRef, useState } from "react";
import { Play, Pause, ChevronDown } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const videoRef = useRef(null);

  const VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

  const handlePlayPause = async () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      await videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="min-h-screen bg-[#f5ede4] px-6 py-20 md:px-16">
      {/* Header */}
      <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#7c5c42]">
            Our Programs
          </p>

          <h2 className="text-4xl font-medium leading-tight text-[#2b1d0e] md:text-6xl">
            What we do,
            <br />
            together
          </h2>
        </div>

        <p className="max-w-md pt-1 text-base leading-relaxed text-[#5a4030] md:pt-6">
          Every program below is run by volunteers and offered free of cost.
          Everyone is equally welcome.
        </p>
      </div>

      {/* Video */}
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
        <div className="group relative aspect-video">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            onEnded={() => setIsPlaying(false)}
            className={`h-full w-full object-cover transition-all duration-500 ${
              isPlaying ? "opacity-100" : "opacity-80"
            }`}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Center Content */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                onClick={handlePlayPause}
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20"
                aria-label="Play Video"
              >
                <Play size={28} className="ml-1 fill-white text-white" />
              </button>

              <h3 className="text-center text-2xl font-medium tracking-wide text-white md:text-4xl">
                Our story,
              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/70">
                Watch the video
              </p>
            </div>
          )}

          {/* Pause Button */}
          {isPlaying && (
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 hover:opacity-100"
              aria-label="Pause Video"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
                <Pause size={24} className="fill-white text-white" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Text + Right Aligned Image */}
      <div className="mt-20 border-t border-[#d8bda1] pt-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 md:grid-cols-12">
          {/* Left Text (spans more space) */}
          <div className="md:col-span-7">
            <h3 className="mb-8 text-3xl font-medium leading-tight text-[#2b1d0e] md:text-5xl">
              About Us
            </h3>

            <div className="space-y-5 text-[15px] leading-8 text-[#4a3525] md:text-base">
              <p>
                Bhagawati Manav Kalyan Sangathan is a benevolent spiritual
                organization, dedicated to the welfare of humanity, with the
                active participation of thousands of people. Under the divine
                guidance of Brahmarishi Paramhansa Yogiraj Shri Shaktiputra Ji
                Maharaj, who has attained complete oneness with Mata Bhagwati,
                the Supreme Adi Shakti and Mother of the Universe, the
                organization strives to inspire society in the worship and
                devotion of Mata Bhagwati.
              </p>

              <div
                className={`grid overflow-hidden transition-all duration-500 ${
                  expanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-5 pt-5">
                    <p>
                      Its mission is to build a society filled with devotion,
                      wisdom, and self-empowerment, free from addiction,
                      violence, fear, hunger, and corruption — nurturing
                      individuals with strong character and awakened
                      consciousness.
                    </p>

                    <p>
                      Through this, the organization fosters the protection of
                      Dharma, the safeguarding of the nation, and service to
                      humanity. Param Pujya Sadgurudev Paramhansa Yogiraj Shri
                      Shaktiputra Ji Maharaj founded the Bhagbati Manav Kalyan
                      Sangathan in 1997.
                    </p>

                    <p>
                      Officially registered with the Kathmandu District
                      Administration Office on Shrawan 32, 2068 B.S. (2011
                      A.D.), the organization has been tirelessly dedicated to
                      social welfare for over 17 years.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-8 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#8b4513] hover:opacity-70"
              >
                {expanded ? "Read Less" : "Read More"}

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Spacer column (creates natural separation) */}
          <div className="hidden md:block md:col-span-1" />

          {/* Right Image (pushed far right) */}
          <div className="md:col-span-4 md:justify-self-end">
            <div
              className={`relative overflow-hidden rounded-2xl border border-black/5 shadow-lg transition-all duration-500 ${
                expanded ? "h-[720px]" : "h-[440px]"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
                alt="Organization"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
