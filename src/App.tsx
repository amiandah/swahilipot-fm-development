import React, { useState } from 'react';
import { Radio, Play, Pause, Volume2, Calendar, Newspaper, Music2, Instagram, Twitter, Facebook, SkipBack, SkipForward, Heart } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Player Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#111]/95 backdrop-blur-sm border-t border-gray-800 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=150&q=80"
                alt="Current Track"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">Summer Vibes</h3>
                <p className="text-gray-400">DJ Mike Show</p>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="flex items-center justify-center gap-6">
                <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <div 
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </div>
                <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
              <div className="mt-2">
                <div className="h-1 bg-gray-800 rounded-full">
                  <div className="h-1 bg-blue-600 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-1 justify-end">
              <Heart className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-gray-400" />
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-24 accent-blue-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-black/95 fixed w-full z-40 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold">NRG RADIO</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="hover:text-blue-500 transition font-medium">HOME</a>
              <a href="#" className="hover:text-blue-500 transition font-medium">SHOWS</a>
              <a href="#" className="hover:text-blue-500 transition font-medium">PRESENTERS</a>
              <a href="#" className="hover:text-blue-500 transition font-medium">PODCASTS</a>
              <a href="#" className="hover:text-blue-500 transition font-medium">EVENTS</a>
            </div>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 hover:text-blue-500 cursor-pointer transition" />
              <Twitter className="h-5 w-5 hover:text-blue-500 cursor-pointer transition" />
              <Instagram className="h-5 w-5 hover:text-blue-500 cursor-pointer transition" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20">
        <div className="relative h-[70vh]">
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=80" 
            alt="Radio Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="container mx-auto">
                <div className="max-w-2xl">
                  <h2 className="text-blue-500 text-xl font-bold mb-2">FEATURED SHOW</h2>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">The Morning Drive with Alex</h1>
                  <p className="text-gray-300 text-lg mb-6">Wake up to the hottest hits and the freshest news every weekday from 6AM to 10AM</p>
                  <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-bold">
                    LISTEN NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shows Grid */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Calendar className="text-blue-600" />
            TODAY'S LINEUP
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                time: "06:00 - 10:00",
                show: "Morning Drive",
                dj: "Alex Stone",
                image: "https://images.unsplash.com/photo-1605722243979-fe0be8158232?auto=format&fit=crop&w=400&q=80"
              },
              {
                time: "10:00 - 14:00",
                show: "Mid Morning Mix",
                dj: "Sarah James",
                image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=400&q=80"
              },
              {
                time: "14:00 - 18:00",
                show: "Drive Time",
                dj: "Mike Johnson",
                image: "https://images.unsplash.com/photo-1605722244437-635628568d7f?auto=format&fit=crop&w=400&q=80"
              },
              {
                time: "18:00 - 22:00",
                show: "Night Vibes",
                dj: "Lisa Chen",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80"
              }
            ].map((show, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={show.image}
                    alt={show.show}
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <p className="text-blue-500 font-bold">{show.time}</p>
                    <h3 className="text-xl font-bold">{show.show}</h3>
                    <p className="text-gray-300">{show.dj}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-16 bg-[#111]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Newspaper className="text-blue-600" />
            LATEST NEWS & EVENTS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Summer Music Festival 2024",
                date: "March 15, 2024",
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
                excerpt: "Join us for the biggest music festival of the year featuring top artists from around the world."
              },
              {
                title: "New Weekend Show Launch",
                date: "March 14, 2024",
                image: "https://images.unsplash.com/photo-1516223725307-6f76b9182f7c?auto=format&fit=crop&w=800&q=80",
                excerpt: "Introducing our new weekend show 'Electronic Beats' with DJ Mark starting this Saturday."
              },
              {
                title: "Artist Interview: The Weeknd",
                date: "March 13, 2024",
                image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=800&q=80",
                excerpt: "Exclusive interview with The Weeknd about his new album and upcoming world tour."
              }
            ].map((news, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full aspect-video object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <p className="text-blue-500 font-bold mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <p className="text-gray-300 text-sm">{news.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Radio className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold">NRG RADIO</span>
              </div>
              <p className="text-gray-400">Your #1 Hit Music Station</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">QUICK LINKS</h3>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-white cursor-pointer">About Us</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">Our Shows</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">Events</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">Contact</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">CONNECT</h3>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-white cursor-pointer">Facebook</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">Twitter</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">Instagram</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">YouTube</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">DOWNLOAD OUR APP</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Listen to NRG Radio on the go!</p>
                <div className="flex gap-2 mt-4">
                  <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition">
                    App Store
                  </button>
                  <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition">
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 NRG Radio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;