export default function Features() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced vision AI powered by Claude analyzes coffee ground patterns with precision',
      icon: '🧠',
    },
    {
      title: 'Personalized Readings',
      description: 'Each fortune is unique and personalized based on your specific coffee pattern',
      icon: '🔮',
    },
    {
      title: 'Ancient Meets Modern',
      description: 'Traditional tasseography combined with cutting-edge machine learning',
      icon: '⚡',
    },
    {
      title: 'Instant Results',
      description: 'Get your fortune reading instantly after capturing your coffee grounds',
      icon: '⚡',
    },
    {
      title: 'Beautiful Interface',
      description: 'Mystical design that makes the experience magical and immersive',
      icon: '✨',
    },
    {
      title: 'Save & Share',
      description: 'Keep your readings and share them with friends and family',
      icon: '📱',
    },
  ];

  return (
    <section id="features" className="relative py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 glow-text">
            <span className="text-accent-400">Features</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to unlock your destiny
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/20 rounded-xl p-8 hover:border-accent-500/60 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-transparent transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-accent-300 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-500/5 rounded-bl-3xl group-hover:bg-accent-500/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
