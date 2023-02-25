import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CV () {

    return (
        <div>
            <Typography variant="h4">CV</Typography>


            <Card sx={{ my: 1}}>
                <CardContent>
                    <Typography variant="h5">Education</Typography>
                    <Typography variant="body1">
                    Studied at Heriot-Watt University from 2018 to 2022 and achieved a first class honours degree in Computer Science.
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ my: 1}}>
                <CardContent>
                    <Typography variant="h5">Experience</Typography>
                    <Typography variant="body1">
                    In the Summer of 2020 I took part in a summer learning programme with the NCSC about Cyber Security, the following summer I had an internship with BT Security in Glasgow.
                    <br></br>
                    <br></br>
                    Since September 2022 I have been working as a Software Engineer at Skyscanner 
                    </Typography>
                </CardContent>
            </Card>

        </div>
    );
}