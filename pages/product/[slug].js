import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import useStyles from "../../utils/styles";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import Image from "next/image";
import {
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Button,
} from "@material-ui/core";

function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  return product ? (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to Products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography className={classes.bold}>Product Name: </Typography>
              <Typography>&nbsp;</Typography>{" "}
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.bold}>Category: </Typography>
              <Typography>&nbsp;</Typography>
              <Typography>{product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.bold}>Rating: </Typography>
              <Typography>&nbsp;</Typography>
              <Typography>
                {product.rating} stars ({product.numReviews})
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.bold}>Brand: </Typography>
              <Typography>&nbsp;</Typography>

              <Typography>{product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.bold}>Stock Count: </Typography>
              <Typography>&nbsp;</Typography>

              <Typography>{product.countInStock}</Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.bold}>
                {"Description: "}
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography>{product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>${product.price}</Typography>
                </Grid>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>
                    {product.countInStock ? "In Stock" : "Out of Stock"}
                  </Typography>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add to Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  ) : (
    <Layout>
      <Typography>Product Not Found</Typography>
    </Layout>
  );
}

export default ProductScreen;
