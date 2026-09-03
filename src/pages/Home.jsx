import { ArrowRight, Sparkles } from "lucide-react";

function Home({ onGetStarted }) {
  return (
    <div className="home-page">

      {/* Decorative stickers */}
      <div className="sticker-background">

        <div className="sticker-placeholder sticker-1">
          ✦
        </div>

        <div className="sticker-placeholder sticker-2">
          ★
        </div>

        <div className="sticker-placeholder sticker-3">
          ♥
        </div>

        <div className="sticker-placeholder sticker-4">
          ☺
        </div>

        <div className="sticker-placeholder sticker-5">
          ✨
        </div>

        <div className="sticker-placeholder sticker-6">
          ⚡
        </div>

        <div className="sticker-placeholder sticker-7">
          🎨
        </div>

        <div className="sticker-placeholder sticker-8">
          🚀
        </div>

      </div>

      {/* Main content */}
      <main className="home-content">

        <div className="home-badge">
          <Sparkles size={15} />
          CREATE • ANIMATE • SHARE
        </div>

        <h1 className="home-title">
          Sticker
          <span>Studio</span>
        </h1>

        <p className="home-description">
          Turn your screenshots, images and videos into
          <br />
          expressive stickers and animated GIFs.
        </p>

        <button
          className="get-started-button"
          onClick={onGetStarted}
        >
          <span>Get Started</span>

          <span className="get-started-icon">
            <ArrowRight size={20} />
          </span>
        </button>

        <p className="home-hint">
          Create your first sticker in seconds
        </p>

      </main>

      {/* Bottom decoration */}
      <div className="home-bottom">
        <span>IMAGE</span>
        <span>TEXT</span>
        <span>ANIMATION</span>
        <span>GIF</span>
      </div>

    </div>
  );
}

export default Home;