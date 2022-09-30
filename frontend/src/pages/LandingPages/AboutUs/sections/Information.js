/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import Events from "customComponents/Events"
function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={7}>
                  <Typography variant="h1" >About Us </Typography>
                  <Typography variant="body1" align="justify">
                  Our goal when we created Tesla a decade ago was the same as it is today: to accelerate the advent of sustainable transport by bringing compelling mass market electric cars to market as soon as possible. If we could have done that with our first product, we would have, but that was simply impossible to achieve for a startup company that had never built a car and that had one technology iteration and no economies of scale. Our first product was going to be expensive no matter what it looked like, so we decided to build a sports car, as that seemed like it had the best chance of being competitive with its gasoline alternatives.

I suspected that this could be misinterpreted as Tesla believing that there was a shortage of sports cars for rich people.
                  </Typography>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <Events/>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
