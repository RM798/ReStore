import { ListItem, ListItemAvatar, Avatar, ListItemText, CardMedia, Typography, Card, CardContent, Button, CardActions, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";


interface Props{
    product: Product;
}
// export default function ProductCard({product}: Props){
//     return(
//         <ListItem key={product.id}>
//             <ListItemAvatar>
//                 <Avatar src={product.pictureUrl} />
//             </ListItemAvatar>
//             <ListItemText>
//                 {product.name}-{product.price}
//             </ListItemText>
//         </ListItem>
        
//     )
// }


export default function ProductCard({product}: Props){
    return(
        <Card> 
            <CardHeader>
                avatar={
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'secondary.main'}
                }}
            </CardHeader>
        <CardMedia
            sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
            // image="http://picsum.photos/200"
            // title="Contemplative Reptile"
            image={product.pictureUrl}
            title={product.name}
        />
        <CardContent>
            <Typography gutterBottom color='secondary' variant="h5" >
            {(product.price / 100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.brand}/{product.type}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add to cart</Button>
            <Button size="small">View</Button>
        </CardActions>
    </Card>
        
    )
}