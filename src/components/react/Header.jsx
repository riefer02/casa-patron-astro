import { useState, useEffect, useRef } from "react";
import logoWhite from "../../assets/cp-bird-logo-white.svg";

// Mobile detection hook (from original Gatsby implementation)
const useUserAgent = () => {
  const [userAgent, setUserAgent] = useState(null);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (navigator) {
      setUserAgent(navigator.userAgent);
      // Check if user is using a mobile device
      const mobileRegex = /(android|iphone|ipad|mobile)/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    }
  }, []);

  return { userAgent, isMobile };
};

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Activities", url: "/activities/" },
  // { label: "Docs", url: "/docs/" },
  { label: "Blog", url: "/posts/" },
  { label: "Contact Us", url: "/contact-us/" },
];

export default function Header({
  hasHeroContent,
  heroImg,
  mobileHeroImg,
  isHomePage = false,
}) {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef(null);
  const { userAgent, isMobile } = useUserAgent();

  // Handle scroll effect for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Video source management (following original Gatsby pattern)
  useEffect(() => {
    if (!userAgent || !videoRef.current) return;

    // Only add video source on desktop (non-mobile)
    if (!isMobile) {
      const video = videoRef.current;

      // Clear any existing sources
      video.innerHTML = "";

      const newSource = document.createElement("source");
      newSource.src = "/cp-hero-video.mp4";
      newSource.type = "video/mp4";
      video.appendChild(newSource);

      // Force video to load and play
      video.load(); // This forces the video to reload with new source

      // Attempt autoplay after loading
      video.addEventListener(
        "loadeddata",
        () => {
          video
            .play()
            .then(() => {
              // Video autoplay successful
            })
            .catch((_error) => {
              // Autoplay blocked - silent fail
            });
        },
        { once: true }
      );
    }
  }, [isMobile, userAgent]);

  const headerClasses = `relative z-30 bg-black ${
    isHomePage ? "h-screen sm:h-[54vw]" : "h-16"
  }`;

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isHomePage && !isScrolled ? "bg-transparent" : "bg-grey-neutral shadow-lg"
  } ${mobileNavActive ? "bg-grey-neutral" : ""}`;

  const handleMobileMenuToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const handleLinkClick = () => {
    setMobileNavActive(false);
  };

  return (
    <header className={headerClasses}>
      {/* Hero Background */}
      {isHomePage && (
        <>
          {/* Desktop Video */}
          <div className="hidden sm:block absolute z-10 h-full w-full overflow-hidden">
            <video
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              id="hero-video"
              className="hidden sm:block relative z-10 w-full h-full object-cover"
              ref={videoRef}
            >
              <source src="/cp-hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Mobile Hero Image */}
          <div className="block sm:hidden absolute z-10 h-full w-full overflow-hidden">
            {mobileHeroImg && (
              <img
                src={mobileHeroImg}
                alt="Casa Patron mobile hero"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Background Overlays */}
          <div className="hidden sm:block absolute z-0 h-full w-full">
            <div className="bg-gray-800 bg-opacity-20 w-full h-full"></div>
          </div>
          <div className="absolute sm:hidden z-0 top-0 bg-black opacity-50 h-full w-full"></div>
        </>
      )}

      {/* Non-home page hero images */}
      {!isHomePage && (
        <>
          {/* Desktop Hero Image */}
          <div className="absolute hidden sm:block z-10 h-full w-full overflow-hidden">
            {heroImg && (
              <img
                src={heroImg}
                alt="Casa Patron hero"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Mobile Hero Image */}
          <div className="block sm:hidden absolute z-10 h-full w-full pt-0 overflow-hidden">
            {mobileHeroImg && (
              <img
                src={mobileHeroImg}
                alt="Casa Patron mural, a black bird with a heart flower."
                style={{ height: "100%", objectFit: "cover" }}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </>
      )}

      {/* Navigation */}
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <div className="sm:hidden absolute inset-y-0 right-0 flex items-center">
              <button
                type="button"
                onClick={handleMobileMenuToggle}
                className="text-white inline-flex items-center justify-center p-2 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileNavActive}
              >
                <span className="sr-only">Open main menu</span>
                {!mobileNavActive ? (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo and desktop nav */}
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="w-16">
                  <img
                    src={logoWhite.src}
                    alt="Casa Patron bird with flower logo"
                    className="logo-shadow w-16 h-auto"
                    width="64"
                    height="64"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex items-center sm:ml-6">
                <div className="flex space-x-4">
                  {navLinks.map((navLink, index) => (
                    <a
                      key={index}
                      href={navLink.url}
                      className={`text-shadow px-3 py-2 rounded-md font-medium underline-offset-1 hover:underline text-white transition-colors ${
                        index === navLinks.length - 1 ? "pr-0" : ""
                      }`}
                    >
                      {navLink.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileNavActive && (
          <div
            className="sm:hidden fixed top-16 left-0 w-full bg-gradient-to-b from-grey-neutral to-gray-800 backdrop-blur-sm transition-all duration-300 ease-in-out z-40 shadow-2xl"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            <div className="p-8 h-full flex items-center flex-col justify-center space-y-6">
              {navLinks.map((navLink, index) => (
                <a
                  key={index}
                  href={navLink.url}
                  onClick={handleLinkClick}
                  className="group relative px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-secondary to-tertiary rounded-2xl min-w-[85%] text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out border border-primary/20 hover:border-primary/50"
                >
                  <span className="relative z-10">{navLink.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}

              {/* Mobile menu footer */}
              <div className="mt-auto pt-8 text-center">
                <p className="text-primary/80 text-sm font-light">
                  Casa Patron • Alto, New Mexico
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Near Ruidoso & Ski Apache
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      {hasHeroContent && isHomePage && (
        <div className="relative z-30 max-w-7xl mx-auto h-full px-4 sm:px-6 xl:px-0">
          <div className="sm:absolute mx-auto top-[35%] sm:top-[25%] w-full pt-[90%] sm:pt-0 py-10 sm:py-0 text-left">
            <div className="mx-auto xl:px-6">
              <div className="-mt-[30%] sm:-mt-0">
                <h1 className="hidden">
                  Casa Patron: Short Term Vacation Rental Home in Alto, NM Near
                  Ruidoso & Ski Apache
                </h1>
                <a href="#what-is-casa-patron" className="mb-3 sm:mb-4 block">
                  <div className="text-shadow text-5xl md:text-6xl lg:text-6xl xl:text-[72px] xl:leading-[77px] text-left font-light mb-2 xl:mx-0 text-white">
                    Let&apos;s
                    <div className="inline-flex pl-2 sm:pl-3 lg:pl-4 overflow-hidden w-[70%] mx-auto">
                      <div className="flex-col h-full relative inline-flex animate-spin-words">
                        <span className="opacity-0 text-primary">Ski.</span>
                        <span className="absolute text-primary">Ski</span>
                        <span className="absolute translate-y-[100%] overflow-hidden text-success">
                          Explore
                        </span>
                        <span className="absolute translate-y-[200%] text-tertiary">
                          Experience
                        </span>
                        <span className="absolute translate-y-[300%] text-primary">
                          Ski
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-shadow text-5xl md:text-6xl lg:text-6xl xl:text-[72px] xl:leading-[77px] text-left font-light mb-2 xl:mx-0 text-white">
                      Alto, New Mexico,
                    </div>
                    <div className="text-shadow text-5xl md:text-6xl lg:text-6xl xl:text-[72px] xl:leading-[77px] text-left font-light mb-2 xl:mx-0 text-white">
                      Casa Patron.
                    </div>
                  </div>
                  <div className="sm:hidden">
                    <div className="text-shadow text-5xl md:text-6xl lg:text-6xl xl:text-[72px] xl:leading-[77px] text-left font-light mb-2 xl:mx-0 text-white">
                      Alto, NM
                    </div>
                    <div className="text-shadow text-5xl md:text-6xl lg:text-6xl xl:text-[72px] xl:leading-[77px] text-left font-light mb-2 xl:mx-0 text-white">
                      Casa Patron
                    </div>
                  </div>
                </a>
                <p className="text-shadow block sm:pt-0 font-light sm:text-lg md:text-xl lg:text-2xl text-white max-w-[250px] lg:max-w-sm">
                  Short-term vacation rental, located near Ruidoso & Ski Apache.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
