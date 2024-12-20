import React from 'react';

import BackToBlog from '@/src/components/layout/BackToBlog';

const AddingStreamAvatars: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <article className='mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg'>
        <header className='mb-6'>
          <h1 className='mb-2 text-4xl font-bold text-gray-800'>
            How to Add Stream Avatars to Your Twitch Stream
          </h1>
          <p className='text-sm text-gray-500'>
            Published on December 20, 2024
          </p>
        </header>
        <section className='leading-relaxed text-gray-700'>
          <p className='mb-4'>
            Ever wondered how to add those adorable little characters that roam
            at the bottom of some Twitch streams? These "Stream Avatars" add a
            playful and interactive element to your stream, making it more
            engaging for your viewers. Here's how you can set them up!
          </p>
          <h2 className='mb-2 mt-6 text-2xl font-semibold text-gray-800'>
            Step 1: Download Stream Avatars
          </h2>
          <p className='mb-4'>
            Start by downloading the{' '}
            <a
              href='https://www.streamavatars.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              Stream Avatars
            </a>{' '}
            application. You can find it on their website or on Steam. Once
            downloaded, install the application on your computer.
          </p>
          <h2 className='mb-2 mt-6 text-2xl font-semibold text-gray-800'>
            Step 2: Set Up and Customize
          </h2>
          <p className='mb-4'>
            Open the Stream Avatars app and link it to your Twitch account. From
            there, you can customize the avatars, upload new sprites, and
            configure how viewers interact with them. Make sure to enable chat
            commands to let viewers control their avatars.
          </p>
          <h2 className='mb-2 mt-6 text-2xl font-semibold text-gray-800'>
            Step 3: Integrate with OBS or Streamlabs
          </h2>
          <p className='mb-4'>
            To display the avatars on your stream, add Stream Avatars as a
            browser source or window capture in your streaming software (OBS
            Studio, Streamlabs, etc.). Position the overlay wherever you want
            the avatars to appear.
          </p>
          <h2 className='mb-2 mt-6 text-2xl font-semibold text-gray-800'>
            Step 4: Engage Your Viewers
          </h2>
          <p className='mb-4'>
            Once everything is set up, your viewers will automatically get
            avatars when they join the chat. Encourage them to use commands to
            customize their avatars, dance, or even battle with others!
          </p>
        </section>
        <footer className='mt-10 border-t pt-6 text-sm text-gray-500'>
          <p>
            Adding Stream Avatars is a fantastic way to make your Twitch stream
            more interactive and fun. If you have any questions or need help,
            feel free to reach out to us on{' '}
            <a
              href='https://github.com/adnjoo/twitchtitle'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              GitHub
            </a>
            .
          </p>
          <BackToBlog />
        </footer>
      </article>
    </div>
  );
};

export default AddingStreamAvatars;
