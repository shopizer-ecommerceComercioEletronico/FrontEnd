
import "./styles.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Cabecalho from "../Cabecalho/index.js"
import { GridList } from "@material-ui/core";
export default function Home() {
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    color: "black" 
  },
});

function ImgMediaCard() {
  const classes = useStyles();

  return (
  <div>
    <Card className={classes.root} >
      <CardActionArea >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://bancodeimagens.s3.us-east-2.amazonaws.com/antique.recycledwood.jpg"
          title="Contemplative Reptile"
          
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
          US$1,199.99
          </Typography>
        </CardContent>
      </CardActionArea >
      <CardActions >
        <Button variant="contained" size="small" color="primary">
          add carrinho
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
  return(<div>
    <Cabecalho/> 
<GridList>
    <ImgMediaCard></ImgMediaCard>
    <ImgMediaCard></ImgMediaCard>
    <ImgMediaCard></ImgMediaCard>
    <ImgMediaCard></ImgMediaCard>
    <ImgMediaCard></ImgMediaCard>
    <ImgMediaCard></ImgMediaCard>
   </GridList>


  </div>
   
  );
}



