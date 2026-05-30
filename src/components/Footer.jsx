import { useState } from "react";

// ── Icons ────────────────────────────────────────────────────────────────
const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function Footer() {
  return (
    <section className="bg-[#f8f4ed] px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border border-amber-700/20" />

          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1598898190628-aedb98a3a0bf?w=1200&q=80"
              alt="Temple"
              className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <p className="mt-4 text-center font-serif text-sm italic text-stone-500">
            Aarati at Sumargi Bhawan, Pashupati Area
          </p>
        </div>

        {/* Content */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-700">
            Visit Us
          </p>

          <h1 className="mb-6 text-5xl font-light leading-none text-stone-900 md:text-6xl">
            Darshan is
            <br />
            open to all
          </h1>

          <p className="max-w-md text-lg italic leading-8 text-stone-600">
            No dress code beyond modesty. No expectations. Remove your shoes at
            the gate and step inside whenever you are ready.
          </p>

          <div className="my-8 h-px bg-gradient-to-r from-amber-700/40 to-transparent" />

          {/* Info Grid */}
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center gap-2 text-amber-700">
                <MapPinIcon />
                <span className="text-xs uppercase tracking-[0.22em]">
                  Address
                </span>
              </div>

              <p className="leading-7 text-stone-800">
                Bhagawati Manav Kalyan Sangathan
                <br />
                Kathmandu, Nepal
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-amber-700">
                <PhoneIcon />
                <span className="text-xs uppercase tracking-[0.22em]">
                  Phone
                </span>
              </div>

              <a
                href="tel:+9779800000000"
                className="text-stone-800 transition hover:text-amber-700"
              >
                +977 9800000000
              </a>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-amber-700">
                <MailIcon />
                <span className="text-xs uppercase tracking-[0.22em]">
                  Email
                </span>
              </div>

              <a
                href="mailto:info@example.com"
                className="break-all text-stone-800 transition hover:text-amber-700"
              >
                info@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
