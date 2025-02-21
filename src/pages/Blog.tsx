
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    title: "Understanding eSIM Technology",
    excerpt: "Learn how eSIM technology is revolutionizing the way we connect globally...",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Technology",
    image: "placeholder.svg"
  },
  {
    title: "Top Travel Destinations 2024",
    excerpt: "Discover the most popular travel destinations and how to stay connected...",
    author: "Mike Peters",
    date: "March 12, 2024",
    category: "Travel",
    image: "placeholder.svg"
  },
  {
    title: "Digital Nomad Essentials",
    excerpt: "Essential connectivity tips and tricks for the modern digital nomad...",
    author: "Alex Rivers",
    date: "March 10, 2024",
    category: "Lifestyle",
    image: "placeholder.svg"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-secondary mb-6">Our Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, travel tips, and insights about global connectivity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-primary font-semibold">{post.category}</span>
                  <h2 className="text-xl font-bold text-secondary mt-2 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
