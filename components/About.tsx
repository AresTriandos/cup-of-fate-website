export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 glow-text">
            <span className="text-accent-400">About Tasseography</span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Main Content */}
          <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/30 rounded-2xl p-8 hover:border-accent-500/60 transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-accent-300 mb-4">
              What is Tasseography?
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Tasseography, also known as tasseomancy or cup reading, is an ancient divination practice that dates back centuries. Practitioners interpret patterns, symbols, and shapes formed by tea leaves or coffee grounds in a cup to gain insight into a person's past, present, and future.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The practice has roots in ancient civilizations and has been passed down through generations across different cultures. From Eastern Europe to the Middle East to Asia, cup reading has been a cherished tradition for offering guidance and wisdom.
            </p>
          </div>

          {/* How We Use AI */}
          <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/30 rounded-2xl p-8 hover:border-accent-500/60 transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-accent-300 mb-4">
              ☕ Cup of Fate's Approach
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Cup of Fate combines the ancient wisdom of tasseography with modern AI technology. We use Claude's advanced vision AI to analyze the patterns and symbols in your coffee grounds, then generate personalized fortune readings based on traditional tasseographic interpretations.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This blend of ancient tradition and cutting-edge technology creates a unique and engaging experience that respects the cultural heritage of cup reading while making it accessible to modern users.
            </p>
          </div>

          {/* Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ancient Wisdom',
                description: 'Honoring centuries of tasseographic tradition and cultural heritage',
                icon: '📜',
              },
              {
                title: 'Modern Technology',
                description: 'Leveraging AI to provide insights and interpretations instantly',
                icon: '🚀',
              },
              {
                title: 'Personal Connection',
                description: 'Creating meaningful moments of reflection and introspection',
                icon: '💫',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-primary-700/30 border border-accent-500/20 rounded-lg p-6 text-center hover:border-accent-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-serif font-bold text-accent-300 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
