export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-accent-500/20 bg-gradient-to-b from-primary-900/50 to-black/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full flex items-center justify-center">
                <span className="text-lg">☕</span>
              </div>
              <span className="text-lg font-serif font-bold text-accent-400">Cup of Fate</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered coffee fortune telling through the ancient art of tasseography.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-accent-300 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'Download', href: '#download' },
                { label: 'About', href: '#about' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-bold text-accent-300 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'FAQ', href: '#faq' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold text-accent-300 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: '𝕏', label: 'Twitter', href: '#' },
                { icon: '📘', label: 'Facebook', href: '#' },
                { icon: '📷', label: 'Instagram', href: '#' },
                { icon: '▶️', label: 'YouTube', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="w-10 h-10 rounded-full bg-primary-700/50 border border-accent-500/30 flex items-center justify-center text-accent-400 hover:bg-accent-500/20 hover:border-accent-500/60 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-500/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Cup of Fate. All rights reserved. ☕✨
          </p>
          <p className="mt-4 sm:mt-0">
            Made with{' '}
            <span className="text-accent-400">💛</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
