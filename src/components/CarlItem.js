import { 
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Box
 } from '@mui/material';
    import DeleteIcon from '@mui/icons-material/Delete';
    import RemoveIcon from '@mui/icons-material/Remove';
    import AddIcon from '@mui/icons-material/Add'
    import { useCotext } from 'react';
    import { ProductContext } from "../contexts/ProductContext";

    function CartItem({item}) {
        const{
            removerdoCarrinho,
            incrementarQuantidade,
            decrementarQuantidade,
        } = useContext (ProductContext);
        return (
            <ListItem secondaryAction={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => decrementarQuantidade(item.id)}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography variant='body1' component="span" sx={{mx: 1 }}>
                        {item.quantidade}
                    </Typography>
                    <IconButton on onClick={() => incrementarQuantidade (item.id)}>
                        <AddIcon />
                    </IconButton>
                </Box>
            }
        )
    } 