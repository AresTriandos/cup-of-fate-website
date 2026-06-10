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

        {/* Sample Readings Gallery Section */}
        <div className="mt-20 pt-16 border-t border-accent-500/20">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-4 glow-text">
            <span className="text-accent-400">Sample Readings</span>
          </h3>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            See how tasseography reveals the hidden messages in your coffee grounds
          </p>

          {/* Readings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reading 1 - Triangle */}
            <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/30 rounded-xl p-8 hover:border-accent-500/60 transition-all duration-300 glow-effect">
              <h4 className="text-lg font-serif font-bold text-accent-300 mb-4">
                ✨ The Triangle
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Watch for curved thresholds, rounded doorways, and the waning or waxing moon in the coming fortnight. These are your markers.
              </p>
              <p className="text-gray-400 mb-4 text-sm">
                The cup reveals a soul in quiet transition — like cream that has settled after a gentle stir, you are finding your center after a period of gentle turbulence. The smooth surface speaks of calm approaching, and the central valley whispers of depth yet to be explored within yourself.
              </p>
              <div className="bg-primary-900/50 border-l-2 border-accent-500 pl-4 py-3">
                <p className="text-xs font-semibold text-accent-400 mb-1">GENTLE GUIDANCE</p>
                <p className="text-gray-400 text-xs italic">
                  Even the creamiest surface holds the memory of motion beneath it — your stillness is not emptiness, beloved, it is potential at rest.
                </p>
              </div>
            </div>

            {/* Reading 2 - Circle */}
            <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/30 rounded-xl p-8 hover:border-accent-500/60 transition-all duration-300 glow-effect">
              <h4 className="text-lg font-serif font-bold text-accent-300 mb-4">
                ✨ The Circle
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                A ring left on paper, a wreath upon a door, or the rim of a stone in still water. When you see it, pause and make your wish.
              </p>
              <p className="text-gray-400 mb-4 text-sm">
                The grounds have spoken in whispers of convergence — your energy, long scattered like morning mist, is gathering itself into a singular and powerful force. The concentrated heart of this cup reveals a soul on the threshold of crystallization, where chaos transforms into purpose.
              </p>
              <div className="bg-primary-900/50 border-l-2 border-accent-500 pl-4 py-3">
                <p className="text-xs font-semibold text-accent-400 mb-1">GENTLE GUIDANCE</p>
                <p className="text-gray-400 text-xs italic">
                  The cup is nearly empty, dear seeker, yet look how much it still holds to tell you. So too shall your quietest seasons carry the loudest revelations.
                </p>
              </div>
            </div>

            {/* Reading 3 - Unfurling Leaf */}
            <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/30 rounded-xl p-8 hover:border-accent-500/60 transition-all duration-300 glow-effect">
              <h4 className="text-lg font-serif font-bold text-accent-300 mb-4">
                ✨ The Unfurling Leaf
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Seek it in nature, in doorways, in unexpected corners of your day.
              </p>
              <p className="text-gray-400 mb-4 text-sm">
                The leaves have not yet spoken — for you exist in a sacred in-between, a moment of steeping, of becoming. Like the tea that swirls and deepens in amber waters, your story is still being written, your essence still unfurling into the world around you.
              </p>
              <div className="bg-primary-900/50 border-l-2 border-accent-500 pl-4 py-3">
                <p className="text-xs font-semibold text-accent-400 mb-1">GENTLE GUIDANCE</p>
                <p className="text-gray-400 text-xs italic">
                  You are not yet finished steeping, dear seeker. And that is the most magical place of all to be.
                </p>
              </div>
            </div>

            {/* Reading 4 - Vessel That Has Known Warmth */}
            <div className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/30 rounded-xl p-8 hover:border-accent-500/60 transition-all duration-300 glow-effect">
              <h4 className="text-lg font-serif font-bold text-accent-300 mb-4">
                ✨ The Vessel That Has Known Warmth
              </h4>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                A season of profound offering and transformation.
              </p>
              <p className="text-gray-400 mb-4 text-sm">
                The leaves speak in whispers of transformation — what appears spent and wrung dry still holds the essence of its journey. Like the tea bag that has given all it possesses to the water, you are in a season of profound offering. The concentrated depths at the bottom of your cup reveal a soul poured fully into life's cup.
              </p>
              <div className="bg-primary-900/50 border-l-2 border-accent-500 pl-4 py-3">
                <p className="text-xs font-semibold text-accent-400 mb-1">GENTLE GUIDANCE</p>
                <p className="text-gray-400 text-xs italic">
                  Even the emptied cup holds the ghost of something beautiful — your story, dear seeker, is written in what remains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
