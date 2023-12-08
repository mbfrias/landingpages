import Head from 'next/head'
import Link from 'next/link'

export default function Shortener({ searchParams }: any) {
    const domain = searchParams.domain ?? 'exm.pl'
    return (
        <>
            <Head>
                <title>
                    {domain} - a url shortener
                </title>
                <meta name="description" content={domain + ' is a url shortener'} />
                <link rel="icon" href="https://marrtin.com/favicon.ico" />
                {/* import Inter font */}
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className="bg-slate-900 text-center">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold">{domain}</h1>
                    <p className="text-lg font-medium">
                        a url shortener.
                    </p>
                    {(domain === 'exm.pl') ? (
                        <p className="text-lg font-medium">
                            exm.pl is an example domain. this landing page is designed for unrestricted use with any domain by simply adding a <code>domain</code> url parameter. <br/>
                            for example, <Link href="./shortener?domain=mvrt.in" className="text-blue-500 underline hover:no-underline">?domain=mvrt.in</Link> would make the title of this page <code>mvrt.in - a url shortener</code> and the description <code>mvrt.in is a url shortener</code>.
                        </p>
                    ) : (' ')}
                    
                </div>
            </div>
        </>
    )
}
