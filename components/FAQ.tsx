'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How accurate are the readings?',
      answer:
        'Cup of Fate combines AI pattern recognition with tasseographic tradition to provide meaningful interpretations. The accuracy depends on the quality of your photo and the complexity of the patterns in your grounds. Remember, tasseography is meant for entertainment and personal reflection, not literal prediction.',
    },
    {
      question: 'Do I need actual coffee grounds?',
      answer:
        'Yes! The experience is designed to work with real coffee grounds in a cup. The AI analyzes the actual patterns formed by the grounds, so you\'ll need to brew a cup of coffee (or tea with leaves) to use the app.',
    },
    {
      question: 'What type of coffee works best?',
      answer:
        'Any finely ground coffee works well - espresso, Turkish coffee, or finely ground drip coffee all create clear patterns. The darker the grounds, the easier they are for the AI to analyze, so darker roasts typically produce better readings.',
    },
    {
      question: 'Can I save my readings?',
      answer:
        'Yes! Each reading is automatically saved in your app history. You can revisit past readings, share them with friends, or export them for your records.',
    },
    {
      question: 'Is my data private?',
      answer:
        'Your privacy is important to us. Photos are processed securely and can optionally be deleted after analysis. We don\'t store personal data or share information with third parties.',
    },
    {
      question: 'When will Android be available?',
      answer:
        'We\'re working hard on the Android version and plan to launch it soon. Sign up on our download page to get notified the moment it\'s available.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Cup of Fate will be available as a free app with optional premium features. TestFlight access is currently free for all beta testers.',
    },
    {
      question: 'Can I use the app offline?',
      answer:
        'The app requires an internet connection to analyze patterns with our AI. The analysis happens in the cloud to ensure accurate and sophisticated readings.',
    },
  ];

  return (
    <section id="faq" className="relative py-20 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 glow-text">
            <span className="text-accent-400">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Find answers to common questions about Cup of Fate
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-800/50 to-primary-900/50 border border-accent-500/30 rounded-xl overflow-hidden hover:border-accent-500/60 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-primary-700/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-serif font-bold text-accent-300 text-left">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-accent-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-accent-500/20 pt-4">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-accent-600/20 to-primary-700/20 border border-accent-500/30 rounded-2xl">
          <h3 className="text-xl font-serif font-bold text-accent-300 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-4">
            Get in touch with our team
          </p>
          <a
            href="mailto:hello@cupoffate.com"
            className="inline-block px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-bold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
