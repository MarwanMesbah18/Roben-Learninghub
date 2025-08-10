import Link from "next/link";
import Navigation from "@/components/Navigation";

// This would normally come from an API or database
async function getTrack(id: string) {
  const tracks = {
    "1": {
      id: 1,
      title: "Junior Track",
      description: "Perfect for beginners starting their STEM journey with fundamental concepts in programming, version control, and command line usage.",
      longDescription: "This comprehensive track is designed for complete beginners who want to build a solid foundation in essential programming and development skills. You'll learn Python programming from scratch, master Git for version control, and become comfortable with the Linux shell environment.",
      topics: [
        {
          name: "Python Fundamentals",
          duration: "4 hours",
          lessons: ["Variables & Data Types", "Control Structures", "Functions", "File Handling"]
        },
        {
          name: "Git Version Control",
          duration: "3 hours", 
          lessons: ["Git Basics", "Branching & Merging", "Remote Repositories", "Collaboration"]
        },
        {
          name: "Linux Shell",
          duration: "5 hours",
          lessons: ["Command Line Basics", "File System Navigation", "Text Processing", "Shell Scripting"]
        }
      ],
      category: "programming",
      difficulty: "Beginner",
      duration: "12 hours",
      rating: 4.8,
      enrollments: 1200,
      price: "$49",
      instructor: {
        name: "Dr. Sarah Chen",
        bio: "Computer Science Professor with 10+ years of teaching experience",
        avatar: "/instructor-avatar.jpg"
      },
      prerequisites: ["Basic computer literacy", "No programming experience required"],
      learningObjectives: [
        "Write basic Python programs to solve real-world problems",
        "Use Git for version control and collaboration",
        "Navigate and work efficiently in Linux command line",
        "Build a portfolio project demonstrating all learned skills"
      ],
      finalProject: "Create a personal expense tracker application using Python, managed with Git, and deployed on a Linux server.",
      reviews: [
        { name: "Alex M.", rating: 5, comment: "Great introduction to programming! The progression is perfect." },
        { name: "Maria S.", rating: 5, comment: "Loved the hands-on approach. The final project was challenging but rewarding." },
        { name: "John D.", rating: 4, comment: "Excellent content, though I wish there were more practice exercises." }
      ]
    },
    "2": {
      id: 2,
      title: "Robotics Fundamentals",
      description: "Learn the basics of robotics and automation systems using Arduino and common sensors.",
      longDescription: "Dive into the exciting world of robotics! This track covers essential concepts in robotics, from basic Arduino programming to sensor integration and motor control.",
      topics: [
        {
          name: "Arduino Programming",
          duration: "6 hours",
          lessons: ["Arduino IDE Setup", "Digital I/O", "Analog Sensors", "Serial Communication"]
        },
        {
          name: "Sensors & Actuators",
          duration: "8 hours",
          lessons: ["Ultrasonic Sensors", "Temperature Sensors", "Servo Motors", "DC Motors"]
        },
        {
          name: "Robot Assembly",
          duration: "4 hours",
          lessons: ["Chassis Design", "Wiring", "Testing", "Troubleshooting"]
        }
      ],
      category: "robotics",
      difficulty: "Intermediate",
      duration: "18 hours",
      rating: 4.9,
      enrollments: 850,
      price: "$79",
      instructor: {
        name: "Prof. Mike Rodriguez",
        bio: "Robotics Engineer with industry and academic experience",
        avatar: "/instructor-avatar-2.jpg"
      },
      prerequisites: ["Basic electronics knowledge", "Some programming experience helpful"],
      learningObjectives: [
        "Program Arduino microcontrollers",
        "Integrate various sensors and actuators",
        "Build a functioning mobile robot",
        "Understand robotics system design principles"
      ],
      finalProject: "Build an autonomous obstacle-avoiding robot using ultrasonic sensors and motor control.",
      reviews: [
        { name: "Emma L.", rating: 5, comment: "Amazing hands-on experience! Built my first robot." },
        { name: "David K.", rating: 5, comment: "Clear explanations and great project guidance." }
      ]
    }
  };

  return tracks[id as keyof typeof tracks] || null;
}

export default async function TrackDetailPage({ params }: { params: { id: string } }) {
  const track = await getTrack(params.id);

  if (!track) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Track Not Found</h1>
          <p className="text-gray-600 mb-8">The track you're looking for doesn't exist.</p>
          <Link href="/tracks" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Browse All Tracks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Track Details */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className={`px-3 py-1 text-sm rounded-full ${
                  track.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  track.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {track.difficulty}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{track.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{track.description}</p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <span className="text-yellow-500">⭐</span>
                  <span className="ml-1 font-semibold">{track.rating}</span>
                  <span className="ml-1 text-gray-500">({track.enrollments} students)</span>
                </div>
                <div className="text-gray-600">
                  ⏱️ {track.duration}
                </div>
                <div className="text-gray-600">
                  📚 {track.topics.length} Topics
                </div>
              </div>

              {/* Video Player Placeholder */}
              <div className="bg-gray-800 rounded-lg aspect-video mb-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-lg">Track Preview Video</p>
                  <p className="text-sm text-gray-300">Get a preview of what you'll learn</p>
                </div>
              </div>
            </div>

            {/* Right Column - Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <div className="text-3xl font-bold text-blue-600 mb-4">{track.price}</div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                  Enroll Now
                </button>
                
                <div className="text-center text-sm text-gray-500 mb-6">
                  30-day money-back guarantee
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{track.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Topics:</span>
                    <span className="font-semibold">{track.topics.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold">{track.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enrolled:</span>
                    <span className="font-semibold">{track.enrollments}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">This track includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✅ Lifetime access</li>
                    <li>✅ Mobile and desktop access</li>
                    <li>✅ Certificate of completion</li>
                    <li>✅ Community access</li>
                    <li>✅ Final project review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* About This Track */}
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Track</h2>
                <p className="text-gray-600 leading-relaxed">{track.longDescription}</p>
              </div>

              {/* Learning Objectives */}
              <div>
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <ul className="space-y-2">
                  {track.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      <span className="text-gray-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Track Curriculum</h2>
                <div className="space-y-4">
                  {track.topics.map((topic, index) => (
                    <div key={index} className="bg-white rounded-lg border">
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">{topic.name}</h3>
                          <span className="text-sm text-gray-500">{topic.duration}</span>
                        </div>
                        <div className="mt-4">
                          <ul className="text-sm text-gray-600 space-y-1">
                            {topic.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center">
                                <span className="text-blue-500 mr-2">📹</span>
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Project */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Final Project</h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700">{track.finalProject}</p>
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                <ul className="space-y-2">
                  {track.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">📋</span>
                      <span className="text-gray-600">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Instructor */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Your Instructor</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{track.instructor.name}</h4>
                    <p className="text-sm text-gray-600">{track.instructor.bio}</p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Student Reviews</h3>
                <div className="space-y-4">
                  {track.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold text-sm">{review.name}</span>
                        <div className="ml-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500">⭐</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
