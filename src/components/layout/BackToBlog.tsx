import Link from 'next/link';
import React from 'react';

const BackToBlog: React.FC = () => {
  return (
    <div className='mt-8 text-center'>
      <Link
        href='/blog'
        className='inline-block rounded-full bg-gray-800 px-6 py-2 text-white hover:bg-gray-900'
      >
        Back to Blog
      </Link>
    </div>
  );
};

export default BackToBlog;
