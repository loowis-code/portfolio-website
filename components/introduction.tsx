import styles from '@/components/css-modules/introduction.module.css';
import Image from 'next/image';

export default function Introduction () {

    return (
        <div className={styles.introduction}>
            <div className={styles.text}>
                <h1 className={styles.title}>
                    Hello 👋
                </h1>
                <div className={styles.information}>
                    My name is Lewis Inches. I&apos;m a fullstack software engineer working in Edinburgh.
                </div>
            </div>
            <div className={styles.picture}>
                <div className={styles.polaroid}>
                    <Image src='/picture.jpg' alt='A picture of Lewis Inches' width={300} height={300} />
                    <div className={styles.name}>Lewis Inches</div>
                </div>


            </div>

        </div>
    );
}