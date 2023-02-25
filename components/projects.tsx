import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Projects () {

    return (
        <div>
            <Typography variant="h4">Projects</Typography>

            <Card sx={{ my: 1}}>
                <CardMedia
                    sx={{ height: 250 }}
                    image="/photography_website.png"
                    title="photography website"
                />
                <CardContent>
                    <Typography variant="h5">Photography Website</Typography>
                    <Typography variant="body1">
                    A website used to display my photography, built using Next.js, FaunaDB and an S3 bucket.
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ my: 1}}>
                <CardContent>
                    <Typography variant="h5">Portfolio Website</Typography>
                    <Typography variant="body1">
                    A personal portfolio website built using Next.js and TypeScript.
                    </Typography>
                </CardContent>
            </Card>

        </div>
    );
}