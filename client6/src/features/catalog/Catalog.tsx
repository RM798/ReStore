import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props{
    products: Product[];
    addProduct: () => void;
}


export default function Catalog(props: Props){
    return(
        <>
            <List>
               {props.products.map(product => (
                <ListItem key={product.id}>{product.name}-{product.price}
                    <ListItemAvatar>
                        <Avatar src="{product.pictureUrl}" />
                    </ListItemAvatar>
                    <ListItemText>{product.name} - {product.price}</ListItemText>
                </ListItem>
               ))}
            </List>
            <Button variant='contained' onClick={props.addProduct}>Add product</Button>
        </>
    )
}