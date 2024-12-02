import styles from '@/components/css-modules/projects.module.css';
import Image from 'next/image';

export default function Projects () {

    return (
        <div className={styles.card}>
            <h2 className={styles.header} tabIndex={0} id={"projects"}>Projects</h2>
            <div className={styles.project}>
                <div className={styles.info}>
                    <h3 tabIndex={0}>Photography Portfolio</h3>
                    <p tabIndex={0}>
                        My photography portfolio website, built using Next.js and FaunaDB. 
                    </p>
                    <div className={styles.linksBackup}>
                        <a  className={styles.link} href=''>Website Link</a>
                        <a  className={styles.link} href=''>Github Link</a>
                    </div>
                </div>
                <div className={styles.polaroid}>
                    <Image src="/photography_website.png" alt="Photography Portfolio" width={400} height={200} className={styles.image} />
                    <div className={styles.links}>
                        <a  className={styles.link} href='https://pictures.loowis.co.uk'>Website Link</a>
                        <a  className={styles.link} href='https://github.com/LewisI224/photography-website'>Github Link</a>
                    </div>

                </div>
            </div>

            <div className={styles.project}>
                <div className={styles.info}>
                    <h3 tabIndex={0}>Insulin Calculator</h3>
                    <p tabIndex={0}>
                        My photography portfolio website, built using Next.js and FaunaDB. 
                    </p>
                    <div className={styles.linksBackup}>
                        <a  className={styles.link} href=''>Website Link</a>
                        <a  className={styles.link} href=''>Github Link</a>
                    </div>
                </div>
                <div className={styles.polaroid}>
                    <Image src="/ez-insulin.png" alt="ezInsulin screenshot" width={108} height={240} className={styles.image}/>
                    <div className={styles.links}>
                        <a  className={styles.link} href='https://github.com/LewisI224/EzInsulin'>Github Link</a>
                    </div>

                </div>
            </div>

        </div>
    );
}