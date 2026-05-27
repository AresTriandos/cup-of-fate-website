export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Brew Your Coffee',
      description: 'Prepare your coffee in a cup. The ritual is part of the experience.',
      icon: '☕',
    },
    {
      number: '2',
      title: 'Capture the Pattern',
      description: 'Take a photo of your coffee grounds at the bottom of the cup using the app.',
      icon: '📸',
    },
    {
      number: '3',
      title: 'AI Analysis',
      description: 'Our advanced AI analyzes the patterns and symbols using vision technology.',
      icon: '🤖',
    },
    {
      number: '4',
      title: 'Receive Your Fortune',
      description: 'Get a personalized fortune reading based on the patterns detected.',
      icon: '✨',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 glow-text">
            <span className="text-accent-400">How It Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the magic of tasseography combined with cutting-edge AI technology
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-[60%] top-12 w-full h-1 bg-gradient-to-r from-accent-500/50 to-transparent"></div>
              )}

              {/* Card */}
              <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/30 rounded-xl p-6 hover:border-accent-500/60 transition-all duration-300 glow-effect">
                {/* Step Number Circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-4 glow-effect mx-auto">
                  <span className="text-2xl text-primary-900 font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="text-4xl text-center mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-accent-300 text-center mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-center text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
