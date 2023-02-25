import Head from 'next/head';
import Header from '@/components/header'

type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Head>
            <title> Lewis Inches</title>
            <meta name="description" content="I am a Software Engineer based in Edinburgh. This site details some information about me." />
            </Head>

            <Header />

            {children}

        </div>
    )
}