import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About RobEn Learning Hub</h1>
          <p className="text-xl">Empowering the next generation of STEM innovators</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              RobEn Learning Hub is dedicated to making STEM education accessible, practical, and engaging. 
              We believe that hands-on learning combined with a supportive community creates the best 
              environment for mastering complex technical skills.
            </p>

            <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Track-Based Learning</h3>
                <p className="text-gray-600">
                  Our structured tracks guide you through related topics in a logical progression, 
                  ensuring you build solid foundations before advancing to complex concepts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Real Projects</h3>
                <p className="text-gray-600">
                  Every track culminates in a real-world project that demonstrates your skills 
                  and gives you something tangible to show employers or collaborators.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                <p className="text-gray-600">
                  Learning is better together. Each track can include community features 
                  where learners help each other and share their projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Industry Relevant</h3>
                <p className="text-gray-600">
                  Our curriculum is designed with input from industry professionals to ensure 
                  you're learning the skills that matter in today's tech landscape.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Our Focus Areas</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="font-semibold">Robotics</h4>
                <p className="text-sm text-gray-600">Build intelligent machines and automation systems</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="font-semibold">Programming</h4>
                <p className="text-sm text-gray-600">Master software development and coding skills</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="font-semibold">Engineering</h4>
                <p className="text-sm text-gray-600">Design and create mechanical solutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔌</div>
                <h4 className="font-semibold">Electronics</h4>
                <p className="text-sm text-gray-600">Understand circuits and electronic systems</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Learning Philosophy</h2>
            <p className="text-gray-600 mb-6">
              We believe that the best way to learn technical skills is by doing. That's why every track 
              includes hands-on exercises, real projects, and practical applications. We also believe 
              that learning is a social activity - our community features help you connect with peers, 
              get help when you're stuck, and celebrate your achievements.
            </p>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of learners who are building real skills and creating amazing projects.
              </p>
              <div className="space-x-4">
                <a 
                  href="/tracks"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Browse Tracks
                </a>
                <a 
                  href="/dashboard"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
