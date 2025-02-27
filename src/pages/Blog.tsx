import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import {  Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

function Blog() {
  const [activeTab, setActiveTab] = useState('Device');
  const [currentSlide, setCurrentSlide] = useState(5);
  
  const categories = [
    'All Blogs', 'Device', 'eSim', 'How-To', 'Latest Blogs', 
    'Mobile Connectivity', 'Roaming', 'SIM Cards', 'Travel'
  ];
  
  const slides = [
    {
      id: 1,
      category: 'eSim',
      title: 'Why a Global eSIM Card Is a Must-Have for Frequent Flyers?',
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Feb 5, 2025',
      author: 'Commbitz',
      url: '#',
      readTime: '5 MIN READ'
    },
    {
      id: 2,
      category: 'Travel',
      title: 'Travel Smart: Why eSIMs Are the Best Option for International Roaming',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      date: 'Jan 9, 2025',
      author: 'Commbitz',
      url: '#',
      readTime: '5 MIN READ'
    },
    {
      id: 3,
      category: 'Mobile Connectivity',
      title: 'Global Connectivity Made Easy: eSIMs vs. Traditional SIM Cards',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Jan 9, 2025',
      author: 'Commbitz',
      url: '#',
      readTime: '5 MIN READ'
    },
    {
      id: 4,
      category: 'Roaming',
      title: '5 Reasons to Choose Commbitz for International Roaming',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Dec 19, 2024',
      author: 'Commbitz',
      url: '#',
      readTime: '5 MIN READ'
    },
    {
      id: 5,
      category: 'SIM Cards',
      title: 'Reliable Internet Options for Digital Nomads',
      image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Jan 9, 2025',
      author: 'Commbitz',
      url: '#',
      readTime: '5 MIN READ'
    },
    {
      id: 6,
      category: 'How-To',
      title: 'The eSIM Revolution: How Travelers Can Ditch the Hassle of Physical SIM Cards',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      date: 'Jan 9, 2025',
      author: 'Commbitz',
      url: '#',
      readTime: '5 MIN READ'
    },
    {
      id: 7,
      category: 'Device',
      title: 'Is eSIM Safe? Security Benefits Every Traveler Should Know',
      image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Feb 5, 2025',
      author: 'Commbitz',
      url: '#',
      readTime: '5 MIN READ'
    }
  ];
  
  const devicePosts = [
    {
      id: 1,
      category: 'Device',
      title: 'Is eSIM Safe? Security Benefits Every Traveler Should Know',
      image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'Feb 5, 2025',
      author: 'Commbitz',
      url: '#',
      excerpt: 'In the digital age, staying connected while traveling is crucial. Traditional international SIM cards have long been the go-to option...'
    },
    {
      id: 2,
      category: 'Device',
      title: 'How eSIM Technology Promotes Environmental Sustainability',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      date: 'Jan 9, 2025',
      author: 'Commbitz',
      url: '#',
      excerpt: 'In today\'s fast-paced world, where connectivity is essential, the eSIM revolution is doing more than just keeping travelers connected—it\'s also making...'
    },
    {
      id: 3,
      category: 'Device',
      title: 'Unlock the Full Potential of Your Mobile Devices',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      date: 'Nov 28, 2024',
      author: 'Commbitz',
      url: '#',
      excerpt: 'Your mobile device is more than just a communication tool—it\'s a gateway to the digital world. In this category, we...'
    }
  ];
  
  const otherBlogs = [
    {
      title: 'Making Phone Calls with a Data-Only eSIM: A Step-by-Step Guide',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      url: '#'
    },
    {
      title: 'Understanding Cellular Data and How to Manage Your Usage',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      url: '#'
    },
    {
      title: 'Unlimited Data Worldwide: How Commbitz Transforms Travel',
      image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      url: '#'
    },
    {
      title: 'How to Use a Data-Only eSIM for Phone Calls',
      image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      url: '#'
    },
    {
      title: 'How to Use Commbitz eSIM for International Travel',
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      url: '#'
    },
    {
      title: 'Global Connectivity Made Easy: eSIMs vs. Traditional SIM Cards',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      url: '#'
    },
    {
      title: 'How eSIM Technology Promotes Environmental Sustainability',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      url: '#'
    },
    {
      title: '5 Reasons to Choose Commbitz for International Roaming',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      url: '#'
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  return (
    <div className="min-h-screen bg-[#212529]">
      <Navbar/>
      
      <div className="max-w-[1320px] mx-auto px-4 py-8">
        {/* Blog Slider */}
        <div className="relative mb-12 mt-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-[500px]">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="relative h-full ">
                    <a href={slide.url} className="block h-full">
                      <div className="absolute top-8 left-8 z-20">
                        <span className={`inline-block px-3 py-1 rounded-md text-md font-semibold text-white bg-black before:content-[''] before:w-3 before:h-3 before:bg-[#03fe9d] before:rounded-full before:inline-block before:mr-2`}>
                          {slide.category}
                        </span>
                      </div>
                      <img 
                        src={slide.image} 
                        className="w-full h-full object-cover rounded-lg" 
                        alt={slide.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <h2 className="text-white text-3xl font-bold mb-4 hover:underline line-clamp-2">
                          {slide.title}
                        </h2>
                        <div className="flex justify-between items-center">
                          <p className="text-white text-sm">
                            {slide.date} - {slide.author}
                            <span className="ml-2 inline-block">
                              <img 
                                src="https://secure.gravatar.com/avatar/0ce9c0a945d765d567b6e432425522b0?s=35&r=g" 
                                alt="Author Avatar" 
                                className="rounded-full w-8 h-8 inline-block border-2 border-white" 
                              />
                            </span>
                          </p>
                          <a href={slide.url} className=" hover:bg-white/30 text-[#03fe9d] px-4 py-1 rounded text-sm">
                            {slide.readTime}
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            
            {/* Dots */}
            <div className="absolute mt-4 left-0 right-0 flex justify-center gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="mb-8">
          <div>
            <div className="mb-1">
              <ul className="flex flex-wrap gap-2 justify-evenly">
                {categories.map((category) => (
                  <li key={category} role="presentation">
                    <button 
                      className={`px-4 py-2 rounded-t-md transition-colors ${
                        activeTab === category 
                          ? 'bg-[#03fe9d] text-black' 
                          : ' text-white hover:bg-[#03fe9d] hover:text-black'
                      }`}
                      onClick={() => setActiveTab(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black rounded-lg text-white">
              {/* Posts Column */}
              <div className="lg:col-span-8 p-4">
                <div>
                  <div>
                    {devicePosts.map((post) => (
                      <div key={post.id} className="mb-6  rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl ">
                        <a href={post.url} className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 px-4 py-4">
                            <img 
                              src={post.image} 
                              className="w-full h-full object-cover rounded " 
                              alt={post.title} 
                            />
                          </div>
                          <div className="p-2 md:w-2/3">
                            <h2 className="text-xl font-bold mb-2  line-clamp-2">
                              {post.title}
                            </h2>
                            <p className="text-white mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <p className="text-sm text-white mt-auto">
                              {post.date} - {post.author}
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar Column */}
              <div className="lg:col-span-4">
                <div>
                  {/* Other Blogs */}
                  <div className="mb-8  rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4  pb-2">Other Blogs</h3>
                    {otherBlogs.map((blog, index) => (
                      <div key={index} className="mb-4">
                        <a href={blog.url} className="flex items-center group">
                          <img 
                            src={blog.image} 
                            className="w-20 h-16 object-cover rounded mr-3 transition-transform group-hover:scale-105" 
                            alt={blog.title} 
                          />
                          <span className="text-sm font-medium ">{blog.title}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                  
                  {/* Share Blog */}
                  <div className="mb-8  rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4  pb-2">Don't Forget to Share It</h3>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-transform hover:-translate-y-1">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-transform hover:-translate-y-1">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-transform hover:-translate-y-1">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-transform hover:-translate-y-1">
                        <Share2 size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;