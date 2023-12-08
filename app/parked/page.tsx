import Head from 'next/head'
import Link from 'next/link'

export default function Parked({ searchParams }: any) {
    const domain = searchParams.domain ?? 'example.com'
    return (
        <>
            <Head>
                <title>
                    {domain} - parked domain
                </title>
                <meta name="description" content={domain + ' is a parked domain'} />
                <link rel="icon" href="https://marrtin.com/favicon.ico" />
                {/* import Inter font */}
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className="bg-slate-900 text-center">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-4xl font-bold">{domain}</h1>
                    <p className="text-lg font-medium">
                        a parked domain.
                    </p>
                    {(domain === 'example.com') ? (
                        <p className="text-lg font-medium">
                            example.com is an example domain. this landing page is designed for unrestricted use with any domain by simply adding a <code>domain</code> url parameter. <br/>
                            for example, <Link href="./parked?domain=marrtin.com" className="text-blue-500 underline hover:no-underline">?domain=marrtin.com</Link> would make the title of this page <code>marrtin.com - parked domain</code> and the description <code>marrtin.com is a parked domain</code>.
                        </p>
                    ) : (' ')}
                    
                </div>
            </div>
        </>
    )
}