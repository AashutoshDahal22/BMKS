import { useState } from "react";

const PHOTOS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1598898190628-aedb98a3a0bf?w=800&q=80",
    caption: "Ganga Aarti, Varanasi",
    size: "large",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1609766418204-94d3e4a0e5f2?w=600&q=80",
    caption: "Prasad seva after morning puja",
    size: "small",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    caption: "Sunrise sadhana by the river",
    size: "small",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1602615576820-ea14cf77a0a2?w=600&q=80",
    caption: "Interior of the main sanctum",
    size: "small",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1567591370078-71c7c9a8a7a0?w=600&q=80",
    caption: "Planting sacred tulsi on Ekadashi",
    size: "small",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    caption: "Evening prayer gathering",
    size: "small",
  },
];

const EXTRA_PHOTOS = [
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&q=80",
    caption: "Diwali lights at the mandir",
    size: "small",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    caption: "Devotees offering flowers",
    size: "small",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    caption: "Quiet evening meditation",
    size: "small",
  },
];

const VIDEOS = [
  {
    id: "v1",
    thumbnail:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&q=80",
    title: "Ganga Aarti — Full Ceremony",
    duration: "12:34",
    description: "The complete evening aarti at the main ghat",
  },
  {
    id: "v2",
    thumbnail:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    title: "Morning Bhajan Session",
    duration: "8:02",
    description: "Devotional singing at sunrise with the community",
  },
  {
    id: "v3",
    thumbnail:
      "https://images.unsplash.com/photo-1598898190628-aedb98a3a0bf?w=600&q=80",
    title: "Navratri Celebrations 2024",
    duration: "24:15",
    description: "Nine nights of devotion — highlights reel",
  },
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ChevronDown = ({ flipped }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-5 w-5 transition-transform duration-300 ${
      flipped ? "rotate-180" : ""
    }`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-6 w-6"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function Lightbox({ photos, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);

  const prev = () => setIdx((i) => (i - 1 + photos.length) % photos.length);

  const next = () => setIdx((i) => (i + 1) % photos.length);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 text-[#f5f0e9]"
      >
        <CloseIcon />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#f5f0e9]/30 bg-[#f5f0e9]/10 text-[#f5f0e9]"
      >
        <ArrowLeft />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl text-center"
      >
        <img
          src={photos[idx].src}
          alt={photos[idx].caption}
          className="max-h-[75vh] w-full rounded-md object-contain shadow-2xl"
        />

        <p className="mt-4 text-sm italic tracking-wide text-[#d8b98f]">
          {photos[idx].caption}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#f5f0e9]/30 bg-[#f5f0e9]/10 text-[#f5f0e9]"
      >
        <ArrowRight />
      </button>
    </div>
  );
}

function PhotoCard({ photo, index, onOpen }) {
  return (
    <div
      onClick={() => onOpen(index)}
      className={`group relative cursor-pointer overflow-hidden rounded-md bg-[#eadfce]
      ${photo.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
      `}
    >
      <div
        className={`${
          photo.size === "large" ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <p className="absolute bottom-4 left-4 right-4 text-sm italic text-[#fffaf4] opacity-90 transition-opacity duration-300 group-hover:opacity-100">
        {photo.caption}
      </p>
    </div>
  );
}

function VideoCard({ video }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-[#d8c1a3] bg-[#fffaf4] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover brightness-90 transition-all duration-300 group-hover:brightness-75"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f0e9]/80 text-[#2b1d0e] transition-transform duration-300 group-hover:scale-110">
            <PlayIcon />
          </div>
        </div>

        <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 font-mono text-xs text-[#f5f0e9]">
          {video.duration}
        </span>
      </div>

      <div className="p-4">
        <h4 className="mb-1 text-lg text-[#24160b]">{video.title}</h4>

        <p className="text-sm leading-relaxed text-[#6f5c49]">
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [photosExpanded, setPhotosExpanded] = useState(false);
  const [videosExpanded, setVideosExpanded] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const visiblePhotos = photosExpanded ? [...PHOTOS, ...EXTRA_PHOTOS] : PHOTOS;

  const visibleVideos = videosExpanded ? VIDEOS : VIDEOS.slice(0, 2);

  const allPhotos = [...PHOTOS, ...EXTRA_PHOTOS];

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e9] pb-16 text-[#2b1d0e]">
      {/* Hero */}
      <div className="border-b border-[#c9a96e]/30 bg-gradient-to-br from-[#f8f2ea] to-[#efe2d1] px-5 py-14 md:px-14">
        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#8b6a3e]">
          Photo &amp; Video Gallery
        </p>

        <div className="flex flex-wrap items-end gap-10">
          <h1 className="min-w-[240px] flex-1 text-4xl leading-none text-[#24160b] md:text-6xl">
            Moments from
            <br />
            our organization
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex border-b border-[#c9a96e]/30 px-5 md:px-14">
        <button
          onClick={() => setActiveTab("photos")}
          className={`relative px-7 py-4 text-[11px] uppercase tracking-[0.18em] transition-colors ${
            activeTab === "photos"
              ? "text-[#8b6a3e]"
              : "text-[#7a6754] hover:text-[#8b6a3e]"
          }`}
        >
          Photos
          {activeTab === "photos" && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b6a3e]" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`relative px-7 py-4 text-[11px] uppercase tracking-[0.18em] transition-colors ${
            activeTab === "videos"
              ? "text-[#8b6a3e]"
              : "text-[#7a6754] hover:text-[#8b6a3e]"
          }`}
        >
          Videos
          {activeTab === "videos" && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#8b6a3e]" />
          )}
        </button>
      </div>

      {/* Photos */}
      {activeTab === "photos" && (
        <div className="px-5 pt-10 md:px-14">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {visiblePhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                index={allPhotos.findIndex((p) => p.id === photo.id)}
                onOpen={openLightbox}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setPhotosExpanded((e) => !e)}
              className="flex items-center gap-2 border border-[#b69468] px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#7b5a35] transition hover:bg-[#b69468]/10 hover:text-[#2b1d0e]"
            >
              <span>
                {photosExpanded
                  ? "Show less"
                  : `View ${EXTRA_PHOTOS.length} more photos`}
              </span>

              <ChevronDown flipped={photosExpanded} />
            </button>
          </div>
        </div>
      )}

      {/* Videos */}
      {activeTab === "videos" && (
        <div className="px-5 pt-10 md:px-14">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {visibleVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {VIDEOS.length > 2 && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setVideosExpanded((e) => !e)}
                className="flex items-center gap-2 border border-[#b69468] px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#7b5a35] transition hover:bg-[#b69468]/10 hover:text-[#2b1d0e]"
              >
                <span>
                  {videosExpanded
                    ? "Show less"
                    : `View ${VIDEOS.length - 2} more video${
                        VIDEOS.length - 2 > 1 ? "s" : ""
                      }`}
                </span>

                <ChevronDown flipped={videosExpanded} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          photos={allPhotos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
