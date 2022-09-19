import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';


export  function ActionAreaCard(props) {
  console.log(props);
    
  return (
    <Card sx={{ maxWidth:345 }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardMedia
          component="img"
          height="140"
          image={props.tr.image}
          alt="supplement"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {props.tr.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           {props.tr.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" padding = '0px' margin = "0px">
          {props.tr.price}
          </Typography>
          <CardActions>
        <Button size="small" variant="contained" color="success">Add to Cart</Button>
      </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
