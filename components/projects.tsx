import styles from '@/components/css-modules/projects.module.css';
import { Polaroid } from 'loowis-component-library';

export default function Projects () {

    return (
        <div className={styles.card}>
            <h2 className={styles.header} tabIndex={0} id={"projects"}>Projects</h2>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <Polaroid 
                        filename='/photography_website.png'
                        alt='Photography Website screenshot'
                        title='Photography Portfolio'
                        caption=' My photography portfolio website, built using Next.js and FaunaDB.'
                        links=
                        {
                            [{
                                href: 'https://pictures.loowis.co.uk',
                                text: 'Website Link'
                            },
                            {
                                href: 'https://github.com/loowis-code/photography-website',
                                text: 'Github Link',
                            }]
                        }
                    />
                </div>

                <div className={styles.project}>
                    <Polaroid 
                        filename='/ez-insulin.png'
                        alt='ezInsulin screenshot'
                        title='Insulin Calculator'
                        caption='An app for Type 1 diabetics to calculate how much insulin they need to take based on ingested carbs and current blood sugar.'
                        links=
                        {
                            [{
                                href: 'https://github.com/loowis-code/photography-website',
                                text: 'Github Link',
                            }]
                        }
                    />
                </div>
            </div>
        </div>
    );
}