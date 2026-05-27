export default function Download() {
  return (
    <section id="download" className="relative py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 glow-text">
            <span className="text-accent-400">Get the App</span>
          </h2>
          <p className="text-lg text-gray-400">
            Start your journey to destiny today
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* iOS Card */}
          <div className="bg-gradient-to-br from-primary-800/60 to-primary-900/60 border-2 border-accent-500/50 rounded-2xl p-8 hover:border-accent-500 transition-all duration-300 glow-effect">
            <div className="text-5xl mb-4">🍎</div>
            <h3 className="text-2xl font-serif font-bold text-accent-300 mb-3">
              iOS App
            </h3>
            <p className="text-gray-400 mb-6">
              Available now on TestFlight for early access. Join our beta community and be among the first to experience Cup of Fate.
            </p>
            <a
              href="https://testflight.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 glow-effect"
            >
              Download on TestFlight
            </a>
          </div>

          {/* Android Card */}
          <div className="bg-gradient-to-br from-primary-800/60 to-primary-900/60 border-2 border-accent-500/30 rounded-2xl p-8 opacity-60">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-serif font-bold text-accent-300 mb-3">
              Android App
            </h3>
            <p className="text-gray-400 mb-6">
              Coming soon! We're working hard to bring Cup of Fate to Android devices. Stay tuned for the release date.
            </p>
            <button disabled className="w-full px-6 py-3 bg-gray-600 text-gray-400 font-bold rounded-lg cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-accent-600/20 to-primary-700/20 border border-accent-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-accent-300 mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-6">
            Get notified when Android releases and for new features
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-primary-800/50 border border-accent-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-500 transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-bold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
