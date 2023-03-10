import { Grid, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import Link from "next/link";

const Item = ({ children }) => {
  return (
    <div style={{ width: "100%", height: "200px", background: "#1a2027" }}>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container fixed>
          <Typography variant="h1" style={{ margin: "20px 0 20px" }}>
            Mui Playground
          </Typography>

          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={12}>
              <Link href="/forms">
                <Button variant="contained">Forms</Button>
              </Link>
              <Link href="/cards" style={{ marginLeft: "8px" }}>
                <Button variant="contained">Cards</Button>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Item />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Item />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Item />
            </Grid>

            <Grid item xs={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={6} lg={3}>
              <Item />
            </Grid>

            <Grid item xs={6} lg={2}>
              <Item />
            </Grid>
            <Grid item xs={6} lg={2}>
              <Item />
            </Grid>
            <Grid item xs={6} lg={2}>
              <Item />
            </Grid>
            <Grid item xs={6} lg={2}>
              <Item />
            </Grid>
            <Grid item xs={6} lg={2}>
              <Item />
            </Grid>
            <Grid item xs={6} lg={2}>
              <Item />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
