import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";


export default function ProductDetails(){
   // const {id} = useParams<{id: string}>();
   const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/products/${id}')
    //         .then(response => setProduct(response.data))
    //         .catch(error => console.log(error))
    //         .finally(() => setLoading(false));
    // }, [id]) 

    useEffect(() => {
        if(id !== undefined){
            agent.Catalog.details(parseInt(id))
            .then(response => setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        } else{
            console.error('if is undefined');

            setLoading(false);
        }
        
    }, [id]) 


    if(loading) return <LoadingComponent message='Loading product...' />

    if(!product) return <NotFound />
    return(
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src= {product.pictureUrl} alt={product.name} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{mb: 2}}/>
                <Typography variant='h4' color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}