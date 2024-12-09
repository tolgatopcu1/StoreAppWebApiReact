import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ServerError(){
    return(
        <Container component={Paper} sx={{height:400}}>
            <Typography gutterBottom variant="h3">Ooops - we could not find what are looking for</Typography>
            <Divider />
            <Button fullWidth component={Link} to='/catalog'>Go back to shop</Button>
        </Container>
    )
}