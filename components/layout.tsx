import Head from 'next/head';
import Header from '@/components/header'
import styles from '@/components/css-modules/layout.module.css';

type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.main}>
            <Head>
            <title> Lewis Inches</title>
            <meta name="description" content="I am a Software Engineer based in Edinburgh. This site details some information about me." />
            </Head>

            <Header />

            {children}

        </div>
    )
}