import Head from 'next/head';
import { Header } from 'loowis-component-library';
import styles from '@/components/css-modules/layout.module.css';

type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.main}>

            <Head>
                <title>Lewis Inches - Portfolio</title>
                <meta name="description" content="Hi, My name is Lewis Inches and I'm a software engineer from Edinburgh. I currently work as a fullstack web developer at Skyscanner in Edinburgh." />
                <link rel="icon" href="/favicon.png" sizes="any" />
            </Head>

            <Header navTabs={['HOME', 'ABOUT ME', 'PROJECTS']} navLinks={['/', '#aboutme', '#projects']} />

            {children}

        </div>
    )
}