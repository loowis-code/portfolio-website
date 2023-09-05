import styles from '@/components/css-modules/projects.module.css';

export default function Projects () {

    return (
        <div className={styles.main}>
            <h2 className={styles.header}>Projects</h2>

            <div className={`card mb-3 shadow-lg ${styles.card}`}>
            <img src="/photography_website.png" className="card-img-top" alt="Screenshot preview of photography website"></img>

                <div className="card-body">
                    <h3 className={styles.header}>Photography Website</h3>
                    <p className="card-text">
                    A website used to display my photography, built using Next.js and FaunaDB.
                    </p>
                    <a className={styles.link} href="https://www.lewisinches.pictures">Go to Project</a>
                    <a className={styles.link} href="https://github.com/LewisI224/photography-website">Go to Code</a>
                </div>
            </div>

            {/* <div className={`card mb-3 shadow-lg ${styles.card}`}>
                <div className="card-body">
                    <h3 className={styles.header}>Portfolio Website</h3>
                    <p className="card-text">
                    A personal portfolio website built using Next.js with TypeScript.
                    </p>
                </div>
            </div> */}

        </div>
    );
}