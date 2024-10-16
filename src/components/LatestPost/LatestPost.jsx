import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const posts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/4087270/pexels-photo-4087270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Feb 22, 2024',
    category: 'Technology',
    title: 'Technology Hack That You Don\'t Know',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6892716/pexels-photo-6892716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Feb 22, 2024',
    category: 'Watches',
    title: 'Best Digital Watches To Buy In This Year',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6192117/pexels-photo-6192117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Feb 22, 2024',
    category: 'Gadgets',
    title: 'How To Use Gimbal To Take Video',
  },
];

const LatestPosts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">{post.date} - {post.category}</p>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to={'/blog'} className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors">
          READ BLOGS
        </Link>
      </div>
    </div>
  );
};

export default LatestPosts;