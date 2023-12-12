import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>the landing pages</title>
        <meta name="description" content="MAЯTÍN's static landing pages" />
        <link rel="icon" href="https://marrtin.com/favicon.ico" />
        {/* import Inter font */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <div className="bg-slate-900 text-slate-100 text-center">
        {/* dont forget im using tailwindcss */}
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-4xl font-bold">good morning.</h1>
          <p className="text-lg font-medium">
            dear visitor, it seems you have stumbled upon my static landing pages. <br/>
            if you're a little confused, this is where i host any static landing pages for things like parked domains, url shorteners (when visited on the root domain), and other things. <br/>
            you might be looking for my main website, which is <Link href="https://marrtin.com" className="text-blue-500 underline hover:no-underline">here</Link>. <br/>
            <br/>
            or, if you're a little curious, check the landing pages out below.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col justify-center items-center bg-slate-500 rounded-lg p-4">
              <h2 className="text-2xl font-bold">url shortener</h2>
              <p className="text-lg font-medium">landing page for my url shortener(s)</p>
              <Link href="./shortener?domain=exm.pl" className="text-blue-900 underline hover:no-underline">visit</Link>
              <Link href="https://dub.co"className="text-blue-900 underline hover:no-underline">my url shorteners are powered by dub.co</Link>
            </div>
            <div className="flex flex-col justify-center items-center bg-slate-500 rounded-lg p-4">
              <h2 className="text-2xl font-bold">parked domain</h2>
              <p className="text-lg font-medium">landing page for parked domains</p>
              <Link href="./parked" className="text-blue-900 underline hover:no-underline">visit</Link>
            </div>
          </div>
          <footer className="flex flex-col justify-center items-center mt-4">
            <p className="text-lg font-medium">
              made with love by <Link href="https://marrtin.com" className="text-blue-400 underline hover:no-underline">MAЯTÍN</Link>
            </p>
            <p className="text-lg font-medium ml-2">
              powered by <Link href="https://vercel.com" className="text-blue-400 underline hover:no-underline">vercel</Link>
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
