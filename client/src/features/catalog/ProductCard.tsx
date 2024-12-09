import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/layout/models/product";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface Props{
    product : Product;
}

export default function ProductCard({product} : Props)
{
    return(
        <>
            <Card>
                <CardHeader 
                    avatar={
                        <Avatar sx={{bgcolor:"#6F4F28"}}>
                            {product.name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={product.name}
                    titleTypographyProps={{
                        sx: {fontWeight:"bold", color:"primary.main"}
                    }}
                />
                <CardMedia
                    sx={{ height: 140, backgroundSize:"contain", bgcolor:"" }}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom color="#6F4F28" variant="h5">
                        ₺{(product.price/100).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" sx={{ color:  'primary.main' }}>
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" >Add to cart</Button>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small" >View</Button>
                </CardActions>
            </Card>
        </>
    )
}