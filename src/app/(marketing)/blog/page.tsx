import Link from 'next/link';
import React from 'react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Getting Started with TwitchTitle',
      description:
        'Learn how to set up and use TwitchTitle to manage your stream titles efficiently.',
      link: '/blog/getting-started',
      color: 'bg-blue-600',
    },
    {
      title: 'How to Add Stream Avatars',
      description:
        'Make your Twitch stream interactive with adorable stream avatars.',
      link: '/blog/adding-stream-avatars',
      color: 'bg-green-600',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg'>
        <h1 className='mb-6 text-center text-4xl font-bold text-gray-800'>
          Blog
        </h1>
        <p className='text-center text-lg leading-relaxed text-gray-600'>
          Welcome to our blog! Here you'll find the latest updates, stories, and
          articles. Stay informed and inspired with our curated content.
        </p>
        <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`rounded-lg ${post.color} p-6 text-white shadow-lg hover:shadow-xl`}
            >
              <h2 className='mb-2 text-2xl font-bold'>{post.title}</h2>
              <p className='mb-4 text-sm'>{post.description}</p>
              <Link
                href={post.link}
                className='rounded-full bg-white px-4 py-2 text-sm text-gray-800 hover:bg-gray-200'
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
