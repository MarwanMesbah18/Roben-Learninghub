import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  const featuredTracks = [
    {
      id: 1,
      title: "Junior Track",
      description: "Perfect for beginners starting their STEM journey",
      topics: ["Python", "Git", "Linux Shell"],
      difficulty: "Beginner",
      duration: "12 hours",
      rating: 4.8,
      enrollments: 1200
    },
    {
      id: 2,
      title: "Robotics Fundamentals",
      description: "Learn the basics of robotics and automation",
      topics: ["Arduino", "Sensors", "Motors"],
      difficulty: "Intermediate",
      duration: "18 hours",
      rating: 4.9,
      enrollments: 850
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Become a complete web developer",
      topics: ["React", "Node.js", "Database"],
      difficulty: "Advanced",
      duration: "35 hours",
      rating: 4.7,
      enrollments: 650
    }
  ];

  const categories = [
    { name: "Robotics", icon: "🤖", trackCount: 15 },
    { name: "Programming", icon: "💻", trackCount: 24 },
    { name: "Engineering", icon: "⚙️", trackCount: 18 },
    { name: "Electronics", icon: "🔌", trackCount: 12 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">RobEn</span> Learning Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
            Master STEM skills through hands-on learning. Join thousands of learners 
            building real projects in Robotics, Engineering, Programming, and Electronics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/tracks"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-w-[200px]"
            >
              Browse Tracks
            </Link>
            <Link 
              href="/dashboard"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 min-w-[200px]"
            >
              Start Learning
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Featured Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Tracks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTracks.map((track) => (
              <div key={track.id} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-4 py-2 text-sm rounded-xl font-medium ${
                    track.difficulty === 'Beginner' ? 'bg-emerald-100 text-emerald-700' :
                    track.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {track.difficulty}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{track.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{track.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-3">Topics:</div>
                  <div className="flex flex-wrap gap-2">
                    {track.topics.map((topic, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1.5 text-sm rounded-lg font-medium border border-blue-100">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-medium">{track.duration}</span>
                  <Link 
                    href={`/tracks/${track.id}`}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    View Track
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Explore Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href={`/tracks?category=${category.name.toLowerCase()}`}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:-translate-y-2 group shadow-lg hover:shadow-2xl"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                <p className="text-gray-600 font-medium">{category.trackCount} tracks available</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlight */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Join Our Learning Community</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100">
            Connect with fellow learners, share projects, and get help from our supportive community.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">5,000+ Active Learners</h3>
              <p className="text-blue-100">Growing community of STEM enthusiasts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">1,200+ Projects Shared</h3>
              <p className="text-blue-100">Real projects built by students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">95% Completion Rate</h3>
              <p className="text-blue-100">Students love our hands-on approach</p>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"></div>
      </section>
    </div>
  );
}
