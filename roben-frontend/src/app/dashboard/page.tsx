import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function DashboardPage() {
  // Mock data - would come from API/database
  const userProgress = {
    name: "Alex Johnson",
    enrolledTracks: 3,
    completedTracks: 1,
    totalHours: 45,
    currentStreak: 7,
    certificates: 1
  };

  const currentTracks = [
    {
      id: 1,
      title: "Junior Track",
      progress: 75,
      nextLesson: "Linux Shell Basics",
      timeLeft: "3 hours remaining",
      lastAccessed: "2 days ago"
    },
    {
      id: 2,
      title: "Robotics Fundamentals", 
      progress: 40,
      nextLesson: "Servo Motor Control",
      timeLeft: "11 hours remaining",
      lastAccessed: "1 week ago"
    }
  ];

  const completedTracks = [
    {
      id: 3,
      title: "Circuit Design Basics",
      completedDate: "March 15, 2025",
      certificate: true,
      rating: 5
    }
  ];

  const upcomingDeadlines = [
    { track: "Junior Track", task: "Final Project Submission", due: "March 25, 2025" },
    { track: "Robotics Fundamentals", task: "Module 2 Quiz", due: "March 30, 2025" }
  ];

  const achievements = [
    { name: "First Track Complete", icon: "🏆", earned: true },
    { name: "Week Streak", icon: "🔥", earned: true },
    { name: "Project Master", icon: "🎯", earned: false },
    { name: "Community Helper", icon: "🤝", earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Learning</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
            Welcome back, {userProgress.name}! Continue your learning journey and track your progress.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"></div>
      </section>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{userProgress.enrolledTracks}</div>
            <div className="text-gray-600">Enrolled Tracks</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600">{userProgress.completedTracks}</div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{userProgress.totalHours}</div>
            <div className="text-gray-600">Learning Hours</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">{userProgress.currentStreak}</div>
            <div className="text-gray-600">Day Streak</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600">{userProgress.certificates}</div>
            <div className="text-gray-600">Certificates</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Continue Learning</h2>
              </div>
              <div className="p-6">
                {currentTracks.length > 0 ? (
                  <div className="space-y-6">
                    {currentTracks.map((track) => (
                      <div key={track.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold">{track.title}</h3>
                          <span className="text-sm text-gray-500">{track.lastAccessed}</span>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{track.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${track.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-600">Next: {track.nextLesson}</p>
                            <p className="text-xs text-gray-500">{track.timeLeft}</p>
                          </div>
                          <Link 
                            href={`/tracks/${track.id}/learn`}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">No tracks in progress</p>
                    <Link 
                      href="/tracks"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Browse Tracks
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Completed Tracks */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Completed Tracks</h2>
              </div>
              <div className="p-6">
                {completedTracks.length > 0 ? (
                  <div className="space-y-4">
                    {completedTracks.map((track) => (
                      <div key={track.id} className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <div>
                          <h3 className="font-semibold text-green-800">{track.title}</h3>
                          <p className="text-sm text-green-600">Completed on {track.completedDate}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex">
                            {[...Array(track.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                          </div>
                          {track.certificate && (
                            <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                              Download Certificate
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">No completed tracks yet</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Upcoming Deadlines</h3>
              </div>
              <div className="p-4">
                {upcomingDeadlines.length > 0 ? (
                  <div className="space-y-3">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                        <h4 className="font-medium text-sm">{deadline.task}</h4>
                        <p className="text-xs text-gray-600">{deadline.track}</p>
                        <p className="text-xs text-orange-600 font-medium">Due: {deadline.due}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No upcoming deadlines</p>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Achievements</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-3 rounded-lg text-center ${
                        achievement.earned 
                          ? 'bg-blue-50 border-2 border-blue-200' 
                          : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <div className="text-xs font-medium">{achievement.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </div>
              <div className="p-4 space-y-3">
                <Link 
                  href="/tracks"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Browse New Tracks
                </Link>
                <Link 
                  href="/community"
                  className="block w-full text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition-colors"
                >
                  Join Community
                </Link>
                <Link 
                  href="/certificates"
                  className="block w-full text-center border border-gray-300 text-gray-600 py-2 rounded hover:bg-gray-50 transition-colors"
                >
                  View Certificates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
