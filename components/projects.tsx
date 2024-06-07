import styles from '@/components/css-modules/projects.module.css';

export default function Projects () {

    return (
        <div className={styles.card}>
            <div>
                <h2>Projects</h2>
                <div>
                    <div className={styles.imageWrapper}>
                        <img className={styles.image} src="/photography_website.png" alt="Screenshot preview of photography website"></img>
                    </div>
                    
                    <div>
                        <h3>Photography Website</h3>
                        <p>
                            A website used to display my photography, built using Next.js and FaunaDB.
                        </p>
                        <a href="https://www.lewisinches.pictures">Go to Project</a>
                        <a href="https://github.com/LewisI224/photography-website">Go to Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
}