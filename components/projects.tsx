import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import styles from '@/components/css-modules/projects.module.css';

export default function Projects () {

    return (
        <div>
            <Typography variant="h4">Projects</Typography>

            <Card className={styles.card} sx={{ my: 1}}>
                <CardMedia
                    sx={{ height: 250 }}
                    image="/photography_website.png"
                    title="photography website"
                />
                <CardContent>
                    <Typography className={styles.main} variant="h5">Photography Website</Typography>
                    <Typography className={styles.main} variant="body1">
                    A website used to display my photography, built using Next.js, FaunaDB and an S3 bucket.
                    </Typography>
                    <Button variant='contained' startIcon={<LinkIcon />}href="https://www.lewisinches.pictures">Link to Project</Button>
                </CardContent>
            </Card>

            <Card className={styles.card} sx={{ my: 1}}>
                <CardContent>
                    <Typography className={styles.main} variant="h5">Portfolio Website</Typography>
                    <Typography className={styles.main} variant="body1">
                    A personal portfolio website built using Next.js and TypeScript.
                    </Typography>
                </CardContent>
            </Card>

        </div>
    );
}