export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Coffee Cup Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center glow-effect animate-bounce">
            <span className="text-5xl">☕</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 glow-text">
          <span className="text-accent-400">Cup of Fate</span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300">AI Coffee Fortune Telling</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover your fortune through the ancient art of tasseography. Let AI analyze your coffee grounds and reveal what destiny has in store.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-accent-500/50 transition-all duration-300 glow-effect hover:scale-105">
            Try on TestFlight
          </button>
          <button className="px-8 py-4 border-2 border-accent-500 text-accent-400 font-bold text-lg rounded-lg hover:bg-accent-500/10 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Badge */}
        <div className="mt-12 inline-block">
          <div className="px-4 py-2 bg-primary-700/30 border border-accent-500/30 rounded-full text-accent-300 text-sm font-medium">
            🚀 iOS App • Android Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}
