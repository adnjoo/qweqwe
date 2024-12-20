import BackToBlog from "@/src/components/layout/BackToBlog";

const GettingStarted: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <article className='mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg'>
        <header className='mb-6'>
          <h1 className='mb-2 text-4xl font-bold text-gray-800'>
            Getting Started with TwitchTitle
          </h1>
          <p className='text-sm text-gray-500'>
            Published on December 18, 2024
          </p>
        </header>
        <section className='leading-relaxed text-gray-700'>
          <p className='mb-4'>
            Welcome to TwitchTitle! This guide will help you get started with
            using our tool to manage and update your Twitch stream titles
            efficiently.
          </p>
          <h2 className='mb-2 mt-6 text-2xl font-semibold text-gray-800'>
            Step 1: Connect Your Twitch Account
          </h2>
          <p className='mb-4'>
            The first step is to connect your Twitch account. Simply click the
            "Connect with Twitch" button on the homepage and authorize
            TwitchTitle to manage your stream details.
          </p>
          <h2 className='mb-2 mt-6 text-2xl font-semibold text-gray-800'>
            Step 2: Customize Your Stream Title
          </h2>
          <p className='mb-4'>
            Once connected, you can easily update your stream title and tags.
            Use the interface to input a new title and see a preview of your
            changes.
          </p>
          <h2 className='mb-2 mt-6 text-2xl font-semibold text-gray-800'>
            Step 3: Explore Advanced Features
          </h2>
          <p className='mb-4'>
            Dive into advanced features like viewing your title history, adding
            tags, and more. Our goal is to make managing your Twitch stream
            effortless.
          </p>
        </section>
        <footer className='mt-10 border-t pt-6 text-sm text-gray-500'>
          <p>
            Thank you for choosing TwitchTitle! If you have any questions, feel
            free to reach out to us on{' '}
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

export default GettingStarted;
