import Navigation from "@/components/Navigation";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
            We'd love to hear from you. Get in touch and let's build something amazing together.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">General Questions</h3>
                  <p className="text-gray-600">
                    Have questions about our tracks or platform? We're here to help!
                  </p>
                  <p className="text-blue-600 font-medium">hello@robenlearning.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Support</h3>
                  <p className="text-gray-600">
                    Having trouble with the platform or need help with your learning?
                  </p>
                  <p className="text-blue-600 font-medium">support@robenlearning.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Partnership Opportunities</h3>
                  <p className="text-gray-600">
                    Interested in becoming an instructor or partnering with us?
                  </p>
                  <p className="text-blue-600 font-medium">partnerships@robenlearning.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Community</h3>
                  <p className="text-gray-600 mb-3">
                    Join our community for discussions, help, and project sharing:
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-blue-600 hover:text-blue-800">📱 Discord Community</a>
                    <a href="#" className="block text-blue-600 hover:text-blue-800">🐦 Twitter Updates</a>
                    <a href="#" className="block text-blue-600 hover:text-blue-800">💼 LinkedIn Network</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payment</option>
                    <option value="content">Content & Curriculum</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">How do tracks work?</h3>
                <p className="text-gray-600 mb-6">
                  Tracks are structured learning paths that take you through related topics step by step. 
                  Each track contains multiple topics, and each topic has lessons, exercises, and assessments.
                </p>

                <h3 className="text-lg font-semibold mb-3">Can I learn at my own pace?</h3>
                <p className="text-gray-600 mb-6">
                  Absolutely! All tracks are self-paced, so you can learn when it's convenient for you. 
                  You have lifetime access to enrolled tracks.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Do I get a certificate?</h3>
                <p className="text-gray-600 mb-6">
                  Yes! You'll receive a certificate of completion for each track you finish, 
                  including your final project work.
                </p>

                <h3 className="text-lg font-semibold mb-3">What if I need help?</h3>
                <p className="text-gray-600 mb-6">
                  Each track can include community features where you can ask questions and get help 
                  from instructors and fellow learners. You can also contact our support team directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
