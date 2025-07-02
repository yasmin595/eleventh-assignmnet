import React from 'react';
import { useParams, Link } from 'react-router';

const blogs = [
  {
    id: '1',
    title: '7 Effective Ways to Find Your Lost Items',
    description: 'Losing something can be stressful, but do not worry. Here are 7 proven methods to help you recover your lost belongings quickly and efficiently.',
    content: `Losing personal items is a frustrating experience. However, many people have recovered their belongings by following specific techniques. 
Here are 7 effective tips to try:
1. Stay calm and retrace your steps.
2. Use online lost & found platforms.
3. Ask nearby people or shopkeepers.
4. Check with local authorities.
5. Create a post with clear details and images.
6. Share it on social media.
7. Keep checking regularly.

These methods have helped thousands. Be consistent and hopeful!`,
    date: 'June 30, 2025',
  },
  {
    id: '2',
    title: 'What to Do When You Find a Lost Item',
    description: 'Found a lost item in your area? Learn the legal and ethical steps you should follow to report and return it to its rightful owner.',
    content: `If you find someone’s lost item:
1. Don’t keep it — that’s illegal in many places.
2. Check for identification.
3. Take it to the local police or lost & found desk.
4. Post it on platforms like this site with full details.
5. Wait patiently for someone to claim.

Doing the right thing builds trust and community safety.`,
    date: 'June 28, 2025',
  },
  {
    id: '3',
    title: 'Lost & Found: Real Stories from Our Users',
    description: 'Read inspiring success stories from real users who recovered their items through our platform. Sometimes miracles do happen!',
    content: `1. Sarah lost her backpack in the market and got it back within 24 hours through our platform.
2. Ahmed reported a found phone and the owner claimed it in just 2 hours.
3. Dozens of users share how our system helped them recover important documents, pets, and even jewelry.

These stories inspire hope for all who are searching.`,
    date: 'June 25, 2025',
  }
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="w-11/12 mx-auto mt-10 text-center text-red-500">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-3xl mx-auto my-12">
      <h1 className="text-3xl font-bold text-green-800 mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Published on {blog.date}</p>
      <p className="text-gray-700 whitespace-pre-line leading-7 mb-10">{blog.content}</p>
      <Link
        to="/blog"
        className="inline-block px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
      >
        ← Back to All Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
