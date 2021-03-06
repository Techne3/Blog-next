import Head from 'next/head';

const post = [
  { title: 'react Testing', excerpt: 'react Testing' },
  { title: 'react with Tailwind', excerpt: 'Learn react with Tailwind' },
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8 '>
      <Head>
        <title>CMS Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {post.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'></div>
        </div>
      </div>
    </div>
  );
}
