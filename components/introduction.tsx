import styles from '@/components/css-modules/introduction.module.css';
import Image from 'next/image';

export default function Introduction () {

    return (
        <div className={styles.jumbotron}>
            <div>
                <h1>Hi👋My name is Lewis</h1>
                <h2>I&apos;m a software engineer from Edinburgh</h2>
            </div>

            <Image className={styles.image} src={'/picrew.jpg'} alt={'Lewis Inches'} width={200} height={200} />
 
        </div>
    );
}