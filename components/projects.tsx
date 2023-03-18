import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import styles from '@/components/css-modules/projects.module.css';

export default function Projects () {

    return (
        <div>
            <h2 className={styles.header}>Projects</h2>

            <Card className={styles.card} sx={{ my: 1}}>
                <CardMedia
                    sx={{ height: 250 }}
                    image="/photography_website.png"
                    title="photography website"
                />
                <CardContent>
                    <h3 className={styles.subheader}>Photography Website</h3>
                    <p className={styles.main}>
                    A website used to display my photography, built using Next.js and FaunaDB.
                    </p>
                    <Button className={styles.linkButton} variant='outlined' startIcon={<LinkIcon />}href="https://www.lewisinches.pictures">Link to Project</Button>
                </CardContent>
            </Card>

            <Card className={styles.card} sx={{ my: 1}}>
                <CardContent>
                    <h3 className={styles.subheader}>Portfolio Website</h3>
                    <p className={styles.main}>
                    A personal portfolio website built using Next.js with TypeScript.
                    </p>
                </CardContent>
            </Card>

        </div>
    );
}