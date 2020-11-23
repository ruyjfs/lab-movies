import Head from 'next/head';

export default function AppLayoutHead({ title, subtitle, description }) {
  return (
    <Head>
      <title>
        {subtitle} | {title}
      </title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          title
        )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
