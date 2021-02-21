import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Cabecalho from "../Cabecalho/index.js";
import { GridList } from "@material-ui/core";
import React, { useState } from "react";

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      color: "black",
      paddingTop: "0%", // 16:9,
      marginTop: "5%",
      margin: "5%",
      alignItems: "left",
    },
  });

  function setProduct(id){
    let products = [];
    products.push(5);
    console.log(products,products.length);
  }
  function ImgMediaCard() {
    const classes = useStyles();
    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              //Length
              image="https://bancodeimagens.s3.us-east-2.amazonaws.com/antique.recycledwood.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                US$1,199.99
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="small" color="primary" onClick={setProduct}>
              add carrinho
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <Cabecalho />
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
