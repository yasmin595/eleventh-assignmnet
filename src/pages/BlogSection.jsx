import React from 'react';
import { Link } from 'react-router';

const blogs = [
  {
    id: '1',
    title: '7 Effective Ways to Find Your Lost Items',
    description: 'Losing something can be stressful, but don’t worry. Here are 7 proven methods to help you recover your lost belongings quickly and efficiently.',
    date: 'June 30, 2025',
  },
  {
    id: '2',
    title: 'What to Do When You Find a Lost Item',
    description: 'Found a lost item in your area? Learn the legal and ethical steps you should follow to report and return it to its rightful owner.',
    date: 'June 28, 2025',
  },
  {
    id: '3',
    title: 'Lost & Found: Real Stories from Our Users',
    description: 'Read inspiring success stories from real users who recovered their items through our platform. Sometimes miracles do happen!',
    date: 'June 25, 2025',
  }
];

const BlogSection = () => {
  return (
    <div className="my-16 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
         Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
            <p className="text-gray-600 text-sm mb-4">
              {blog.description.slice(0, 100)}...
            </p>
            <Link
              to={`/blogs/${blog.id}`}
              className="text-green-700 hover:underline text-sm font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
