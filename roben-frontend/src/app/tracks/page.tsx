"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function TracksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const tracks = [
    {
      id: 1,
      title: "Junior Track",
      description: "Perfect for beginners starting their STEM journey with fundamental concepts",
      topics: ["Python", "Git", "Linux Shell"],
      category: "programming",
      difficulty: "Beginner",
      duration: "12 hours",
      rating: 4.8,
      enrollments: 1200,
      price: "$49"
    },
    {
      id: 2,
      title: "Robotics Fundamentals",
      description: "Learn the basics of robotics and automation systems",
      topics: ["Arduino", "Sensors", "Motors"],
      category: "robotics",
      difficulty: "Intermediate",
      duration: "18 hours",
      rating: 4.9,
      enrollments: 850,
      price: "$79"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Become a complete web developer with modern technologies",
      topics: ["React", "Node.js", "Database"],
      category: "programming",
      difficulty: "Advanced",
      duration: "35 hours",
      rating: 4.7,
      enrollments: 650,
      price: "$129"
    },
    {
      id: 4,
      title: "Circuit Design Basics",
      description: "Understanding electronic circuits and component design",
      topics: ["Electronics", "PCB Design", "Simulation"],
      category: "electronics",
      difficulty: "Beginner",
      duration: "15 hours",
      rating: 4.6,
      enrollments: 420,
      price: "$69"
    },
    {
      id: 5,
      title: "Mechanical Engineering Intro",
      description: "Introduction to mechanical systems and CAD design",
      topics: ["CAD", "3D Modeling", "Manufacturing"],
      category: "engineering",
      difficulty: "Intermediate",
      duration: "22 hours",
      rating: 4.8,
      enrollments: 380,
      price: "$89"
    },
    {
      id: 6,
      title: "IoT Development Track",
      description: "Build connected devices and smart systems",
      topics: ["IoT", "Sensors", "Cloud Integration"],
      category: "robotics",
      difficulty: "Advanced",
      duration: "28 hours",
      rating: 4.9,
      enrollments: 290,
      price: "$149"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "robotics", label: "Robotics" },
    { value: "programming", label: "Programming" },
    { value: "engineering", label: "Engineering" },
    { value: "electronics", label: "Electronics" }
  ];

  const difficulties = [
    { value: "all", label: "All Levels" },
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" }
  ];

  const filteredTracks = tracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         track.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         track.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || track.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || track.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Learning Tracks</h1>
          <p className="text-xl">Discover structured learning paths in STEM fields</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Search & Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Tracks
                </label>
                <input
                  type="text"
                  placeholder="Search by title, description, or topics..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedDifficulty("all");
                }}
                className="w-full text-blue-600 hover:text-blue-800 text-sm"
              >
                Clear all filters
              </button>
            </div>
          </div>

          {/* Tracks Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {filteredTracks.length} Track{filteredTracks.length !== 1 ? 's' : ''} Found
              </h2>
              <select className="px-3 py-2 border border-gray-300 rounded-lg">
                <option>Sort by: Most Popular</option>
                <option>Sort by: Newest</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Price</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredTracks.map((track) => (
                <div key={track.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      track.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      track.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {track.difficulty}
                    </span>
                    <div className="text-right text-sm text-gray-500">
                      <div>⭐ {track.rating}</div>
                      <div>{track.enrollments} enrolled</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                  <p className="text-gray-600 mb-4">{track.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {track.topics.map((topic, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <div>{track.duration}</div>
                      <div className="font-semibold text-lg text-blue-600">{track.price}</div>
                    </div>
                    <Link 
                      href={`/tracks/${track.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      View Track
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredTracks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No tracks found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedDifficulty("all");
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Clear filters to see all tracks
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
