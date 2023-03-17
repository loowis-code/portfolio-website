import Head from 'next/head';
import Header from '@/components/header'
import styles from '@/components/css-modules/layout.module.css';

type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
            <Head>
            <title> Lewis Inches</title>
            <meta name="description" content="Personal portfolio website of a software engineer based in Edinburgh." />
            </Head>

            <Header />

            {children}
            </div>
        </div>
    )
}