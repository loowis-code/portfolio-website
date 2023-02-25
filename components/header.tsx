import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


export default function Header () {

    return (
        <Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h1" >
                Lewis Inches
                </Typography>
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h2">
                Software Engineer
                </Typography>
            </Grid>
        </Grid>
    );
}